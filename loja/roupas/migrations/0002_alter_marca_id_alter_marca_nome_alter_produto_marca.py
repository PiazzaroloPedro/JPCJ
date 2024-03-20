# Generated by Django 5.0.3 on 2024-03-20 18:02

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('roupas', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='marca',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='marca',
            name='nome',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='produto',
            name='marca',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='produto_marca', to='roupas.marca'),
        ),
    ]