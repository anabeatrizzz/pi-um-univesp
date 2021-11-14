from django.shortcuts import render, HttpResponse
from .models import Cadastro
from .serializers import CadastroSerializer, UserSerializer
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view, APIView, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework import serializers, status
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User

class CadastroViewSet(viewsets.ModelViewSet):
    queryset = Cadastro.objects.all()
    serializer_class = CadastroSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication,)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer



# @api_view(['GET', 'POST'])
# def cadastro_list(request):
#     #Listar a lista de usuários cadastrados
    
#     if request.method == 'GET':
#         cadastros = Cadastro.objects.all()
#         serializer = CadastroSerializer(cadastros, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = CadastroSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# @api_view(['GET', 'PUT', 'DELETE'])
# def cadastro_details(request, pk):
#     try:
#         cadastros = Cadastro.objects.get(pk=pk)

#     except Cadastro.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'GET':
#         serializer = CadastroSerializer(cadastros)
#         return Response(serializer.data)

#     elif request.method == 'PUT':
#         serializer = CadastroSerializer(cadastros, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         cadastros.delete()
#         return HttpResponse(status=status.HTTP_204_NO_CONTENT)



