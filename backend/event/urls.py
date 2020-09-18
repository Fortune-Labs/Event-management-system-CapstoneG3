from django.urls import path
from .views import EventCreate, BookingView, EventView, BookedEventsView, EventsBookedByUser

from django.urls import path
from rest_framework import serializers
from . import views


app_name = 'event'

urlpatterns = [
    # Url for creating an event
    path('event-create/', EventCreate.as_view(), name='event-create'),
    # Url for booking an event
    path('event-book/', BookingView.as_view(), name='event-booking'),
    # Url for viewing all all events created
    path('view-events/', EventView.as_view(), name='event-list'),
    # Url for viewing all bookings made
    path('view-bookings/', BookedEventsView.as_view(), name='event-bookings'),
    # Url for user viewing events booked
    path('userevents/<pk>/', views.EventsBookedByUser.as_view()),
    # Url for viewing respective event attendees
    path('eventattendees/<pk>/', views.EventAttendees.as_view()),
]
