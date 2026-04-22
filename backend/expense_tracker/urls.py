<<<<<<< HEAD
from django.contrib import admin
from django.urls import path, include
=======
from django.http import HttpResponse
>>>>>>> front2

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
<<<<<<< HEAD
]
=======
    path('', lambda request: HttpResponse("Welcome to Expense Tracker")),
]
>>>>>>> front2
