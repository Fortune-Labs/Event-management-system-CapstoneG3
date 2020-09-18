from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import EventSerializer, BookingSerializer
from .models import Event, Booking
from user_account.models import Account
from rest_framework.views import APIView


# Event Creation view


class EventCreate(generics.GenericAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def post(self, request):
        event = request.data
        serializer = self.serializer_class(data=event)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        event_data = serializer.data
        event = Event.objects.get(topic=event_data['topic'])

        return Response(event_data, status=status.HTTP_201_CREATED)

# List of all events created


class EventView(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

# Events booking view


class BookingView(generics.ListCreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

    def post(self, request):
        book = request.data
        serializer = self.serializer_class(data=book)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        book_data = serializer.data

        return Response(book_data, status=status.HTTP_201_CREATED)

# List of all bookings made


class BookedEventsView(generics.ListAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

# User's view of all events booked


class EventsBookedByUser(APIView):
    def get(self, request, pk, format=None):
        try:
            u = Account.objects.get(pk=pk)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

        qs = u.booking_set.all().values_list("event", flat=True)
        qs = Event.objects.filter(pk__in=qs)
        events = EventSerializer(qs, many=True)
        return Response(events.data)

# View of all attendees of an event


class EventAttendees(APIView):
    def get(self, request, pk):
        print(pk)
        event = Event.objects.get(pk=pk)
        bookingset = Booking.objects.filter(event=event)
        events = BookingSerializer(bookingset, many=True)
        queryset = Event.objects.all()
        return Response(events.data)
