from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', include('user_account.urls')),
    # path('auth/', include('user_acc.urls')),
    path('auth/', include('user_account.urls')),


]
