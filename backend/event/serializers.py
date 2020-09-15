from rest_framework import serializers

from event.models import Event


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        # fields=['times','speaker','room-capacity','topic','tagline']
        exclude = []
