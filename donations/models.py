from django.db import models
from django.db.models.base import Model

# Create your models here.

class Cad(models.Model):
    CadId = models.AutoField(primary_key=True)
    CadNome = models.CharField(max_length=500)
    CadCpf = models.IntegerField()
    CadRua = models.CharField(max_length=500)
    CadNumber = models.IntegerField()



class Doacao(models.Model):
    DoacaoId = models.AutoField(primary_key=True)
    DoacaoNome = models.CharField(max_length=800)
    DoacaoLoc = models.CharField(max_length=500)
    DoacaoData = models.DateTimeField()
    DoacaoDescription = models.CharField(max_length=1000)
    DoacaoUser = models.ForeignKey(Cad, on_delete=models.CASCADE)
    DoacaoTel = models.IntegerField()