from django.db import models
from users.models import User, User_Profile
from django.utils.translation import gettext_lazy as _


class Cadastro_Doacao(models.Model):
    
    user = models.ForeignKey('users.User_Profile', on_delete=models.SET_NULL, null=True)
    nome_produto = models.CharField(max_length=200)
    responsavel = models.CharField(max_length=100)
    telefone = models.CharField(max_length=20)
    foto_produto =  models.ImageField(upload_to='media/')
    class CategoriaProduto(models.TextChoices):
        BASICO = 'A', _('Básico')
        REVESIMENTO = 'B', _('Revestimento')
        LOUCAS = 'C', _('Louças')
        METAIS = 'D', _('Metais')
        HIDRAULICA = 'E', _('Hidráulica')
        ELETRICA = 'F', _('Elétrica')
        PINTURA = 'G', _('Pintura')
        GESSO = 'H', _('Gesso')
        VIDRO = 'I', _('Vidro')
        ESQUADRIAS = 'J', _('Esquadrias')
        PORTAS = 'K', _('Portas e janelas') 
    categoria_produto = models.CharField(max_length=2, choices=CategoriaProduto.choices, default='BASICO', )
    descricao_produto = models.CharField(max_length=500)
