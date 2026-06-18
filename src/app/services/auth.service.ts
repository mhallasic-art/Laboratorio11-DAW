import { Injectable } from '@angular/core';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthService {

  // 📌 URL de tu backend Django (¡NO LA CAMBIES, ES LA CORRECTA!)
  private baseURL = 'http://127.0.0.1:8000/api';

  // ==============================================
  // 🔑 FUNCIÓN LOGIN → Obtener y guardar el token
  // ==============================================
  async login(usuario: string, clave: string) {
    try {
      // Petición al backend para obtener el token
      const respuesta = await axios.post(`${this.baseURL}/token/`, {
        username: usuario,
        password: clave
      });

      // ✅ GUARDAR TOKENS EN EL NAVEGADOR
      localStorage.setItem('token', respuesta.data.access);
      localStorage.setItem('refresh_token', respuesta.data.refresh);

      return {
        ok: true,
        mensaje: '✅ Inicio de sesión exitoso'
      };

    } catch (error: any) {
      // 🚨 ACTIVIDAD 3: MENSAJES DE ERROR
      if (error.response?.status === 401) {
        return { ok: false, mensaje: '❌ Usuario o contraseña incorrectos' };
      }
      return { ok: false, mensaje: '❌ Error de conexión con el servidor' };
    }
  }

  // ==============================================
  // ⏰ VERIFICAR SI EL TOKEN ES VÁLIDO O EXPIRÓ
  // ==============================================
  estaAutenticado(): boolean {
    const token = localStorage.getItem('token');

    // Si no hay token = no está logueado
    if (!token) return false;

    try {
      // Decodificamos el token para leer su fecha de vencimiento
      const decodificado: any = jwtDecode(token);
      const fechaExpiracion = decodificado.exp * 1000; // Convertir a milisegundos

      // ⚠️ ACTIVIDAD 3: DETECTAR CADUCIDAD
      if (Date.now() >= fechaExpiracion) {
        this.logout(); // Cerrar sesión automáticamente
        alert('⚠️ TU SESIÓN HA EXPIRADO. Inicia sesión nuevamente.');
        return false;
      }

      return true; // Todo correcto, token vigente

    } catch {
      // Si hay error al leer el token, lo borramos
      this.logout();
      return false;
    }
  }

  // ==============================================
  // 🚪 ACTIVIDAD 4: LOGOUT → ELIMINAR TOKEN
  // ==============================================
  logout() {
    // ✅ CÓDIGO EXACTO QUE TE DIERON EN LA GUÍA
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    console.log('🔓 Sesión cerrada, tokens eliminados');
  }

  // Obtener token para enviarlo en las peticiones
  obtenerToken(): string | null {
    return localStorage.getItem('token');
  }
}