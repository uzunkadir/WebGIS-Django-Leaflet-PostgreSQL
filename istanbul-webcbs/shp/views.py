from django.shortcuts import render

from shp.models import Mahallenufus, Akaryakitistasyon, Halkekmek, Ispark, Istanbulkart, Mahallesinir, Parklar, Saglikmerkezleri
from shp.models import Metrohat, Metrodurak, Denizhat, Denizdurak
from django.core.serializers import serialize

# Create your views here.

def index(request):

    context = {

        "denizdurak"        : serialize('geojson',Denizdurak.objects.all()),
        "denizhat"          : serialize('geojson',Denizhat.objects.all()),
        "metrodurak"        : serialize('geojson',Metrodurak.objects.all()),
        "metrohat"          : serialize('geojson',Metrohat.objects.all()),
        "saglikmerkezleri"  : serialize('geojson',Saglikmerkezleri.objects.all()),
        "parklar"           : serialize('geojson',Parklar.objects.all()),
        "mahallesinir"      : serialize('geojson',Mahallesinir.objects.all()),
        "istanbulkart"      : serialize('geojson',Istanbulkart.objects.all()),
        "ispark"            : serialize('geojson',Ispark.objects.all()),
        "halkekmek"         : serialize('geojson',Halkekmek.objects.all()),        
        "akaryakitistasyon" : serialize('geojson',Akaryakitistasyon.objects.all()),
        "mahallenufus"      : serialize('geojson',Mahallenufus.objects.all()),
    }

    return render(request,'index.html', context)


