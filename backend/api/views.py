from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from django.shortcuts import get_object_or_404

from .models import Expense, Category, Income
from .serializers import ExpenseSerializer, CategorySerializer, IncomeSerializer
from datetime import date, timedelta
from django.db.models import Sum
from collections import defaultdict

User = get_user_model()


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        return Response(
            {'message': 'Email and password are required'},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response(
            {'message': 'User not found'},
            status=status.HTTP_401_UNAUTHORIZED
        )

    if not user.check_password(password):
        return Response(
            {'message': 'Invalid password'},
            status=status.HTTP_401_UNAUTHORIZED
        )

    refresh = RefreshToken.for_user(user)

    return Response({
        'id': user.id,
        'username': user.email,
        'email': user.email,
        'roles': ['ROLE_USER'],
        'accessToken': str(refresh.access_token),
        'refreshToken': str(refresh),
    }, status=status.HTTP_200_OK)

@api_view(['POST'])
def register(request):
    email = request.data.get('email')
    password = request.data.get('password')
    username = request.data.get('username', 'User')

    if not email or not password:
        return Response(
            {'message': 'Email and password are required'},
            status=status.HTTP_400_BAD_REQUEST
        )

    if User.objects.filter(email=email).exists():
        return Response(
            {'message': 'User already exists'},
            status=status.HTTP_400_BAD_REQUEST
        )

    # делим username на имя и фамилию
    parts = username.split()
    first_name = parts[0]
    last_name = parts[1] if len(parts) > 1 else "User"

    user = User.objects.create_user(
        email=email,
        first_name=first_name,
        last_name=last_name,
        password=password
    )

    default_categories = [
    'Food',
    'Transport',
    'Shopping',
    'Entertainment',
    'Health',
    'Bills',
    'Education',
    'Other'
]

    for cat_name in default_categories:
        Category.objects.create(user=user, name=cat_name)

    return Response({
        'message': 'User registered successfully',
        'email': user.email
    }, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def logout(request):
    return Response(
        {'message': 'Logged out successfully'},
        status=status.HTTP_200_OK
    )


class ExpenseList(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        expenses = Expense.objects.filter(user=request.user).select_related('category').order_by('-date', '-id')
        serializer = ExpenseSerializer(expenses, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ExpenseSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ExpenseDetail(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        expense = get_object_or_404(Expense, id=pk, user=request.user)
        serializer = ExpenseSerializer(expense, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        expense = get_object_or_404(Expense, id=pk, user=request.user)
        expense.delete()
        return Response({'message': 'Deleted'})


class CategoryList(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        categories = Category.objects.filter(user=request.user)
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoryDetail(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        category = get_object_or_404(Category, id=pk, user=request.user)
        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        category = get_object_or_404(Category, id=pk, user=request.user)
        category.delete()
        return Response({'message': 'Deleted'})

class IncomeList(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        incomes = Income.objects.filter(user=request.user)
        serializer = IncomeSerializer(incomes, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = IncomeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class IncomeDetail(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        income = get_object_or_404(Income, id=pk, user=request.user)
        serializer = IncomeSerializer(income, data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        income = get_object_or_404(Income, id=pk, user=request.user)
        income.delete()
        return Response({'message': 'Deleted'})

@api_view(['GET'])
def analytics(request):
    if not request.user or not request.user.is_authenticated:
        return Response(
            {'detail': 'Authentication credentials were not provided.'},
            status=status.HTTP_401_UNAUTHORIZED
        )

    expenses = Expense.objects.filter(user=request.user).select_related('category')
    incomes = Income.objects.filter(user=request.user)

    today = date.today()
    start_of_month = today.replace(day=1)

    # текущий месяц
    month_expenses = expenses.filter(date__gte=start_of_month, date__lte=today)
    month_incomes = incomes.filter(date__gte=start_of_month, date__lte=today)

    total_spent = float(month_expenses.aggregate(total=Sum('amount'))['total'] or 0)
    total_income = float(month_incomes.aggregate(total=Sum('amount'))['total'] or 0)

    days_passed = today.day if today.day > 0 else 1
    daily_average = round(total_spent / days_passed, 2) if total_spent else 0

    # прогноз до конца месяца
    import calendar
    days_in_month = calendar.monthrange(today.year, today.month)[1]
    month_forecast = round(daily_average * days_in_month, 2)

    # топ категория
    category_totals = defaultdict(float)
    category_counts = defaultdict(int)

    for expense in month_expenses:
        category_name = expense.category.name if expense.category else 'Unknown'
        category_totals[category_name] += float(expense.amount)
        category_counts[category_name] += 1

    top_category = None
    if category_totals:
        top_category_name = max(category_totals, key=category_totals.get)
        percent = round((category_totals[top_category_name] / total_spent) * 100, 1) if total_spent else 0
        top_category = {
            "name": top_category_name,
            "amount": round(category_totals[top_category_name], 2),
            "percent": percent
        }
    else:
        top_category = {
            "name": "No data",
            "amount": 0,
            "percent": 0
        }

    # weekly spending (Mon-Sun)
    start_of_week = today - timedelta(days=today.weekday())
    weekly_map = {}
    day_names = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    for i in range(7):
        current_day = start_of_week + timedelta(days=i)
        day_total = month_expenses.filter(date=current_day).aggregate(total=Sum('amount'))['total'] or 0
        weekly_map[day_names[i]] = float(day_total)

    weekly_spending = [
        {"day": day, "amount": round(amount, 2)}
        for day, amount in weekly_map.items()
    ]

    # breakdown by category
    category_breakdown = []
    for name, amount in sorted(category_totals.items(), key=lambda x: x[1], reverse=True):
        percent = round((amount / total_spent) * 100, 1) if total_spent else 0
        category_breakdown.append({
            "name": name,
            "amount": round(amount, 2),
            "total": round(amount, 2),
            "percent": percent,
            "transactions": category_counts[name]
        })

    # прошлый месяц
    if start_of_month.month == 1:
        prev_month_start = start_of_month.replace(year=start_of_month.year - 1, month=12, day=1)
    else:
        prev_month_start = start_of_month.replace(month=start_of_month.month - 1, day=1)

    prev_month_end = start_of_month - timedelta(days=1)

    prev_month_total = float(
        expenses.filter(date__gte=prev_month_start, date__lte=prev_month_end)
        .aggregate(total=Sum('amount'))['total'] or 0
    )

    month_difference = round(total_spent - prev_month_total, 2)
    month_percent_change = round((month_difference / prev_month_total) * 100, 1) if prev_month_total else (100.0 if total_spent else 0.0)

    end_of_week = start_of_week + timedelta(days=6)
    previous_week_start = start_of_week - timedelta(days=7)
    previous_week_end = start_of_week - timedelta(days=1)

    current_week_expenses = expenses.filter(date__gte=start_of_week, date__lte=end_of_week)
    previous_week_expenses = expenses.filter(date__gte=previous_week_start, date__lte=previous_week_end)

    current_week_total = float(current_week_expenses.aggregate(total=Sum('amount'))['total'] or 0)
    previous_week_total = float(previous_week_expenses.aggregate(total=Sum('amount'))['total'] or 0)
    weekly_percent_change = round(((current_week_total - previous_week_total) / previous_week_total) * 100, 1) if previous_week_total else (100.0 if current_week_total else 0.0)

    current_week_transactions = current_week_expenses.count()
    previous_week_transactions = previous_week_expenses.count()
    transaction_percent_change = round(((current_week_transactions - previous_week_transactions) / previous_week_transactions) * 100, 1) if previous_week_transactions else (100.0 if current_week_transactions else 0.0)

    savings_rate = round(((total_income - total_spent) / total_income) * 100, 1) if total_income > 0 else 0

    # savings potential — простая логика: если урезать категорию на 20%
    savings_potential = []
    total_possible_savings = 0

    for item in category_breakdown[:4]:
        save_amount = round(item["amount"] * 0.2, 2)
        total_possible_savings += save_amount
        savings_potential.append({
            "name": item["name"],
            "current": item["amount"],
            "save_amount": save_amount
        })

    data = {
        "summary": {
            "total_spent": round(total_spent, 2),
            "total_income": round(total_income, 2),
            "daily_average": daily_average,
            "month_forecast": month_forecast,
            "balance": round(total_income - total_spent, 2),
            "transactions_this_week": current_week_transactions,
            "savings_rate": savings_rate,
        },
        "top_category": top_category,
        "weekly_spending": weekly_spending,
        "category_breakdown": category_breakdown,
        "month_comparison": {
            "this_month": round(total_spent, 2),
            "last_month": round(prev_month_total, 2),
            "difference": month_difference,
            "percent_change": month_percent_change
        },
        "weekly_comparison": {
            "this_week": round(current_week_total, 2),
            "last_week": round(previous_week_total, 2),
            "difference": round(current_week_total - previous_week_total, 2),
            "percent_change": weekly_percent_change
        },
        "transaction_comparison": {
            "this_week": current_week_transactions,
            "last_week": previous_week_transactions,
            "difference": current_week_transactions - previous_week_transactions,
            "percent_change": transaction_percent_change
        },
        "savings_potential": {
            "items": savings_potential,
            "total_possible_savings": round(total_possible_savings, 2)
        }
    }

    return Response(data)
