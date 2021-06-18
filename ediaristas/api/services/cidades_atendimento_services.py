from web.services import cep_services
from web.models import *
from rest_framework import serializers
import json

# listar diaristas apartir do cep que foi entrado 
def listar_diarista_cidade(cep):
    print("AI CAMILAAA ESTOU NA VIEW LISTAR DIARISTA CIDADE!!")
    codigo_ibge = buscar_cidade_cep(cep)['ibge']
    print(codigo_ibge)
    try:
        diaristas = Diarista.objects.filter(codigo_ibge=codigo_ibge).order_by('id')
        print(diaristas) 
        return diaristas
    except Diarista.DoesNotExist:
        return []

# buscar cidade apartir do cep que foi entrado
def buscar_cidade_cep(cep):
    response = cep_services.buscar_cidade_cep(cep)
    if response.status_code == 400:
        raise serializers.ValidationError("O CEP informado esta incorreto!")
    cidade_api = json.loads(response.content) 
    if 'erro' in cidade_api:
        raise serializers.ValidationError("Não encontrado!") 
    return cidade_api


# serializer é uma resposta de uma requisição
