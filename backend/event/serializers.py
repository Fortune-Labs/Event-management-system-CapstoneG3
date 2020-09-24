from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator

from event.models import Event, Booking


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        exclude = []


# Event Booking Serilaizer


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
<<<<<<< HEAD
        # depth = 1
=======
>>>>>>> 29e877fc88a02bab2f79f2e04c9a853893ecc1a2
        exclude = []
        validators = [
            UniqueTogetherValidator(
                queryset=Booking.objects.all(),
                fields=['user', 'time', 'event'],
                message="Already booked an Event at the same time! Kindly select a different time."
            )

        ]

    def validate(self, attr):

        time = attr.get("time", None)
        event = attr.get("event", None)

        if event:

            if event.room_capacity <= Booking.objects.filter(event=event, time=time).count():
                raise serializers.ValidationError(
                    {"Fully Booked": "All seated have been allocated for this session."})
        return attr
