from django.db import models

# Create your models here.

class Donuts(models.Model):
    donut_name = models.CharField(max_length=45)
    donut_url = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'donuts'