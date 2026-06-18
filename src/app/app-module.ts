import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ✅ RUTAS EXACTAS (como tú lo tienes: app-routing-module.ts)
import { AppRoutingModule } from './app-routing-module';

// ✅ IMPORTAMOS, NO DECLARAMOS (porque son STANDALONE)
import { AppComponent } from './app';
import { LoginComponent } from './components/login/login';
import { DashboardComponent } from './components/dashboard/dashboard';

// ✅ SERVICIOS E INTERCEPTORES
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptors';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ✅ AQUÍ ES DONDE VAN LOS COMPONENTES STANDALONE
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ] // ✅ Permite <router-outlet>
})
export class AppModule { }