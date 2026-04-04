from django.db import models
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