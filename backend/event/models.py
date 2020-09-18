from django.db import models
from user_account.models import Account


# Create your models here.

class Event(models.Model):
    topic = models.CharField(max_length=100)
    TIMES = (
        ('Morning', 'Morning'),
        ('Midmorning', 'Midmorning'),
        ('Afternoon', 'Afternoon'),
    )
    time = models.CharField(max_length=30, blank=False, choices=TIMES)
    speaker = models.CharField(max_length=50,)
    room_capacity = models.PositiveIntegerField()
    tagline = models.CharField(max_length=100)

    def __str__(self):
        return self.topic


class Booking(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(
        Account, on_delete=models.CASCADE, null=True)

    times = (
        ('Morning', 'Morning'),
        ('Midmorning', 'Midmorning'),
        ('Afternoon', 'Afternoon'),
    )

    time = models.CharField(verbose_name='time', max_length=50,
                            choices=times, default='')

    def __str__(self):
        return str(self.user) + " For " + str(self.event)
