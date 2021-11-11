from django.db.models import fields
from rest_framework import serializers
from .models import Cadastro

class CadastroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cadastro
        fields = ['Nome', 'endereco', 'Bairro', 'Cidade']


