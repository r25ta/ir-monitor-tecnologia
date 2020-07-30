import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { TecnologiaModel } from '../model/tecnologia-model';
import { MonitorService } from '../service/monitor.service';

@Component({
  selector: 'app-monitor-grid',
  templateUrl: './monitor-grid.component.html',
  styleUrls: ['./monitor-grid.component.css']
})

export class MonitorGridComponent implements OnInit , OnChanges{
  tecnologiaLista: Array<TecnologiaModel>;

  @Input() filtroProvedor: string = null;
  @Output() mudouValorNulo = new EventEmitter();

  private _tecnologia: string = '';

  @Input()
  set tecnologia(tecnologia: string){
    this._tecnologia = (tecnologia && tecnologia.trim()) || '<no tecnologia>';
  }

  get tecnologia(): string{
    return this._tecnologia;
  }


  constructor(private monitorService : MonitorService) {

  }

  ngOnInit(): void {
    this.carregarGrid(this.filtroProvedor);
    this.getProvedores();
  }

    carregarGrid(provedor:string){
//      console.log("provedor =>" + provedor);
      if((provedor!=null)&&(provedor.trim()!="")){
        this.getProvedorByName(provedor);

      }else{
        this.getProvedores();

      }

    }

    getProvedores(){
      this.monitorService.getTecnologias().subscribe(
        retorno => {
          this.tecnologiaLista =  retorno.map ( item =>
            {
              return new TecnologiaModel(
                item.provedor,
                item.ctlProveTen,
                item.dhrProcPamcary,
                item.dhrProcFornecedor,
                item.dhrEvento,
                item.diff,
                item.diffFormatado,
                item.qtdeAProcessar,
                item.qtdeProcessando,
                item.qtdeAProcessar,
                item.qtdeLimpezaProcessar,
                item.qtdeLimpezaProcessando,
                item.qtdeVeiculo,
                item.qtdeDedicado,
                item.total
              )
            })

        }
      )

    }

    filterItens(arr,query) {
      return arr.filter( function(TecnologiaModel) {
        return TecnologiaModel.provedor.toLowerCase().indexOf(query.toLowerCase())!==-1;
      });
    }


    getProvedorByName(provedor : string){
      if((provedor!=null) && (provedor.trim()!="")){
        this.tecnologiaLista = this.filterItens(this.tecnologiaLista,provedor);

        console.log("retorno filter => " + this.tecnologiaLista.length);

        if(this.tecnologiaLista.length<=0){
          return this.tecnologiaLista=null;
        }

      }else{
        this.getProvedores();

      }
      return this.tecnologiaLista;
    }

    ngOnChanges(changes: SimpleChanges): void{
      let valorAtual: string = null;
      let valorAnterior: string = null;

      valorAtual = changes.tecnologia.currentValue;
      valorAnterior = changes.tecnologia.previousValue;

      this.carregarGrid(valorAtual);

      console.log("Current =>" + valorAtual);
      console.log("Previous =>" + valorAnterior);
    }

  onSubmit(){
    this.getProvedores();
    this.mudouValorNulo.emit({provedorValorNulo: null});
  }
}
