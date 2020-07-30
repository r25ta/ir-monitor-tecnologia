export class ResumoModel {
  totalGeral: number;
  totalDedicado: number;
  totalPvAtivo: number;
  totalVeiculos: number;

  constructor( totalGeral: number,
               totalDedicado: number,
               totalPvAtivo: number,
               totalVeiculos: number ){
    this.totalGeral = totalGeral;
    this.totalDedicado = totalDedicado;
    this.totalPvAtivo = totalPvAtivo;
    this.totalVeiculos = totalVeiculos;
  }
}
