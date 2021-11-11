from django.urls import path
from .views import cadastro_list


urlpatterns = [
    path('cadastros/', cadastro_list),
]