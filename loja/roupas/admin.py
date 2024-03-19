from django.contrib import admin
#from roupas.models import Categoria
#from roupas.models import Marca
from roupas.models import Produto

#class CartegoriaAdmin(admin.ModelAdmin):
 #   list_display = ("nome","slug")
  #  search_fields = ("nome",)

#admin.site.register(CartegoriaAdmin)
class ProdutoAdmin(admin.ModelAdmin):
    list_display = ('nome','descricao','preco','marca','disponivel'"criado_em")
    search_fields = ('nome',)

admin.site.register(Produto)