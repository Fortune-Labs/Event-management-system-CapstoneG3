from django.urls import path
from .views import EventCreate
from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path, include
from rest_framework import serializers



urlpatterns = [
    path('api/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('event-create/', EventCreate.as_view()),
]