from rest_framework import serializers

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

    # Validation of room capacity against booked seats
    def validate_event(self, value):
        if value:
            if value.room_capacity <= Booking.objects.count():
                raise serializers.ValidationError(
                    {"Fully Booked": "All seats have been allocated"})
        return value
