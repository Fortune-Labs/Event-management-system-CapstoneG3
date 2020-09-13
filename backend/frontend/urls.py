from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets

router = routers.DefaultRouter()
router.register(r'AddEvent', AddEventViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
