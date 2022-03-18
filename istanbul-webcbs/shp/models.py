
from django.contrib.gis.db import models

# Create your models here.


class Akaryakitistasyon(models.Model):
    ad   = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'akaryakitistasyon'


class Halkekmek(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'halkekmek'

class Ispark(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    parktipi = models.CharField(max_length=255, blank=True, null=True)
    kapasite = models.IntegerField( blank=True, null=True)
    calismasaatleri = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'ispark'


class Istanbulkart(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'istanbulkartdolum'

class Parklar(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'parklar'

class Saglikmerkezleri(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    kategori = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'saglikmerkezleri'

class Metrohat(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'metrohat'

class Metrodurak(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'metrodurak'

class Denizhat(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'denizhat'

class Denizdurak(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'denizdurak'



class Mahallesinir(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'mahallesinir'



class Mahallenufus(models.Model):
    ad = models.CharField(max_length=255, blank=True, null=True)
    geom = models.GeometryField(srid=4326, blank=True, null=True)
    nufus = models.FloatField()
    density = models.FloatField()
    class Meta:
        managed = False
        db_table = 'mahallenufus'



