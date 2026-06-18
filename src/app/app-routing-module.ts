import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ✅ RUTAS EXACTAS
import { LoginComponent } from './components/login/login';
import { DashboardComponent } from './components/dashboard/dashboard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }