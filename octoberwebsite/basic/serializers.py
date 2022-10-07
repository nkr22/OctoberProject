from dataclasses import fields
from rest_framework.serializers import ModelSerializer
from .models import Donut
class DonutSerializer(ModelSerializer):
    class Meta:
        model = Donut
        fields = '__all__'