from django.urls import path
from .views import *


urlpatterns = [
    path("diaristas-cidade/", DiaristasCidadeLista.as_view(), name="DiaristasCidadeLista"),
    
]