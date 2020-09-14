from rest_framework import serializers
from .models import Account
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed
from .models import Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model=Event
        #fields=['times','speaker','room-capacity','topic','tagline']
        exclude=[]