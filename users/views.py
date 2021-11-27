#from django.shortcuts import render
#from django.conf import UserSettingsHolder
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions, request
from django.contrib import auth
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
from .models import User_Profile
from .serializers import UserSerializer
from rest_framework import mixins, viewsets
from django.views.generic.detail import SingleObjectMixin

#View de autenticação do usuário
@method_decorator(csrf_protect, name='dispatch')
class CheckAuthentictedView(SingleObjectMixin, viewsets.GenericViewSet):
    
    def get(self, request, format=None):
        try:
            isAutheticated = User.is_authenticated

            if isAutheticated:
                return Response({ 'sucess': 'Usuário autenticado com sucesso' })
            else:
                return Response({ 'error': 'Falha na autenticação do usuário' })
        except:
            return Response({ 'error': 'Algo deu errado no processo de autenticação' })


#View de cadastro do usuário
@method_decorator(csrf_protect, name='dispatch')
class SignUp(mixins.ListModelMixin, viewsets.GenericViewSet):
    permissions_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        nome = data['nome']
        cpf = data['cpf']
        endereco = data['endereco']
        numero = data['numero']
        bairro = data['bairro']
        cidade = data['cidade']
        cep = data['cep']
        user = data['user']
        senha = data['senha']
        re_senha = data['re_senha']

        if senha == re_senha:
            try:
                if User.objects.filter(user=user).exists():
                    return Response({ 'error': 'E-mail já cadastrado' })
                else: 
                    if len(senha) < 6:
                        return Response({ 'error': 'Senha deve conter 6 caracteres ou mais' })
                    else:
                        user.objects.create_user(user=user, senha=senha)

                        user.save()

                        return Response({ "sucess': 'Usuário criado com sucesso!"})
            except:
                return Response({ 'error': 'Algo deu errado no cadastro do usuário' })

        else:
            return Response({ 'error': 'Senhas não são iguais' })


#View de login do usuário
@method_decorator(csrf_protect, name='dispatch')
class LoginView(mixins.ListModelMixin, viewsets.GenericViewSet):
    permissions_classes = (permissions.AllowAny, )

    def post(self, reqeuest, format=None):
        data = self.request.data

        user = data['user']
        senha = data['senha']

        user = auth.authenticate(user=user, senha=senha)

        if user is not None:
            auth.login(request, user)
            return Response({ 'sucess': 'Usuário autenticado' })
        else:
            return Response({ 'error': 'Erro na autenticação' })


#View de logout do usuário
class LogoutView(SingleObjectMixin, viewsets.GenericViewSet):
    def post(self, request, format=None):
        try:
            auth.logout(request)
            return Response({ 'sucess': 'Usuário deslogado' })
        except:
            return Response({ 'error': 'Algo deu errado ao deslogar' })


@method_decorator(ensure_csrf_cookie, name='dispatch')
class GETCSRFToken(SingleObjectMixin, viewsets.GenericViewSet):
    permissions_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({ 'sucess': 'CSRF cookie setado'  })


#VIew para deletar conta
class DeleteUserView(SingleObjectMixin, viewsets.GenericViewSet):
    def delete(self, request, format=None):
        user = self.request.user

        try:
            user = User.objects.filter(user=user).delete()

            return Response({ 'sucess': 'Usuário deletado com sucesso' })
        except:
            return Response({ 'error': 'Erro ao deletar usuário' })


#View para listar todos os usuários (não faz parte da aplicação, apenas da API)
class GetUsersView(SingleObjectMixin, viewsets.GenericViewSet):
    permissions_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        users = User.objects.all()

        user = UserSerializer(users, many=True)
        return Response(users.data)
