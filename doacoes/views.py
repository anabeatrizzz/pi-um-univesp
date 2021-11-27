from django.contrib.auth.models import User
from rest_framework.decorators import permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions, request
from django.contrib import auth 
from .serializers import DoacaoSerializer
from .models import Cadastro_Doacao
from users.models import User_Profile, User


class GetDoacoes(APIView):
    permissions_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        doacoes = Cadastro_Doacao.objects.all()

        doacao = DoacaoSerializer(doacoes, many=True)
        return Response(doacoes.data)



class PostDoacao(APIView):
     def post(self, request, format=None):
        data = self.request.data

        user=data['user']
        nome_produto = data['nome_produto']
        responsavel = data['responsavel']
        telefone = data['telefone']
        foto_produto = data['foto_produto']
        categoria_produto = data['categoria_produto']
        descricao_produto = data['descricao_produto']

        try:        
            Cadastro_Doacao.objects.create_doacao(nome_produto=nome_produto, responsavel=responsavel, telefone=telefone, foto_produto=foto_produto, categoria_produto=categoria_produto, descricao_produto=descricao_produto)

            Cadastro_Doacao.save()

            return Response({ "sucess': 'Doação criada com sucesso!"})

        except:
            return Response({ 'error': 'Falha ao cadastrar doação' })


class PutDoacao(APIView):
    def put(self, request, format=None):
        doacao = self.request.doacao

        data = self.request.data
        
        user=data['user']
        nome_produto = data['nome_produto']
        responsavel = data['responsavel']
        telefone = data['telefone']
        foto_produto = data['foto_produto']
        categoria_produto = data['categoria_produto']
        descricao_produto = data['descricao_produto']

        doacao = Cadastro_Doacao.objects.get(id=user.id)

        Cadastro_Doacao.objects.filter(user=user).update(nome_produto=nome_produto, responsavel=responsavel, telefone=telefone, foto_produto=foto_produto, categoria_produto=categoria_produto, descricao_produto=descricao_produto)

        doacao_user = Cadastro_Doacao.objects.get(user=user)
        doacao_user = DoacaoSerializer(doacao_user)

        return Response({ 'sucess': 'Doação atualizada com sucesso' })



class DeleteDoacao(APIView):
    def delete(self, request, format=None):
        doacao = self.request.doacao

        try:
            doacao = Cadastro_Doacao.objects.filter(doacoa=doacao).delete()

            return Response({ 'sucess': 'Doação excluída com sucesso' })
        except:
            return Response({ 'error': 'Erro ao deletar doação' })

