from django.db import models

# Create your models here.
class Backendlogin(models.Model):
    Email=models.CharField(max_length =100,default=None)
    Password=models.CharField(max_length=50, default=None)
    Login=models.BooleanField(default=False)


    def __str__(self):
        return self.Email
