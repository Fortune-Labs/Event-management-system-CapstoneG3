from django.shortcuts import render
#from rest_framework import viewsets

from django.shortcuts import render
from rest_framework import generics, status, permissions
from .serializers import RegisterSerializer, LoginSerializer
from rest_framework.response import Response
from .models import Account
from rest_framework.authtoken.serializers import AuthTokenSerializer
from django.contrib.auth import login
from knox.views import LoginView as KnoxLoginView
from rest_framework.permissions import IsAuthenticated, IsAdminUser

# Create your views here.
# from django.shortcuts import render


# class RegisterView(generics.GenericAPIView):

class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    # permission_classes = (IsAuthenticated)

    def post(self, request):
        print("request received")
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data = serializer.data
        user = Account.objects.get(email=user_data['email'])

        return Response(user_data, status=status.HTTP_201_CREATED)

class LoginAPIView(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPIView, self).post(request, format=None)
# class LoginAPIView(KnoxLoginView):
#     serializer_class = LoginSerializer
#     # permission_classes = [permissions.IsAuthenticated]

#     def post(self, request):
#         serializer = self.serializer_class(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)


# class LoginAPIView(KnoxLoginView):
#     permission_classes = [permissions.IsAuthenticated]

#     def post(self, request, format=None):
#         serializer = AuthTokenSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         # user = serializer.validated_data['user']
#         # login(request, user)
#         return super(LoginAPIView, self).post(request, format=None)

# class LoginAPIView(generics.GenericAPIView):    
#     serializer_class = LoginSerializer
#     def post(self, request):        
#         serializer = self.serializer_class(data=request.data)
#         serializer.is_valid(raise_exception=True)        
#         return Response(serializer.data, status=status.HTTP_200_OK)


