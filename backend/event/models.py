from django.db import models
from rest_framework_simplejwt.tokens import RefreshToken
# Create your models here.
class Event(models.Model):
    TIMES = (
        ('Morning', 'Morning'),
        ('Midmorning', 'Midmorning'),
        ('Afternoon', 'Afternoon'),
    )
    times = models.CharField(max_length=30, blank=False, choices=TIMES)
    speaker = models.CharField(max_length=50,)
    room_capacity = models.PositiveIntegerField()
    topic=models.CharField(max_length=100)
    tagline = models.CharField(max_length=100)
    def __str__(self):
        return self.topic

