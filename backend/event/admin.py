from django.contrib import admin
from .models import Event
from django.contrib.auth.admin import UserAdmin

# Register your models here.

class EventAdmin(admin.ModelAdmin):
    list_display = ['times','speaker','room_capacity','topic']
admin.site.register(Event, EventAdmin)