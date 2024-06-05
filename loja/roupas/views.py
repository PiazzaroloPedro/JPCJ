from django.shortcuts import render, redirect
from .models import Produto, CarrinhoItem, Pedido
from django.contrib.auth.decorators import login_required
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

from django.shortcuts import render

def bermudafeminina(request):
    return render(request, 'bermudafeminina.html')


@login_required
def adicionar_ao_carrinho(request, produto_id):
    produto = Produto.objects.get(id=produto_id)
    carrinho_item, criado = CarrinhoItem.objects.get_or_create(usuario=request.user, produto=produto)
    carrinho_item.quantidade += 1
    carrinho_item.save()
    return redirect('carrinho')

@login_required
def remover_do_carrinho(request, item_id):
    item = CarrinhoItem.objects.get(id=item_id)
    item.delete()
    return redirect('carrinho')

@login_required
def carrinho(request):
    carrinho_itens = CarrinhoItem.objects.filter(usuario=request.user)
    total = sum(item.produto.preco * item.quantidade for item in carrinho_itens)
    return render(request, 'carrinho.html', {'carrinho_itens': carrinho_itens, 'total': total})

