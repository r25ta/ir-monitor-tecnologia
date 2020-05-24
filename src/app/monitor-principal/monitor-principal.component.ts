import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-monitor-principal',
  templateUrl: './monitor-principal.component.html',
  styleUrls: ['./monitor-principal.component.css']
})
export class MonitorPrincipalComponent implements OnInit {
  exibeIndicador = true;

  @Input() provedorFiltro: string;

  constructor() {

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
