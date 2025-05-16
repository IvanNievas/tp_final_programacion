"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tragamonedas25 = void 0;
var Tragamonedas_1 = require("./Tragamonedas");
var Tragamonedas25 = /** @class */ (function (_super) {
    __extends(Tragamonedas25, _super);
    function Tragamonedas25(cliente) {
        return _super.call(this, "Tragamonedas 25%", 1.0, 0.25, cliente) || this; // Pasa nombre del juego, apuesta mínima, probabilidad y cliente
    }
    Tragamonedas25.prototype.calcularGanancia = function () {
        var random = Math.random();
        if (random <= this.probabilidadGanancia) {
            return this.cantidadApuesta * 2; // Gana el doble de lo apostado
        }
        else {
            return 0; // No hay ganancia
        }
    };
    Tragamonedas25.prototype.realizarApuesta = function (cantidad) {
        // Valido si la apuesta es válida antes de intentar realizarla
        if (cantidad < this.valorMinimo) {
            return "La apuesta m\u00EDnima es ".concat(this.valorMinimo, ".");
        }
        if (cantidad > this.usuario.saldo) {
            return "No tienes suficiente saldo para esta apuesta. Saldo actual: ".concat(this.usuario.saldo);
        }
        // Si la apuesta es válida, se procede con el cálculo
        _super.prototype.realizarApuesta.call(this, cantidad); // Valida la apuesta y descuenta el saldo
        if (this.cantidadApuesta === 0) {
            return "La apuesta no es válida.";
        }
        var ganancia = this.calcularGanancia();
        if (ganancia > 0) {
            this.actualizarSaldo(true, ganancia);
            return "\uD83C\uDF89 \u00A1Ganaste! Has ganado ".concat(ganancia, ". Saldo actual: ").concat(this.usuario.saldo);
        }
        else {
            return "\uD83D\uDE22 No ganaste esta vez. Saldo actual: ".concat(this.usuario.saldo);
        }
    };
    return Tragamonedas25;
}(Tragamonedas_1.Tragamonedas));
exports.Tragamonedas25 = Tragamonedas25;
