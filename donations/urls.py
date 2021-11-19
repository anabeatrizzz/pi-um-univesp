from django.conf.urls import url
from donations import views
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path, include
from .views import SaveFile, CadsApi, DoacaoApi
from rest_framework.routers import DefaultRouter

#router = DefaultRouter()


urlpatterns = [
    url('cads/', views.CadsApi),
    url('doacoes/', views.DoacaoApi),
    url('doacoes/savefile/', views.SaveFile)
]+static(settings.MEDIA_URL, documento_root=settings.MEDIA_ROOT)