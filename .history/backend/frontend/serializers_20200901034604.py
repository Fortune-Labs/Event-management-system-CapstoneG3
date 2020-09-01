from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelsSerializers):
    class Meta:
        model = User
        fields = ields = ['id', 'username', 'password']