from django.urls import path
from .views import *


urlpatterns = [
    path("Cadastar-Diaristas/", CadastarDiaristas, name="CadastarDiaristas"),
    path("Lista-de-Diarista/", ListarDiaristas, name="ListarDiaristas"),
    path("Editar-Diarista/<int:Diarista_id>/", EditarDiarista, name="EditarDiarista")
]