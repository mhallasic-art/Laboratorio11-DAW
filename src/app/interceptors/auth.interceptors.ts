import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // 📤 Obtener el token actual
    const token = this.authService.obtenerToken();
    let peticionModificada = req;

    // ✅ Si hay token, lo agregamos a la cabecera
    if (token) {
      peticionModificada = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    // ⚠️ Procesar la respuesta y capturar errores
    return next.handle(peticionModificada).pipe(
      catchError((error: HttpErrorResponse) => {

        // 🚨 ACTIVIDAD 3: SI EL TOKEN EXPIRÓ O ES INVÁLIDO
        if (error.status === 401) {
          alert('⚠️ Tu sesión ha expirado o no tienes permiso. Inicia sesión nuevamente.');
          
          // Borrar datos y volver al login
          this.authService.logout();
          this.router.navigate(['/login']);
        }

        return throwError(() => error);
      })
    );
  }
}