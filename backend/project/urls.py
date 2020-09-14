from django.urls import path, include
from django.contrib import admin
from django.conf.urls import include, url

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', include('frontend.urls')),
    path('auth/', include('frontend.urls')),
    path('event/', include('event.urls')),


]
