
from django.contrib.gis.db import models

# Create your models here.


class Akarsular(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'akarsular'


class Camiler(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'camiler'


class Goller(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'goller'


class Ilcesinir(models.Model):
    ilceadi = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'ilcesinir'



class Mahallesinir(models.Model):
    mahalleadi = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'mahallesinir'



class Kartdolum(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'kartdolum'



class Metrodurak(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'metrodurak'



class Nobetcieczane(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'nobetcieczane'


class Otobusdurak(models.Model):
    durakno = models.CharField(primary_key=True,max_length=255)
    durakadi = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'otobusdurak'

class Saglikmerkez(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'saglikmerkez'

class Taksiduraklari(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'taksiduraklari'


class Tarihiyerler(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'tarihiyerler'


class Tumeczane(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'tumeczane'


class Mahallenufus(models.Model):
    mahalleadi = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    nufusdensity = models.FloatField()
    class Meta:
        managed = False
        db_table = 'mahallenufus'



