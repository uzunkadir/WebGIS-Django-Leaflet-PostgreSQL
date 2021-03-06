# Generated by Django 3.2.12 on 2022-03-06 21:41

import django.contrib.gis.db.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shp', '0005_auto_20220307_0024'),
    ]

    operations = [
        migrations.CreateModel(
            name='Saglikmerkez',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ad', models.CharField(blank=True, max_length=255, null=True)),
                ('geom', django.contrib.gis.db.models.fields.GeometryField(blank=True, null=True, srid=4326)),
            ],
            options={
                'db_table': 'saglikmerkez',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Taksiduraklari',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ad', models.CharField(blank=True, max_length=255, null=True)),
                ('geom', django.contrib.gis.db.models.fields.GeometryField(blank=True, null=True, srid=4326)),
            ],
            options={
                'db_table': 'taksiduraklari',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Tarihiyerler',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ad', models.CharField(blank=True, max_length=255, null=True)),
                ('geom', django.contrib.gis.db.models.fields.GeometryField(blank=True, null=True, srid=4326)),
            ],
            options={
                'db_table': 'tarihiyerler',
                'managed': False,
            },
        ),
        migrations.AlterModelTable(
            name='ilcesinir',
            table='ilcesinir',
        ),
        migrations.AlterModelTable(
            name='metrodurak',
            table='metrodurak',
        ),
    ]
