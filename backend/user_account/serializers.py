
from rest_framework import serializers
from .models import Account
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed
import re


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
        phone = attrs.get('phone', '')

        # Validates that the content of password field and confirm password field must match
        if password != confirm_password:
            raise serializers.ValidationError(
                {'password': 'Password must match.'})

        # Validates that username field should contain alphanumeric characters
        if not username.isalnum():
            raise serializers.ValidationError(
                'The username should only contain alphanumeric characters')

        # Validates that phone field should only take numeric characters
        if re.findall('[a-zA-Z\?!@#$%&()`~}{*+_^><.,|]', phone):
            raise serializers.ValidationError(
                'The phone should only contain numeric characters')

        # Validates that password must contain at least one numeric character
        if not re.findall('\d', password):
            raise serializers.ValidationError(
                "The password must contain at least 1 digit, 0-9.")

        # Validates that password must be at least 6 characters long
        if not re.findall('(\d).{6}$', password):
            raise serializers.ValidationError(
                "Password must be at least 6 characters")

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

        return {
            'email': user.email,
            'username': user.username,
            'tokens': user.tokens()
        }

        return super().validate(attrs)
