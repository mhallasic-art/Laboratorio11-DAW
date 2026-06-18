from rest_framework import viewsets, permissions
from django.contrib.auth.models import User
from .models import Curso, Producto, Libro
from .serializers import UsuarioSerializer, CursoSerializer, ProductoSerializer, LibroSerializer

# CRUD USUARIOS (solo lectura, para ver listado)
class UsuarioViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = [permissions.IsAuthenticated]  # 🔒 Protegido por JWT

# CRUD COMPLETO PARA CURSOS
class CursoViewSet(viewsets.ModelViewSet):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer
    permission_classes = [permissions.IsAuthenticated]  # 🔒 Protegido

# CRUD COMPLETO PARA PRODUCTOS
class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
    permission_classes = [permissions.IsAuthenticated]  # 🔒 Protegido

# CRUD COMPLETO PARA LIBROS
class LibroViewSet(viewsets.ModelViewSet):
    queryset = Libro.objects.all()
    serializer_class = LibroSerializer
    permission_classes = [permissions.IsAuthenticated]  # 🔒 Protegido