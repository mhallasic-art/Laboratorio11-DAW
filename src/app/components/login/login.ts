import { Component } from '@angular/core';
// ✅ Importamos lo que falta para que funcionen las etiquetas
import { CommonModule } from '@angular/common'; // ✅ Para *ngIf
import { FormsModule } from '@angular/forms';   // ✅ Para [(ngModel)]
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ AQUÍ ESTABA EL PROBLEMA
  selector: 'app-login',
  templateUrl: './login.html'
})
export class LoginComponent {
  usuario = '';
  clave = '';
  mensaje = '';
  esExitoso = false;

  constructor(private authService: AuthService, private router: Router) {}

  async iniciarSesion() {
    const resultado = await this.authService.login(this.usuario, this.clave);
    this.mensaje = resultado.mensaje;
    this.esExitoso = resultado.ok;

    if (resultado.ok) {
      this.usuario = '';
      this.clave = '';
      setTimeout(() => this.router.navigate(['/dashboard']), 1500);
    }
  }
}