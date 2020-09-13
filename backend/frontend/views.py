from django.shortcuts import render
from rest_framework import viewsets
from serializers import AddEventSerializer
from .models import AddEvent

#Create your views here.
class AddEventViewSet(viewsets.ModelViewSet):
    queryset = AddEvent.objects.all()
    serializer_class = AddEventSerializer
