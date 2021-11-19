from django.urls import path, include
#from .views import cadastro_list, cadastro_details
from .views import CadastroViewSet, UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('cadastros', CadastroViewSet, basename='cadastros')
router.register('user', UserViewSet)


urlpatterns = [
    path('api/', include(router.urls)),
    #path('cadastros/', cadastro_list),
    #path('cadastros/<int:pk>/', cadastro_details),
]