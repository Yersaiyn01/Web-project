from django.db import models
<<<<<<< HEAD
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Expense(models.Model):
    title = models.CharField(max_length=100)
    amount = models.FloatField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    description = models.TextField(blank=True)

class Income(models.Model):
    amount = models.FloatField()
    source = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
=======
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from manager import UserManager

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique = True, verbose_name= ("Email Address"))
    first_name = models.CharField(max_length=100, verbose_name= ("First Name"))
    last_name = models.CharField(max_length=100, verbose_name= ("Last Name"))
    is_staff =  models.BooleanField(default = False)
    is_superuser = models.BooleanField(default = False)
    is_verified =  models.BooleanField(default = False)
    is_active =  models.BooleanField(default = False)
    date_joined = models.DateTimeField(auto_now_add = False)
    last_login =  models.DateTimeField(auto_now = False)

    USERNAME_FIELDS = "emails"

    REQUIRED_FIELDS: ["first_name","last_name"]

    objects = UserManager()

    def __str__(self):
        return self.email
    @property
    def get_full_name(self):
        return f"{self.first_name}{self.last_name}"
    
    def tokens(self):
        pass
>>>>>>> front2
