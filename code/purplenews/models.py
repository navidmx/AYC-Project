from django.db import models

# Create your models here.
class Message(models.Model):
    msg = models.CharField(max_length=140)
    author = models.CharField(max_length=20)
    value = models.PositiveSmallIntegerField()