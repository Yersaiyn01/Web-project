from django.contrib import admin
from .models import Category, Expense, Income

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'user')

@admin.register(Expense)
class ExpenseAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'amount', 'category', 'user', 'date')

@admin.register(Income)
class IncomeAdmin(admin.ModelAdmin):
    list_display = ('id', 'source', 'amount', 'user', 'date')