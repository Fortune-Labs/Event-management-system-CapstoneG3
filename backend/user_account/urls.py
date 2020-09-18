
from django.urls import path
from .views import RegisterView
from .views import LoginAPIView
from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import routers

router = routers.DefaultRouter()

urlpatterns = [

    path('', include(router.urls)),
    path('register/', RegisterView.as_view(), name="register"),
    path('login/', LoginAPIView.as_view(), name="login"),
    path('api/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

]
