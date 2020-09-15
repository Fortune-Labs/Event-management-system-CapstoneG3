from django.contrib import admin
from .models import Event, Booking

# Register your models here.


class EventAdmin(admin.ModelAdmin):
    list_display = ['times', 'speaker', 'room_capacity', 'topic']


class BookAdmin(admin.ModelAdmin):
    list_display = ('event', 'time', 'user')
    search_fields = ('event', 'user')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


admin.site.register(Event, EventAdmin)
admin.site.register(Booking, BookAdmin)
