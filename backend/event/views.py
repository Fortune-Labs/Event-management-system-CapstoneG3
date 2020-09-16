from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import EventSerializer, BookingSerializer
from .models import Event, Booking

# Create your views here.


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


class EventView(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class BookingView(generics.ListCreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

    def post(self, request):
        book = request.data
        serializer = self.serializer_class(data=book)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        book_data = serializer.data
        book = Booking.objects.get(event=book_data['event'])

        return Response(book_data, status=status.HTTP_201_CREATED)


class BookedEventsView(generics.ListAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
