import { TecnologiaModel } from './tecnologia-model';

export interface MonitorModel {
  totalGeral:number;
  totalDedicado:number;
  totalPvAtivo:number;
  tecnologia:TecnologiaModel;
}
