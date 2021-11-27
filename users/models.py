from django.db import models
from django.contrib.auth.models import User

class User_Profile(models.Model):
    nome = models.CharField(max_length=100)
    endereco = models.CharField(max_length=120)
    numero = models.CharField(max_length=20)
    complemento = models.CharField(max_length=20, blank=True)
    bairro = models.CharField(max_length=20, default='Gaivota')
    cidade = models.CharField(max_length=20, default='Itanhaém')
    postal = models.PositiveBigIntegerField(default='11740-000')
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    senha = models.SlugField(max_length=50)
    confirma_senha = models.SlugField(max_length=50)

