import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { ActorComponent } from './componentes/actor/actor.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { PaisesListadoComponent } from './componentes/paises-listado/paises-listado.component';
const routes = [
    { path: '', component: PrincipalComponent },
    { path: 'bienvenido', component: PrincipalComponent },
    { path: 'busqueda', component: BusquedaComponent },
    { path: 'peliculas', component: PeliculasComponent,
        children: [
            { path: 'alta', component: PeliculaAltaComponent },
            { path: 'listado', component: PeliculaListadoComponent }
        ] },
    { path: 'actor', component: ActorComponent,
        children: [
            { path: 'alta', component: ActorAltaComponent },
            { path: 'listado', component: ActorListadoComponent }
        ] },
    { path: 'paises/listado', component: PaisesListadoComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map