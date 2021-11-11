from django.shortcuts import render
from django.http import HttpResponse
from .models import Cadastro
from .serializers import CadastroSerializer
from django.http import JsonResponse
from rest_framework.parsers import JSONParser

# Create your views here.

def cadastro_list(request):
    #Listar a lista de usuários cadastrados
    if request.method == 'GET':
        cadastros = Cadastro.objects.all()
        serializer = CadastroSerializer('cadastros')
        return JsonResponse(serializer.data, safe='False')

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = CadastroSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
