#from django.db import models

# Create your models here.
#class Categoria(models.Model):
 #   nome = models.CharField(max_length=100)
  #  slug = models.SlugField(unique=True)

   # def __str__(self):
    #    return self.nome

#class Marca(models.Model):
 #   nome = models.CharField(max_length=100)

    #def __str__(self):
      #  return self.nome

#class Produto(models.Model):
 #   id = models.AutoField(primary_key=True)
  #  nome = models.CharField(max_length=255) #nome do produto
   # descricao = models.TextField()#descricao do produto
    #preco = models.DecimalField(max_digits=10, decimal_places=2)#preço do produto
    #marca = models.CharField(max_length=200)
    #disponivel = models.BooleanField(default=True)
    #criado_em = models.DateTimeField(auto_now_add=True)

    #def __str__(self):
      #  return self.nome
from django.db import models

class Categoria(models.Model):
    nome = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.nome

class Marca(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=200)

    def __str__(self):
        return self.nome

class Produto(models.Model):
    id = models.AutoField(primary_key=True)  # Chave primária
    nome = models.CharField(max_length=255)
    descricao = models.TextField()
    imagem = models.ImageField(upload_to='loja/imagem', blank=True)
    marca = models.ForeignKey(Marca, on_delete=models.PROTECT,related_name='produto_marca')  # Chave estrangeira (marca)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    disponivel = models.BooleanField(default=True)
    criado_em = models.DateTimeField(auto_now_add=True)
    
    

    def __str__(self):
        return self.nome
