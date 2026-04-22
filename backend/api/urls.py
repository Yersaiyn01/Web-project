from django.urls import path
from .views import (
    login, register, logout,
    ExpenseList, ExpenseDetail,
    CategoryList, CategoryDetail,
    IncomeList, IncomeDetail,
    analytics
)

urlpatterns = [
    path('login/', login),
    path('register/', register),
    path('logout/', logout),

    path('auth/signin', login),
    path('auth/signin/', login),

    path('auth/signup', register),
    path('auth/signup/', register),

    path('auth/signout', logout),
    path('auth/signout/', logout),

    path('analytics/', analytics),

    path('expenses/', ExpenseList.as_view()),
    path('expenses/<int:pk>/', ExpenseDetail.as_view()),

    path('categories/', CategoryList.as_view()),
    path('categories/<int:pk>/', CategoryDetail.as_view()),

    path('incomes/', IncomeList.as_view()),
    path('incomes/<int:pk>/', IncomeDetail.as_view()),
    
]