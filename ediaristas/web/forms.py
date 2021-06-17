from django import forms
from web.models import *
from .services import cep_services 
import json
from django.core.exceptions import ValidationError

class DiaristaForm(forms.ModelForm):
    cpf = forms.CharField(widget=forms.TextInput(attrs={'data-mask': "000.000.000-00"}))
    telefone = forms.CharField(widget=forms.TextInput(attrs={"data-mask": "(00) 0000-0000"}))
    cep = forms.CharField(widget=forms.TextInput(attrs={"data-mask": "00000-000"}))
    # codigo_ibge = forms.IntegerField(required=False)

    class Meta:
        model = Diarista
        exclude = ('codigo_ibge',)

    def clean_cpf(self):
        cpf = self.cleaned_data['cpf'] 
        return cpf.replace(".","").replace("-","")
    
    def clean_cep(self):
        cep = self.cleaned_data['cep']
        # É o cep que entrei com o  valor        
        print(cep)        
        # É o cep limpo sem nenhum ponto ou traço
        cep_formatado = cep.replace("-","")        
        print(cep_formatado)        
        # Minha resposta que veio lá da API por meio do status de codigo
        response = cep_services.buscar_cidade_cep(cep_formatado)      
        print(response)       
        if response.status_code == 400:
            raise forms.ValidationError("O CEP informado esta incorreto!")
        cidade_api = json.loads(response.content) 
        if 'erro' in cidade_api:
            raise forms.ValidationError("Não encontrado!")   
        return cep.replace("-","")
    
    def clean_telefone(self):
        telefone = self.cleaned_data['telefone'] 
        return telefone.replace("-","").replace("(","").replace(")","")
    # É o else, ou seja, se o código esta certo e foi encontrado ele vai atribuir esses valores para a diarista instanciada na linha de código abaixo
    def save(self, commit=True): 
        diaristainstance = super(DiaristaForm, self).save(commit=False)
        print(diaristainstance)
        # Ẽ a diarista que esta sendo cadastrada no exato momento       
        response = cep_services.buscar_cidade_cep(self.cleaned_data.get('cep'))
        print(response)
        # É o codigo do IBGE que recebeu da API
        # O response esta recebendo os dados que veio da busca que foi feita a partir do momento em que o dado foi inserido pelo usuario
        cidade_api = json.loads(response.content)
        print(cidade_api)
        # Cidade API esta literalmente recebendo todos os valores daquele CEP como por exemplo rua, logradouro, complemento, bairro, DD, SIAFI
        # Mas oque realmente importa aqui é o IBGE porque isso esta recebendo todos os valores da variavel cidade_api, porém estou setando somente o ibge da lista 
        diaristainstance.codigo_ibge = cidade_api['ibge']
        diaristainstance.logradouro = cidade_api['logradouro']
        print(diaristainstance.logradouro)
        diaristainstance.complemento = cidade_api['complemento']
        print( diaristainstance.complemento)
        diaristainstance.estado = cidade_api['uf']
        print(diaristainstance.estado)
        diaristainstance.bairro = cidade_api['bairro']
        print(diaristainstance.bairro)
        print(diaristainstance.codigo_ibge)
        # A minha minha diarista esta recebendo o valor do código do IBGE que foi recebida pela API do correio 
        diaristainstance.save()
        return diaristainstance