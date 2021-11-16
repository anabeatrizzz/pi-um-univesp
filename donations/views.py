from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import serializers
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
import donations
from donations.models import Cad, Doacao
from donations.serializers import CadSerializer, DoacaoSerializer
from django.core.files.storage import default_storage

# Create your views here.

# @csrf_exempt
# def CadsApi(request, id=0):
#     if request.method=='POST':
#         cad_data=JSONParser().parse(request)
#         serializerCad=CadSerializer(data=cad_data)
#         if serializerCad.is_valid():
#             serializerCad.save()
#             return JsonResponse('Adicionado com sucesso!', safe=False)
#         return JsonResponse('Falha no cadastro', safe=False)

@csrf_exempt
def DoacaoApi(request, id=0):
    if request.method=='GET':
        doacoes = Doacao.objects.all()
        serializerDoacao=DoacaoSerializer(doacoes, many=True)
        return JsonResponse(serializerDoacao.data, safe=False)
    elif request.method=='POST':
        doacao_data=JSONParser().parse(request)
        serializerDoacao=DoacaoSerializer(data=doacao_data)
        if serializerDoacao.is_valid():
            serializerDoacao.save()
            return JsonResponse('Adicionado com sucesso!', safe=False)
        return JsonResponse('Falha no cadastro', safe=False)
    elif request.method=='PUT':
        doacao_data=JSONParser().parse(request)
        doacoes = Cad.objects.get(DoacaoId=doacao_data['DoacaoId'])
        serializerDoacao=DoacaoSerializer(doacoes, data=doacao_data)
        if serializerDoacao.is_valid():
            serializerDoacao.save()
            return JsonResponse('Atualizado com sucesso!', safe=False)
        return JsonResponse('Falha na atualização do cadastro')
    elif request.method=='DELETE':
        doacoes = Doacao.objects.get(DoacaoId=id)
        doacoes.delete()
        return JsonResponse("Deletado com sucesso", safe=False)

@csrf_exempt
def CadsApi(request, id=0):
    if request.method=='GET':
        cads = Cad.objects.all()
        serializer=CadSerializer(cads, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method=='POST':
        cad_data=JSONParser().parse(request)
        serializer=CadSerializer(data=cad_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Adicionado com sucesso!', safe=False)
        return JsonResponse('Falha no cadastro', safe=False)
    elif request.method=='PUT':
        cad_data=JSONParser().parse(request)
        cads = Cad.objects.get(CadId=cad_data['CadId'])
        serializer=CadSerializer(cads, data=cad_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Atualizado com sucesso!', safe=False)
        return JsonResponse('Falha na atualização do cadastro')
    elif request.method=='DELETE':
        cads = Cad.objects.get(CadId=id)
        cads.delete()
        return JsonResponse("Deletado com sucesso", safe=False)
        
@csrf_exempt
def SaveFile(request):
    file=request.FILES['file']
    file_name=default_storage.save(file.name, file)
    return JsonResponse(file_name, safe=False)
