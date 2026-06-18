from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,    # ➡️ Login: obtiene token
    TokenRefreshView,       # ➡️ Renovar token
    TokenVerifyView,        # ➡️ Verificar si token es válido
)

urlpatterns = [
    path('admin/', admin.site.urls),

    # 🔐 RUTAS DE AUTENTICACIÓN JWT (Actividad 1)
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    # 📚 RUTAS DE NUESTRA API (CRUD)
    path('api/', include('api.urls')),
]