from django.shortcuts import render
from rest_framework import generics, status
from .serializers import EventSerializer
from .models import Event

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



