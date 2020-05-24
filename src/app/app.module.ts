import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonitorPrincipalComponent } from './monitor-principal/monitor-principal.component';
import { MonitorGridComponent } from './monitor-grid/monitor-grid.component';
import { MonitorIndicadorComponent } from './monitor-indicador/monitor-indicador.component';
import { MonitorLegendaComponent } from './monitor-legenda/monitor-legenda.component';
import { MonitorNavbarComponent } from './monitor-navbar/monitor-navbar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    MonitorPrincipalComponent,
    MonitorGridComponent,
    MonitorIndicadorComponent,
    MonitorLegendaComponent,
    MonitorNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
