from django.shortcuts import render
from django.http import HttpResponse
from .models import Donuts


def IndexPageView(request):
    donuts = Donuts.objects.all()

    context = {
        "donuts": donuts
    }
    return render(request, 'basic.html', context)
