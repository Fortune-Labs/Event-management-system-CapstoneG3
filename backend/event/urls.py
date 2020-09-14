from django.urls import path
from .views import EventCreate

from django.urls import path
from rest_framework import serializers


app_name = 'event'

urlpatterns = [
    path('event-create/', EventCreate.as_view(), name='event-create'),
]
