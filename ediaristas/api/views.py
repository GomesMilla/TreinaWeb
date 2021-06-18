from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .services.cidades_atendimento_services import *
from .serializer import diaristas_cidade_serializer
from .pagination import diaristas_cidade_pagination



class DiaristasCidadeLista(APIView, diaristas_cidade_pagination.DiaristaCidadePagination):
    def get(self, request, format=None):
        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
        print("AIIAIAIAIAIAIAIAIAIAIAIAI CAMILAAA ESTOU NA VIEW  DIARISTA CIDADE LISTA!! QUE ESTA RECEBENDO AS INFORMAÇÕES DA API PARA RENDERIZAR")
        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
        cep = self.request.query_params.get('cep', None)
        print(cep)
        diaristas = listar_diarista_cidade(cep)
        resultado = self.paginate_queryset(diaristas, request)
        serializer = diaristas_cidade_serializer.DiaristaCidadeSerializer(resultado, many=True, context={'request': request})

        return self.get_paginated_response(serializer.data)