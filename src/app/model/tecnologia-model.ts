export class TecnologiaModel {
  provedor: string;
  ctlProveTen: number;
  dhrProcPamcary: string;
  dhrProcFornecedor: string;
  dhrEvento: string;
  diff: string;
  diffFormatado: string;
  qtdeProcessado: number;
  qtdeProcessando: number;
  qtdeAProcessar: number;
  qtdeLimpezaProcessar: number;
  qtdeLimpezaProcessando: number;
  qtdeVeiculo: number;
  qtdeDedicado: number;
  total: number;


  constructor(provedor: string,
              ctlProveTen: number,
              dhrProcPamcary: string,
              dhrProcFornecedor: string,
              dhrEvento: string,
              diff: string,
              diffFormatado: string,
              qtdeProcessado: number,
              qtdeProcessando: number,
              qtdeAProcessar: number,
              qtdeLimpezaProcessar: number,
              qtdeLimpezaProcessando: number,
              qtdeVeiculo: number,
              qtdeDedicado: number,
              total: number){

                this.provedor = provedor;
                this.ctlProveTen = ctlProveTen;
                this.dhrProcPamcary = dhrProcPamcary;
                this.dhrProcFornecedor = dhrProcFornecedor;
                this.dhrEvento = dhrEvento;
                this.diff = diff;
                this.diffFormatado = diffFormatado;
                this.qtdeProcessado = qtdeProcessado;
                this.qtdeProcessando = qtdeProcessando;
                this.qtdeAProcessar = qtdeAProcessar;
                this.qtdeLimpezaProcessar = qtdeLimpezaProcessar;
                this.qtdeLimpezaProcessando = qtdeLimpezaProcessando;
                this.qtdeVeiculo = qtdeVeiculo;
                this.qtdeDedicado = qtdeDedicado;
                this.total = total;
  }
}
