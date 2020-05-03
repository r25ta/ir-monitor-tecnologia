import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor-principal',
  templateUrl: './monitor-principal.component.html',
  styleUrls: ['./monitor-principal.component.css']
})
export class MonitorPrincipalComponent implements OnInit {
  exibeIndicador = true;



  constructor() { }

  ngOnInit(): void {
  }

  getIndicador(event){
    this.exibeIndicador = event.target.checked;
    console.log(`Exibir Indicadores ${this.exibeIndicador}`);

  }
}
