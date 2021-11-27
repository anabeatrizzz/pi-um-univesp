"""pi_um_univesp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
#from rest_framework.authtoken.views import obtain_auth_token
#from django.conf.urls import url, include



urlpatterns = [
    #path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('user/', include('users.urls')),
    path('doacoes/', include('doacoes.urls')),
    path('api/', include('api.urls')),
    # path('', include('api.urls')),
    # #path('auth/', obtain_auth_token),
    # url(r'^',include('donations.urls')),
    # #path('', TemplateView.as_view(template_name='frontend-pi-um/public/index.html')),   
]

#urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]