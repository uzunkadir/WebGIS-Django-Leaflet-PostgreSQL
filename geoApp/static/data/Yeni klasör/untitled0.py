
import pandas as pd 
import requests
import urllib.parse
import re 
df = pd.read_excel("nufus.xlsx", header=None)

df.loc[:,"density"] = df.iloc[:,3] / max(df.iloc[:,3] )


centers = pd.read_json("mahallecenter.json")

centers["density"] = 0

for j in range(len(df)):

    for i in range(len(centers)):

        if re.search(df.iloc[j,2], centers.iloc[i,0], re.IGNORECASE):
            centers.iloc[i,-1] = df.iloc[j,-1]
            print(j,"yess")
            break

import json
# #POINT
sql_codes = []
for i in range(len(centers)):
    temp = json.dumps(centers.iloc[i,1])
    sorgu = f"""insert into mahallenufus (mahalleadi,geom,nufusdensity) select '{centers.iloc[i,0]}' , st_geomfromgeojson(' { temp}'), '{centers.iloc[i,-1]}';"""
    sql_codes.append (sorgu)

#POLYGON
# sql_codes = []
# for i in range(len(df)):
#     print(i,len(df))
#     pointlist = ""
#     for j in range(len(df.iloc[i,-1]['coordinates'][0][0])):
#         temp = ' '.join(map(str,df.iloc[i,-1]['coordinates'][0][0][j])) + "," 
#         pointlist += temp
#     pointlist = pointlist[:-1]
#     sorgu = f"insert into mahallesinir (mahalleadi,geom) select '{df.iloc[i,3]} ',st_makeline(st_geomfromtext('LINESTRING ( {pointlist} ) ',4326) );"
    
#     sql_codes.append (sorgu)
    
        

textfile = open("insert_sorgu.txt", "w")
for element in sql_codes:
    textfile.write(element + "\n")
textfile.close()
