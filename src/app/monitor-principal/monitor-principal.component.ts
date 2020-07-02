import { Component, OnInit, Input } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MonitorLegendaComponent } from '../monitor-legenda/monitor-legenda.component';

@Component({
  selector: 'app-monitor-principal',
  templateUrl: './monitor-principal.component.html',
  styleUrls: ['./monitor-principal.component.css']
})

export class MonitorPrincipalComponent implements OnInit {
  chkAlertaSonoro= true;
  chkAtualizarMonitor = true;
  chkExibeIndicador = true;

  @Input() provedorFiltro: string;

  constructor(public dialog: MatDialog) {

  }

  openLegenda(){
    this.dialog.open(MonitorLegendaComponent);
  }

  ngOnInit() {

    setTimeout(() => { this.refresh();

    }, 15000);
    this.getAtributosSessionStorage();

  }

  getAtributosSessionStorage(){

    if(sessionStorage.getItem("atualizarMonitorStorage") == "checked"){
      this.chkAtualizarMonitor = true;

    }else if (sessionStorage.getItem("atualizarMonitorStorage") == "unchecked") {
      this.chkAtualizarMonitor = false;
    }

    if(sessionStorage.getItem("alertaSonoroStorage") == "checked"){
      this.chkAlertaSonoro = true;

    }else if (sessionStorage.getItem("alertaSonoroStorage") == "unchecked") {
      this.chkAlertaSonoro=false;

    }

    if(sessionStorage.getItem("exibeIndicadorStorage") == "checked"){
      this.chkExibeIndicador=true;

    }else if(sessionStorage.getItem("exibeIndicadorStorage") == "unchecked"){
      this.chkExibeIndicador=false;

    }
//    console.log("AlertaSonora =>" + sessionStorage.getItem("alertaSonoroStorage"));
//    console.log("Variavel AlertaSonora =>" + this.chkAlertaSonoro);
//    console.log("AtualizarMonitor =>" + sessionStorage.getItem("atualizarMonitorStorage"));
//    console.log("Variavel AtualizarMonitor =>" + this.chkAtualizarMonitor);
    console.log("exibeIndicadorStorage =>" + sessionStorage.getItem("exibeIndicadorStorage"));
    console.log("Variavel exibeIndicadorStorage =>" + this.chkExibeIndicador);


  }

  refresh(){
    if(sessionStorage.getItem("atualizarMonitorStorage")=="checked"){
      window.location.reload();
    }

    //console.log(sessionStorage.getItem("atualizarMonitorStorage"));


  }

  getAtualizarMonitor(event){
    this.chkAtualizarMonitor = event.checked;
    if(this.chkAtualizarMonitor){
      window.sessionStorage.setItem("atualizarMonitorStorage","checked");
      this.refresh();

    } else{
      window.sessionStorage.setItem("atualizarMonitorStorage","unchecked");

    }
    //console.log(window.sessionStorage.getItem("atualizarMonitor"));


  }

  getAlertaSonoro(event){
    this.chkAlertaSonoro = event.checked;
    if(this.chkAlertaSonoro==true){
      sessionStorage.setItem("alertaSonoroStorage","checked");

    }else{
      sessionStorage.setItem("alertaSonoroStorage","unchecked");

    }

  }

  getIndicador(event){
    this.chkExibeIndicador = event.checked;
    if(this.chkExibeIndicador == true){
      sessionStorage.setItem("exibeIndicadorStorage","checked");

    }else{
      sessionStorage.setItem("exibeIndicadorStorage","unchecked");

    }

    console.log("getIndicador " + sessionStorage.getItem("exibeIndicadorStorage"));
  }
  onMudouValor(evento: any){
    this.provedorFiltro = evento.provedorNovoValor;
//    console.log('Monitor-Principal- provedorFiltroInput '+ this.provedorFiltro);

  }

  onMudouValorNulo(evento: any){
//    console.log("LIMPAR PROPRIEDADES " +  evento.provedorValorNulo);
    this.provedorFiltro = evento.provedorValorNulo;
  }

}
