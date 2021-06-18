from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

class DiaristaCidadePagination(PageNumberPagination):
    page_size = 6
    # O page_size mostra a quantidade de valores que deve ser mostrado inicialmente, ou seja,
    # se tiver 50 resposta ele vai mostrar os seis primeiros e irá "esconder" os outros para que mostre a mensagem de mais pesquisa
    def get_paginated_response(self, data):
        return Response({
            'quantidade_diaristas' : (self.page.paginator.count - self.page_size)
                if self.page.paginator.count > self.page_size else 0,
            'diaristas' : data
        })

# self.page.paginator.count => quantidade de diaristas que tem o mesmo CEP que foi retornado pela nossa API
# self.page_size => quantidade de dados que quer ser mostrado
# quantidade_diaristas => É a quantidade excedente de diarista e não a quantidade total
# diaristas => É a minha diaristas central