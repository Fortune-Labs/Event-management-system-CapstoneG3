
from django.urls import path
from .views import RegisterView
from .views import LoginAPIView, EventCreate
from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import serializers

#router = routers.DefaultRouter()
#router.register(r'Event', EventViewSet)
urlpatterns = [
    # path('', views.index)
    path('register/', RegisterView.as_view(), name="register"),
    path('login/', LoginAPIView.as_view(), name="login"),
    path('api/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    #path('', include(router.urls)),
  #  path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('event-create/', EventCreate.as_view()),
]