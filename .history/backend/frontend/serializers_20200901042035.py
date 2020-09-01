from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelsSerializer):
    class Meta:
        model = User
        fields = ields = ['id', 'username', 'password']