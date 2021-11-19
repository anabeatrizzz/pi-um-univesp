#from types import MethodWrapperType
from rest_framework import serializers
from donations.models import Cad, Doacao

class CadSerializer(serializers.ModelSerializer):
    class Meta:
        model=Cad
        fields = ('CadId', 'CadNome', 'CadCpf', 'CadRua', 'CadNumber')


class DoacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Doacao
        fields = ('DoacaoId', 'DoacaoNome', 'DoacaoLoc', 'DoacaoData', 'DoacaoDescription', 'DoacaoUser', 'DoacaoTel')
