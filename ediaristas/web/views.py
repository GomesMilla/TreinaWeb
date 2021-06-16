from django.shortcuts import render,redirect
from .forms import *
from .models import *
from django.contrib import messages

def CadastarDiaristas(request):
    
    formDiarista = DiaristaForm()

    if request.method == "POST":
        formDiaristaPrenchido = DiaristaForm(request.POST, request.FILES)
        
        if formDiaristaPrenchido.is_valid():
            formDiaristaPrenchido.save()

            return redirect("ListarDiaristas")

    mensagem = f'Bem vindo(a)! Camila, esperamos que você tenha  uma ótima experiência!'
    messages.success(request, mensagem)    
    
    context = {
        "nomePagina" : "Cadastrar Diarista",
        "formDiarista" : formDiarista
    }

    return render(request, 'CadastrarDiarista.html', context)

def ListarDiaristas(request):
    
    allDiaristas = Diarista.objects.all()

    context = {
        "nomePagina" : "Listar Diaristas",
        "allDiaristas" : allDiaristas
    }

    return render(request, "ListaDeDiaristas.html", context)

def EditarDiarista(request, Diarista_id):

    diarista = Diarista.objects.get(id = Diarista_id)
    formDiaristaPrenchido = DiaristaForm(request.POST or None, instance = diarista)

    if formDiaristaPrenchido.is_valid():
            formDiaristaPrenchido.save()

            return redirect("ListarDiaristas")

    context = {
        "nomePagina" : "Editar Diaristas",
        "formDiarista" : formDiaristaPrenchido
    }
    
    return render(request, 'CadastrarDiarista.html', context)
# Create your views here.
