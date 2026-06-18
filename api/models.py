from django.db import models
from django.contrib.auth.models import User  # Usuario propio de Django

# Modelo para Cursos
class Curso(models.Model):
    nombre = models.CharField(max_length=100, verbose_name="Nombre del curso")
    descripcion = models.TextField(verbose_name="Descripción")
    precio = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Precio")

    def __str__(self):
        return self.nombre

# Modelo para Productos
class Producto(models.Model):
    nombre = models.CharField(max_length=100, verbose_name="Nombre del producto")
    categoria = models.CharField(max_length=50, verbose_name="Categoría")
    stock = models.IntegerField(verbose_name="Cantidad en stock")

    def __str__(self):
        return self.nombre

# Modelo para Libros
class Libro(models.Model):
    titulo = models.CharField(max_length=150, verbose_name="Título del libro")
    autor = models.CharField(max_length=100, verbose_name="Autor")
    anio_publicacion = models.IntegerField(verbose_name="Año de publicación")

    def __str__(self):
        return self.titulo