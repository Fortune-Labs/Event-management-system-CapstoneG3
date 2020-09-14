
from rest_framework import serializers
from .models import Account
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed
from .models import AddEvent


class RegisterSerializer(serializers.ModelSerializer):

    confirm_password = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = Account
        fields = ['first_name', 'last_name', 'email', 'password',
                  'confirm_password', 'username',  'phone', 'address']
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, attrs):
        email = attrs.get('email', '')
        username = attrs.get('username', '')
        password = attrs.get('password', '')
        confirm_password = attrs.get('confirm_password', '')

        if password != confirm_password:
            raise serializers.ValidationError(
                {'password': 'Password must match.'})

        if not username.isalnum():
            raise serializers.ValidationError(
                'The username should only contain alphanumeric characters')
        return attrs

    def create(self, validated_data):
        return Account.objects.create_user(**validated_data)


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255, min_length=3)
    password = serializers.CharField(
        max_length=68, min_length=6, write_only=True)
    username = serializers.CharField(
        max_length=255, min_length=3, read_only=True)
    tokens = serializers.CharField(max_length=68, min_length=6, read_only=True)

    class Meta:
        model = Account
        fields = ['email', 'password', 'username', 'tokens']

    def validate(self, attrs):
        email = attrs.get('email', '')
        password = attrs.get('password', '')

        user = auth.authenticate(email=email, password=password)
        if not user:
            raise AuthenticationFailed('Invalid credentials, try again')
        if not user.is_active:
            raise AuthenticationFailed('Account disabled, contact admin')

        # if not user.is_verified:
        #     raise AuthenticationFailed('Email is not verified')

        return {
            'email': user.email,
            'username': user.username,
            'tokens': user.tokens()
        }

        return super().validate(attrs)
from rest_framework import serializers

class AddEventSerializer(serializers.ModelSerializer):
    class Meta:
        model=AddEvent
        fields=['times','speakers','room-capacity','topics']