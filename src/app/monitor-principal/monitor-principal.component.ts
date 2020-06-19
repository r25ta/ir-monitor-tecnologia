import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MonitorLegendaComponent } from '../monitor-legenda/monitor-legenda.component';

@Component({
  selector: 'app-monitor-principal',
  templateUrl: './monitor-principal.component.html',
  styleUrls: ['./monitor-principal.component.css']
})
export class MonitorPrincipalComponent implements OnInit {
  exibeIndicador = false;

  @Input() provedorFiltro: string;

  constructor(public dialog: MatDialog) {

  }

  openLegenda(){
    this.dialog.open(MonitorLegendaComponent);
  }
  ngOnInit(): void {
  }

  getIndicador(event){
    this.exibeIndicador = event.target.checked;
    console.log(`Exibir Indicadores ${this.exibeIndicador}`);

  }
  onMudouValor(evento: any){
    this.provedorFiltro = evento.provedorNovoValor;
    console.log('Monitor-Principal- provedorFiltroInput '+ this.provedorFiltro);

  }

  onMudouValorNulo(evento: any){
    console.log("LIMPAR PROPRIEDADES " +  evento.provedorValorNulo);
    this.provedorFiltro = evento.provedorValorNulo;
  }

}
