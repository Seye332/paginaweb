import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InicioComponent } from '../app/componentes/inicio/inicio/inicio.component';
import { AboutComponent } from '../app/componentes/about/about/about.component';
import { PagesNotFoundComponent } from 'src/app/componentes/pagesNotFound/pages-not-found/pages-not-found.component';
import { GaleriaComponent } from 'src/app/componentes/galeria/galeria/galeria.component';
import { ContactoComponent } from 'src/app/componentes/contacto/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'Inicio', component: InicioComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Galeria', component: GaleriaComponent },
  { path: 'Contacto', component: ContactoComponent },
  { path: '**', component: PagesNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
