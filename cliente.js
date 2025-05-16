"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Cliente.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cliente.prototype.setSaldo = function (saldo) {
        this.saldo = saldo;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
//el registrar al cliente y cargarle el saldo principal se hace por consola y se instancia en el main
