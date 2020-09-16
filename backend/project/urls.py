from django.urls import path, include
from django.contrib import admin
from django.conf.urls import include, url

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', include('user_account.urls')),
    path('auth/', include('user_account.urls')),
    path('event/', include('event.urls')),


]
