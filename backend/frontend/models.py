from django.db import models

# Create your models here.
class AddEvent(models.Model):
    TIMES = (
        ('Morning'),
        ('Midmorning'),
        ('Afternoon'),
    )
    times = models.CharField(max_length=50, choices='TIMES')
    SPEAKERS = (
        ('Samuel'),
        ('Aminatu'),
        ('Fortunatus'),
    )
    speakers = models.CharField(max_length=50, choices=SPEAKERS)
    ROOM_CAPACITY = (
        ('600 square feet'),
        ('400 square feet'),
        ('100 square feet'),
    )
    room_capacity = models.CharField(max_length=50,choices=ROOM_CAPACITY)
    TOPICS =(
        ('Meetings'),
        ('Weddings'),
        ('Engagement'),
        ('Conferences'),
        ('Get-togethter'),
        ('birthday party'),
        ('award events'),
    )
    topics=models.CharField(max_length=100)
add = models.CharField(default=False)
def __str__(self):
        return self.times
