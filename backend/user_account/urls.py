from .views import RegisterView, LoginAPIView
# from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path, include
# from django.contrib.auth.models import User
from rest_framework import routers
from knox import views as knox_views

router = routers.DefaultRouter()

urlpatterns = [

    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/login/', LoginAPIView.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),

]
