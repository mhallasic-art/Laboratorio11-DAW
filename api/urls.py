from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsuarioViewSet, CursoViewSet, ProductoViewSet, LibroViewSet

# El router genera automáticamente todas las rutas CRUD
router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet)
router.register(r'cursos', CursoViewSet)
router.register(r'productos', ProductoViewSet)
router.register(r'libros', LibroViewSet)

urlpatterns = [
    path('', include(router.urls)),
]