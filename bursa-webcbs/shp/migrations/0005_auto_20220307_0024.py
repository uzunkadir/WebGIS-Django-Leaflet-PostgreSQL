# Generated by Django 3.2.12 on 2022-03-06 21:24

import django.contrib.gis.db.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shp', '0004_akarsular_ilcesinir'),
    ]

    operations = [
        migrations.CreateModel(
            name='Camiler',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ad', models.CharField(blank=True, max_length=255, null=True)),
                ('geom', django.contrib.gis.db.models.fields.GeometryField(blank=True, null=True, srid=4326)),
            ],
            options={
                'db_table': 'camiler',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Goller',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ad', models.CharField(blank=True, max_length=255, null=True)),
                ('geom', django.contrib.gis.db.models.fields.GeometryField(blank=True, null=True, srid=4326)),
            ],
            options={
                'db_table': 'goller',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Kartdolum',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ad', models.CharField(blank=True, max_length=255, null=True)),
                ('geom', django.contrib.gis.db.models.fields.GeometryField(blank=True, null=True, srid=4326)),
            ],
            options={
                'db_table': 'kartdolum',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Mahallesinir',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mahalleadi', models.CharField(blank=True, max_length=255, null=True)),
                ('geom', django.contrib.gis.db.models.fields.GeometryField(blank=True, null=True, srid=4326)),
            ],
            options={
                'db_table': 'mahallesinir',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Nobetcieczane',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ad', models.CharField(blank=True, max_length=255, null=True)),
                ('geom', django.contrib.gis.db.models.fields.GeometryField(blank=True, null=True, srid=4326)),
            ],
            options={
                'db_table': 'nobetcieczane',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Otobusdurak',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('durakno', models.CharField(blank=True, max_length=255, null=True)),
                ('durakadi', models.CharField(blank=True, max_length=255, null=True)),
                ('geom', django.contrib.gis.db.models.fields.GeometryField(blank=True, null=True, srid=4326)),
            ],
            options={
                'db_table': 'otobusdurak',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Tumeczane',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ad', models.CharField(blank=True, max_length=255, null=True)),
                ('geom', django.contrib.gis.db.models.fields.GeometryField(blank=True, null=True, srid=4326)),
            ],
            options={
                'db_table': 'tumeczane',
                'managed': False,
            },
        ),
        migrations.AlterModelOptions(
            name='ilcesinir',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='metrodurak',
            options={'managed': False},
        ),
    ]
