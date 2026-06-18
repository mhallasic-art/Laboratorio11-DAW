from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Curso, Producto, Libro

# Serializador para Usuarios
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']  # Datos que se mostrarán

# Serializador para Cursos
class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = '__all__'  # Muestra todos los campos

# Serializador para Productos
class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

# Serializador para Libros
class LibroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Libro
        fields = '__all__'