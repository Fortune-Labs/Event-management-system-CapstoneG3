# from django.contrib import admin

# # Register your models here.
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from frontend.models import Account


class AccountAdmin(UserAdmin):
    list_display = ('first_name', 'last_name', 'email',
                    'username', 'phone', 'address', 'is_admin', 'is_staff', 'is_active')
    search_fields = ('email', 'username', 'last_name',)
    readonly_fields = ('date_joined', 'last_login')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


admin.site.register(Account, AccountAdmin)
