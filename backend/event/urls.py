from django.urls import path
from .views import EventCreate, BookingView, EventView, BookedEventsView, EventsBookedByUser

from django.urls import path
from rest_framework import serializers
from . import views


app_name = 'event'

urlpatterns = [
    path('event-create/', EventCreate.as_view(), name='event-create'),
    path('event-book/', BookingView.as_view(), name='event-booking'),
    path('view-events/', EventView.as_view(), name='event-list'),
    path('view-bookings/', BookedEventsView.as_view(), name='event-bookings'),
    path('userevents/<pk>/', views.EventsBookedByUser.as_view()),
]
