import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio/inicio.component';
import { AppRoutingModule } from '../assets/app.routers';
import { AboutComponent } from './componentes/about/about/about.component';
import { PagesNotFoundComponent } from './componentes/pagesNotFound/pages-not-found/pages-not-found.component';
import { GaleriaComponent } from './componentes/galeria/galeria/galeria.component';
import { ContactoComponent } from './componentes/contacto/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    AboutComponent,
    PagesNotFoundComponent,
    GaleriaComponent,
    ContactoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
