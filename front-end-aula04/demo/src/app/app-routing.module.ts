import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/sistema/login/login.component';
import { IndexComponent } from './components/layout/index/index.component';
import { PessoaslistComponent } from './components/pessoas/pessoaslist/pessoaslist.component';
import { CarroslistComponent } from './components/carros/carroslist/carroslist.component';
import { LivrosdetailsComponent } from './components/livros/livrosdetalis/livrosdetalis.component';
import { LivroslistComponent } from './components/livros/livroslist/livroslist.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  {
    path: "admin", component: IndexComponent, children: [
      { path: "pessoas", component: PessoaslistComponent },
      { path: "carros", component: CarroslistComponent },
      { path: "livros", component: LivroslistComponent}

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
