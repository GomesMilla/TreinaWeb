# Generated by Django 3.0 on 2021-06-16 13:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Diarista',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome_completo', models.CharField(max_length=100, verbose_name='Nome Completo: ')),
                ('cpf', models.CharField(max_length=12, unique=True, verbose_name='CPF: ')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='E-mail: ')),
                ('telefone', models.CharField(max_length=11, verbose_name='Telefone: ')),
                ('logradouro', models.CharField(max_length=60, verbose_name='Logradouro: ')),
                ('numero', models.IntegerField(verbose_name='Número da residencia: ')),
                ('bairro', models.CharField(max_length=30, verbose_name='Bairro: ')),
                ('complemento', models.CharField(blank=True, max_length=100, verbose_name='Complemento: ')),
                ('cep', models.CharField(max_length=8, verbose_name='CEP da sua localização: ')),
                ('estado', models.CharField(max_length=2, verbose_name='Estado: ')),
                ('codigo_ibge', models.IntegerField(verbose_name='Código do IBGE: ')),
                ('foto_usuario', models.ImageField(upload_to='', verbose_name='Imagem de perfil: ')),
            ],
            options={
                'verbose_name': 'Diarista',
                'verbose_name_plural': 'Diaristas',
                'db_table': 'Diarista',
            },
        ),
    ]
