from rest_framework import serializers
from .models import AddEvent

class AddEventSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AddEvent
        fields = ['url', 'times', 'speakers', 'room_capacity','topics']