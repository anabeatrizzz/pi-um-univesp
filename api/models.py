from django.db import models


# Create your models here.

class Cadastro(models.Model):
    Nome = models.CharField(max_length=100)
    identidade = models.CharField(max_length=20)
    endereco = models.CharField(max_length=120)
    numero = models.CharField(max_length=20)
    complemento = models.CharField(max_length=20)
    Bairro = models.CharField(max_length=20)
    Cidade = models.CharField(max_length=20)
    Postal = models.CharField(max_length=20)
