from django.urls import path
from .views import GetDoacoes, PostDoacao, PutDoacao, DeleteDoacao
 
urlpatterns = [ 
    path('doacoes', GetDoacoes.as_view()),
    path('cadastrar', PostDoacao.as_view()),
    path('atualizar', PutDoacao.as_view),
    path('excluir', DeleteDoacao.as_view()),
]