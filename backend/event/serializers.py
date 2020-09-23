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
        exclude = []
        validators = [
            UniqueTogetherValidator(
                queryset=Booking.objects.all(),
                fields=['user', 'time']
            )
        ]

    # # Validation of room capacity against booked seats
    # def validate_event(self, value):
    #     if value:
    #         if Booking.objects.count() >= value.room_capacity:
    #             raise serializers.ValidationError(
    #                 {"Fully Booked": "All seats have been allocated"})
    #     return value
