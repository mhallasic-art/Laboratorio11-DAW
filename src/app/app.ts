import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // ✅ Para que funcione <router-outlet>

@Component({
  standalone: true,
  imports: [RouterOutlet], // ✅ Importamos el enrutador
  selector: 'app-root',
  templateUrl: './app.html'
})
export class AppComponent {
  // ✅ Cambiamos title() por title (es una variable, no una función)
  title = 'frontend';
}