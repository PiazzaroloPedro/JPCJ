from django.contrib import admin
from .models import Categoria, Marca, Produto, CarrinhoItem, Pedido

class CategoriaAdmin(admin.ModelAdmin):
    list_display = ("nome", "slug")
    search_fields = ("nome",)
   

admin.site.register(Categoria, CategoriaAdmin)

class MarcaAdmin(admin.ModelAdmin):
    list_display = ("id", "nome")
    search_fields = ("nome",)

admin.site.register(Marca, MarcaAdmin)

class ProdutoAdmin(admin.ModelAdmin):
    list_display = ('nome', 'descricao', 'imagem', 'marca', 'preco', 'disponivel', 'criado_em')
    search_fields = ('nome', 'descricao')
   

admin.site.register(Produto, ProdutoAdmin)

class CarrinhoItemAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'produto', 'quantidade')
    search_fields = ('usuario__username', 'produto__nome')

admin.site.register(CarrinhoItem, CarrinhoItemAdmin)

class PedidoAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'total', 'criado_em')
    search_fields = ('usuario__username',)
    

admin.site.register(Pedido, PedidoAdmin)

