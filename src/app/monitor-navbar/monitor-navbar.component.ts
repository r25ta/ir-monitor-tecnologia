import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-monitor-navbar',
  templateUrl: './monitor-navbar.component.html',
  styleUrls: ['./monitor-navbar.component.css']
})
export class MonitorNavbarComponent implements OnInit {

  @Input() filtroProvedor: string = null;

  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(event: any){
    this.filtroProvedor = event.target.inputPesquisar.value;
    console.log("Filtro inserido " + this.filtroProvedor);
    this.mudouValor.emit({provedorNovoValor: this.filtroProvedor});

  }

}
