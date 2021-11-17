# Generated by Django 3.2.9 on 2021-11-14 17:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cadastro',
            fields=[
                ('CadastroId', models.AutoField(primary_key=True, serialize=False)),
                ('CadastroNome', models.CharField(max_length=500)),
                ('CadastroCpf', models.IntegerField()),
                ('CadastroRua', models.CharField(max_length=500)),
                ('CadastroNumber', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Doacao',
            fields=[
                ('DoacaoId', models.AutoField(primary_key=True, serialize=False)),
                ('DoacaoNome', models.CharField(max_length=800)),
                ('DoacaoLoc', models.CharField(max_length=500)),
                ('DoacaoData', models.DateTimeField()),
                ('DoacaoDescription', models.CharField(max_length=1000)),
                ('DoacaoTel', models.IntegerField()),
                ('DoacaoUser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='donations.cadastro')),
            ],
        ),
    ]