"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(nombre, valorMinimo, usuario) {
        this._nombre = nombre;
        this.valorMinimo = 50;
        this.usuario = usuario;
    }
    Object.defineProperty(Casino.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Casino.prototype, "valorminimo", {
        get: function () {
            return this.valorMinimo;
        },
        enumerable: false,
        configurable: true
    });
    Casino.prototype.esApuestaValida = function (valor) {
        return valor >= this.valorMinimo && this.usuario.saldo >= valor; // el saldo del cliente debe ser suficiente para cubrir la apuesta
    };
    Casino.prototype.actualizarSaldo = function (gano, monto) {
        if (gano) {
            this.usuario.saldo += monto;
        }
        else {
            this.usuario.saldo = this.usuario.saldo - monto;
        }
    };
    return Casino;
}());
exports.Casino = Casino;
