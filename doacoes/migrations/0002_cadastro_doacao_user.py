# Generated by Django 3.2.9 on 2021-11-27 07:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
        ('doacoes', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='cadastro_doacao',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='users.user_profile'),
        ),
    ]
