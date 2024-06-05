# roupas/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('bermudafeminina/', views.bermudafeminina, name='bermudafeminina'),
]
