from django.db import models


# Create your models here.

class EventCreate(models.Model):

    def create_event(self, topic, times, room_capacity, speaker, tagline):
        """
        Create and save a Event with the given email and password.
        """
        if not topic:
            raise ValueError(_('The Topic name must be set'))
        if not times:
            raise ValueError(_('The Time of the Event must be set'))
        if not room_capacity:
            raise ValueError(_('The Room Capacity must be set'))
        if not speaker:
            raise ValueError(_('The Speaker for the event must be set'))
        if not tagline:
            raise ValueError(_('The Tagline for the event must be set'))

        event = self.model(
            topic=topic,
            times=times,
            room_capacity=room_capacity,
            speaker=speaker,
            tagline=tagline,

        )

        event.save(using=self._db)
        return event


class Event(models.Model):
    topic = models.CharField(max_length=100)
    TIMES = (
        ('Morning', 'Morning'),
        ('Midmorning', 'Midmorning'),
        ('Afternoon', 'Afternoon'),
    )
    times = models.CharField(max_length=30, blank=False, choices=TIMES)
    speaker = models.CharField(max_length=50,)
    room_capacity = models.PositiveIntegerField()
    tagline = models.CharField(max_length=100)

    def __str__(self):
        return self.topic
