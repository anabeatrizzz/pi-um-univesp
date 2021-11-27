from django.db.models import base
from django.db.models.query import QuerySet
from django.urls import path, include
from rest_framework.routers import DefaultRouter, SimpleRouter
from .views import SignUp, GETCSRFToken, LoginView, LogoutView, CheckAuthentictedView, DeleteUserView, GetUsersView

router = DefaultRouter(trailing_slash=False)
router.register('authenticated', CheckAuthentictedView, basename='authenticated')
router.register('login', LoginView, basename='login')
router.register('logout', LogoutView, basename='logout')
router.register('register', SignUp, basename='register')
router.register('delete', DeleteUserView, basename='delete')
router.register('csrf_cookie', GETCSRFToken, basename='csfr_cookie')
router.register('get_user', GetUsersView, basename='get_user')

urlpatterns = [
    path('user/', include(router.urls)),
]

