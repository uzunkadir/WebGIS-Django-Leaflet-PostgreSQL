from django.shortcuts import render

from shp.models import Akarsular
from shp.models import Camiler
from shp.models import Goller
from shp.models import Ilcesinir
from shp.models import Mahallesinir
from shp.models import Kartdolum
from shp.models import Metrodurak
from shp.models import Nobetcieczane
from shp.models import Otobusdurak
from shp.models import Saglikmerkez
from shp.models import Taksiduraklari
from shp.models import Tarihiyerler
from shp.models import Tumeczane
from shp.models import Mahallenufus

from django.core.serializers import serialize

# Create your views here.

def index(request):

    context = {
        "akarsular"   : serialize('geojson',Akarsular.objects.all()),
        "camiler"     : serialize('geojson',Camiler.objects.all()),
        "goller"      : serialize('geojson',Goller.objects.all()),
        "ilcesinir"   : serialize('geojson',Ilcesinir.objects.all()),
        "mahallesinir": serialize('geojson',Mahallesinir.objects.all()),
        "kartdolum"   : serialize('geojson',Kartdolum.objects.all()),
        "metrodurak"  : serialize('geojson',Metrodurak.objects.all()),
        "nobetcieczane": serialize('geojson',Nobetcieczane.objects.all()),
        "otobusdurak"  : serialize('geojson',Otobusdurak.objects.all()),
        "saglikmerkez" : serialize('geojson',Saglikmerkez.objects.all()),
        "taksidurak"   : serialize('geojson',Taksiduraklari.objects.all()),
        "tarihiyerler" : serialize('geojson',Tarihiyerler.objects.all()),        
        "tumeczane"    : serialize('geojson',Tumeczane.objects.all()),
        "mahallenufus" : serialize('geojson',Mahallenufus.objects.all()),
    }

    return render(request,'index.html', context)


