from rest_framework import serializers
from .models import User, Category, Expense, Income


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["email", "first_name", "last_name", "password"]

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
        read_only_fields = ["user"]


class ExpenseSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source="category.name", read_only=True)
    category = serializers.CharField()

    class Meta:
        model = Expense
        fields = [
            "id",
            "user",
            "category",
            "category_name",
            "title",
            "amount",
            "date",
            "description",
        ]
        read_only_fields = ["user"]

    def validate_category(self, value):
        user = self.context["request"].user

        if isinstance(value, int) or (isinstance(value, str) and value.isdigit()):
            try:
                return Category.objects.get(id=int(value), user=user)
            except Category.DoesNotExist as exc:
                raise serializers.ValidationError("Category not found.") from exc

        normalized_name = str(value).strip()
        if not normalized_name:
            raise serializers.ValidationError("Category is required.")

        try:
            return Category.objects.get(name__iexact=normalized_name, user=user)
        except Category.DoesNotExist:
            return Category.objects.create(user=user, name=normalized_name)

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data["category"] = instance.category.name
        return data


class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = "__all__"
        read_only_fields = ["user"]
