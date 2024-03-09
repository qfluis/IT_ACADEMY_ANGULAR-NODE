import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DetalleNaveComponent } from './naves/detalle-nave/detalle-nave.component';
import { ListaNavesComponent } from './naves/lista-naves/lista-naves.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch:'full', data: {animation: 'fader'}},
  {path: 'naves',canActivate:[AuthGuardService], component:ListaNavesComponent, data: {animation: 'fader1'}},
  {path: 'nave/:id',canActivate:[AuthGuardService], component: DetalleNaveComponent, data: {animation: 'fader2'}},
  {path: 'login-page', component: LoginPageComponent},
  {path:'**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
