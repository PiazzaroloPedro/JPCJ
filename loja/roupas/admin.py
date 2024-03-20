#from django.contrib import admin
#from roupas.models import Categoria, Marca, Produto

#class CategoriaAdmin(admin.ModelAdmin):
 #   list_display = ("nome", "slug")
  #  search_fields = ("nome",)

#admin.site.register(Categoria, CategoriaAdmin)

#class ProdutoAdmin(admin.ModelAdmin):
 #   list_display = ('nome', 'descricao', 'preco', 'marca', 'disponivel', 'criado_em')
  #  search_fields = ('nome',)

#admin.site.register(Produto, ProdutoAdmin)

#class MarcaAdmin(admin.ModelAdmin):
 #   list_display = ('nome',)  # Adicionei uma vírgula aqui
  #  search_fields = ('nome',)

#admin.site.register(Marca, MarcaAdmin)
from django.contrib import admin
from .models import Categoria, Marca, Produto

class CategoriaAdmin(admin.ModelAdmin):
    list_display = ("nome", "slug")
    search_fields = ("nome",)
   

admin.site.register(Categoria, CategoriaAdmin)

class MarcaAdmin(admin.ModelAdmin):
    list_display = ("id", "nome")
    search_fields = ("nome",)

admin.site.register(Marca, MarcaAdmin)

class ProdutoAdmin(admin.ModelAdmin):
    list_display = ('nome', 'descricao', 'preco', 'marca', 'disponivel', 'criado_em')
    search_fields = ('nome', 'descricao')
   
   

admin.site.register(Produto, ProdutoAdmin)
