import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaslistComponent } from './components/pessoas/pessoaslist/pessoaslist.component';
import { PessoasdetailsComponent } from './components/pessoas/pessoasdetails/pessoasdetails.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { IndexComponent } from './components/layout/index/index.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CarroslistComponent } from './components/carros/carroslist/carroslist.component';
import { CarrodetailsComponent } from './components/carros/carrosdetails/carrodetalis.component';
import { PessoaService } from './services/pessoas/pessoa.service';
import { CarrosService } from './services/carros/carros.service';
import { LivroService } from './services/livros/livro.service';
import { LivroslistComponent } from './components/livros/livroslist/livroslist.component';
import { LivrosdetailsComponent } from './components/livros/livrosdetalis/livrosdetalis.component';
@NgModule({
  declarations: [
    AppComponent,
    PessoaslistComponent,
    PessoasdetailsComponent,
    CarroslistComponent,
    CarrodetailsComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    LivroslistComponent,
    LivrosdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    PessoaService,
    CarrosService,
    LivroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
