import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Tecnologia } from '../tecnologia';

@Component({
  selector: 'app-monitor-grid',
  templateUrl: './monitor-grid.component.html',
  styleUrls: ['./monitor-grid.component.css']
})

export class MonitorGridComponent implements OnInit , OnChanges{


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

  tecnologiaLista: Array<Tecnologia>;

  constructor() {

   }

  ngOnInit(): void {
    this.carregarGrid(this.filtroProvedor);
  }

    carregarGrid(provedor:string){
//      console.log("provedor =>" + provedor);


      if((provedor!=null)&&(provedor.trim()!="")){
        this.getProvedorByName(provedor);

      }else{
        this.getAllProvedores();

      }

    }
    getAllProvedores(){
      return this.tecnologiaLista =  [ new Tecnologia(1,'Autotrac','00:01','1001','03/05/2020 18:00','03/05/2020 18:05','1.000.000','500.000','200.000','100.000','10.000','5.000'),
      new Tecnologia(2,'Controloc','00:01','1001','03/05/2020 18:00','03/05/2020 18:05','1.000.000','500.000','200.000','100.000','10.000','5.000'),
      new Tecnologia(3,'Omnilink','00:01','1001','03/05/2020 18:00','03/05/2020 18:05','1.000.000','500.000','200.000','100.000','10.000','5.000'),
      new Tecnologia(4,'Condusit','00:01','1001','03/05/2020 18:00','03/05/2020 18:05','1.000.000','500.000','200.000','100.000','10.000','5.000'),
      new Tecnologia(5,'Link','00:01','1001','03/05/2020 18:00','03/05/2020 18:05','1.000.000','500.000','200.000','100.000','10.000','5.000')];

    }


    filterItens(arr,query) {
      return arr.filter( function(Tecnologia) {
        return Tecnologia.tecnologia.toLowerCase().indexOf(query.toLowerCase())!==-1;
      });
    }


    getProvedorByName(provedor : string){
      if((provedor!=null) && (provedor.trim()!="")){
        let i : Tecnologia;
        let lista : Array<Tecnologia> =null;
        /*Recarrega lista de provedores para pesquisa */
        lista = this.getAllProvedores();
        this.tecnologiaLista=null;

        this.tecnologiaLista = this.filterItens(lista,provedor);

//        console.log("retorno filter => " + this.tecnologiaLista.length);

        if(this.tecnologiaLista.length<=0){
          return this.tecnologiaLista=null;
        }

      }else{
        this.getAllProvedores();

      }
      return this.tecnologiaLista;
    }

    ngOnChanges(changes: SimpleChanges): void{
      let valorAtual: string = null;
      let valorAnterior: string = null;

      valorAtual = changes.tecnologia.currentValue;
      valorAnterior = changes.tecnologia.previousValue;

        this.carregarGrid(valorAtual);

        //      console.log("Current =>" + valorAtual);
//      console.log("Previous =>" + valorAnterior);
    }

  onSubmit(){
    this.getAllProvedores();
    this.mudouValorNulo.emit({provedorValorNulo: null});
  }
}
