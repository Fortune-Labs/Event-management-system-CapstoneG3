from django.contrib import admin
from .models import AddEvent

#Register your models here.
class AddEventAdmin(admin.ModelAdmin):
    list_display = ['times','speakers','room_capacity','topics']
admin.site.register(AddEvent, AddEventAdmin)
