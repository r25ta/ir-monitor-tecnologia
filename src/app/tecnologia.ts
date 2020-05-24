export class Tecnologia {
    id:number;
    tecnologia: string;
    lag: string;
    terminal: string;
    operadora: string;
    infolog: string;
    lidos: string;
    processar: string;
    processando: string;
    total: string;
    dedicados: string;
    pvAtivos: string;

    constructor( id:number,
      tecnologia: string,
      lag: string,
      terminal: string,
      operadora: string,
      infolog: string,
      lidos: string,
      processar: string,
      processando: string,
      total: string,
      dedicados: string,
      pvAtivos: string ){

        this.id = id,
        this.tecnologia=tecnologia;
        this.lag=lag;
        this.terminal=terminal;
        this.operadora=operadora;
        this.infolog=infolog;
        this.lidos=lidos;
        this.processar=processar;
        this.processando=processando;
        this.total=total;
        this.dedicados=dedicados;
        this.pvAtivos=pvAtivos;

    }
}


let terminal = new Tecnologia ( 2
                             ,'Xvideos'
                             ,'00:01'
                             ,'1001'
                             ,'03/05/2020 18:00'
                             ,'03/05/2020 18:05'
                             ,'1.000.000'
                             ,'500.000'
                             ,'200.000'
                             ,'100.000'
                             ,'10.000'
                             ,'5.000'
                             );
