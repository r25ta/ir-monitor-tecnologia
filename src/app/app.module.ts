import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonitorPrincipalComponent } from './monitor-principal/monitor-principal.component';
import { MonitorGridComponent } from './monitor-grid/monitor-grid.component';
import { MonitorIndicadorComponent } from './monitor-indicador/monitor-indicador.component';
import { MonitorLegendaComponent } from './monitor-legenda/monitor-legenda.component';
import { MonitorNavbarComponent } from './monitor-navbar/monitor-navbar.component';

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
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
