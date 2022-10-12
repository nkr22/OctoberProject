from django.urls import path
from . import views

urlpatterns = [
    path("", views.getRoutes, name='routes'),
    path("donuts/", views.getDonuts, name='donuts'),
    path("donut/<str:pk>/", views.getDonut, name='donut')
    
]