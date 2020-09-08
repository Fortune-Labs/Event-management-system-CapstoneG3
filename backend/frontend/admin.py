# from django.contrib import admin

# # Register your models here.
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from frontend.models import Account
# Register your models here.


class AccountAdmin(UserAdmin):
    list_display = ('username','email','address',
                    'last_name', 'first_name', 'phone', 'city', 'is_admin', 'is_staff')
    search_fields = ('email', 'username', 'last_name',)
    readonly_fields = ('date_joined', 'last_login')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


admin.site.register(Account, AccountAdmin)
