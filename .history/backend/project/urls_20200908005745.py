
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', include('frontend.urls')),
    # path('auth/', include('user_acc.urls')),
    path('auth/', include('frontend.urls')),


]
