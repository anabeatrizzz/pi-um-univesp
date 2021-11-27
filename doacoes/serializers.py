from rest_framework import serializers
from .models import Cadastro_Doacao

class DoacaoSerializer(serializers.ModelSerializer):
    class Meta:
        Model = Cadastro_Doacao
        fields = '__all__'