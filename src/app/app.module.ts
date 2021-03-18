import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from '../app/material/material.module';
import { MonitorPrincipalComponent } from './monitor-principal/monitor-principal.component';
import { MonitorGridComponent } from './monitor-grid/monitor-grid.component';
import { MonitorIndicadorComponent } from './monitor-indicador/monitor-indicador.component';
import { MonitorLegendaComponent } from './monitor-legenda/monitor-legenda.component';
import { MonitorNavbarComponent } from './monitor-navbar/monitor-navbar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SortDirective } from './directive/sort.directive';


@NgModule({
  declarations: [
    AppComponent,
    MonitorPrincipalComponent,
    MonitorGridComponent,
    MonitorIndicadorComponent,
    MonitorLegendaComponent,
    MonitorNavbarComponent,
    SortDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    Ng2SearchPipeModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
