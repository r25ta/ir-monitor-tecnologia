import { Component, OnInit } from '@angular/core';
import { ResumoService } from '../service/resumo.service';
import { ResumoModel } from '../model/resumo-model';

@Component({
  selector: 'app-monitor-indicador',
  templateUrl: './monitor-indicador.component.html',
  styleUrls: ['./monitor-indicador.component.css']
})
export class MonitorIndicadorComponent implements OnInit {
  resumo: ResumoModel = null;

  constructor(private resumoService : ResumoService) { }

  ngOnInit(): void {
    this.getResumo();
  }

  getResumo(){
    this.resumoService.getResumoTecnologias().subscribe(
      retorno => {
        this.resumo = new ResumoModel(
            retorno.totalGeral,
            retorno.totalDedicado,
            retorno.totalPvAtivo,
            retorno.totalVeiculos
          )
        console.log("resumo " + this.resumo.totalGeral);
        }
        )
      }
}
