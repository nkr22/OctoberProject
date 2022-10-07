# from django.db import models

# # Create your models here.

# class Donuts(models.Model):
#     donut_name = models.CharField(max_length=45)
#     donut_url = models.CharField(max_length=45)

    
#     class Meta:
#         managed = False
#         db_table = 'donuts'

from django.db import models
class Donut (models.Model):
    description = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateField(auto_now_add=True)
    url = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.description[0:50]