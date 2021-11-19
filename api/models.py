from django.db import models


# Create your models here.

class Cadastro(models.Model):
    nome = models.CharField(max_length=100)
    endereco = models.CharField(max_length=120)
    numero = models.CharField(max_length=20)
    complemento = models.CharField(max_length=20)
    bairro = models.CharField(max_length=20)
    cidade = models.CharField(max_length=20)
    postal = models.CharField(max_length=20)
