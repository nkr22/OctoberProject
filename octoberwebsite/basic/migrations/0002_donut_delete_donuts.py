# Generated by Django 4.1.2 on 2022-10-06 03:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('basic', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Donut',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(blank=True, null=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('created', models.DateField(auto_now_add=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Donuts',
        ),
    ]
