from django.urls import path
from .views import login, register, ExpenseList, CategoryList

urlpatterns = [
    path('login/', login),
    path('register/', register),
    path('expenses/', ExpenseList.as_view()),
    path('categories/', CategoryList.as_view()),
]
