from rest_framework import serializers

from event.models import Event, Booking



class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        # fields=['times','speaker','room-capacity','topic','tagline']
        exclude = []
        
# Event Booking Serilaizer
class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        exclude = []
        
    # Validation of room capacity against booked seats
    def validate_event(self, value):
        if value:
            # event = Event.objects.get(pk=value)
            if value.room_capacity <= Booking.objects.count():
                raise serializers.ValidationError(
                    {"Fully Booked": "All seated have been allocated"})
        return value
