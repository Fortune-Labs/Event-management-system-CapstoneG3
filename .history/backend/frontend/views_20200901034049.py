from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth.models import User
# Create your views here.

def index(request):
    return render(request, 'build/index.html')

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    

