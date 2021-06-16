from django.db import models

class Diarista(models.Model):
    nome_completo = models.CharField("Nome Completo ", max_length = 100)
    cpf = models.CharField("CPF ", max_length=12, unique=True)
    email= models.EmailField("E-mail ", unique=True)
    telefone = models.CharField("Telefone ", max_length=11)
    logradouro = models.CharField("Logradouro ", max_length=60)
    numero = models.IntegerField ("Número da residencia ")
    bairro = models.CharField("Bairro ", max_length=30)
    complemento = models.CharField("Complemento ", blank=True, max_length=100)
    cep = models.CharField("CEP da sua localização ", max_length=8)
    estado = models.CharField("Estado ", max_length=2)
    codigo_ibge = models.IntegerField("Código do IBGE ")
    foto_usuario = models.ImageField("Imagem de perfil ")

    class Meta:
        verbose_name = "Diarista"
        verbose_name_plural = "Diaristas"
        db_table = 'Diarista'

    def __str__(self):
        return self.nome_completo