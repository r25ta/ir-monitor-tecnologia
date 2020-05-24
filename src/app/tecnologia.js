"use strict";
exports.__esModule = true;
var Tecnologia = /** @class */ (function () {
    function Tecnologia(id, tecnologia, lag, terminal, operadora, infolog, lidos, processar, processando, total, dedicados, pvAtivos) {
        this.id = id,
            this.tecnologia = tecnologia;
        this.lag = lag;
        this.terminal = terminal;
        this.operadora = operadora;
        this.infolog = infolog;
        this.lidos = lidos;
        this.processar = processar;
        this.processando = processando;
        this.total = total;
        this.dedicados = dedicados;
        this.pvAtivos = pvAtivos;
    }
    return Tecnologia;
}());
exports.Tecnologia = Tecnologia;
var terminal = new Tecnologia(2, 'Xvideos', '00:01', '1001', '03/05/2020 18:00', '03/05/2020 18:05', '1.000.000', '500.000', '200.000', '100.000', '10.000', '5.000');
console.log("Instancia de terminal " + terminal.tecnologia);
