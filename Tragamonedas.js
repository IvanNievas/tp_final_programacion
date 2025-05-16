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
exports.Tragamonedas = void 0;
var casino_1 = require("./casino");
var Tragamonedas = /** @class */ (function (_super) {
    __extends(Tragamonedas, _super);
    function Tragamonedas(nombreJuego, valorMinimoApuesta, probabilidadGanancia, cliente) {
        var _this = _super.call(this, nombreJuego, valorMinimoApuesta, cliente) || this; // Pasa nombre del juego, apuesta mínima y cliente
        _this.probabilidadGanancia = probabilidadGanancia;
        _this.cantidadApuesta = 0;
        return _this;
    }
    Tragamonedas.prototype.realizarApuesta = function (cantidad) {
        if (!this.esApuestaValida(cantidad)) {
            return "La apuesta no es v\u00E1lida. Debe ser al menos ".concat(this.valorMinimo, " y no exceder el saldo disponible.");
        }
        this.cantidadApuesta = cantidad;
        this.usuario.saldo -= cantidad; // Descuenta la apuesta del saldo del cliente
        var ganancia = this.calcularGanancia();
        if (ganancia > 0) {
            this.actualizarSaldo(true, ganancia);
            return "\uD83C\uDF89 \u00A1Ganaste! Has ganado ".concat(ganancia, ". Saldo actual: ").concat(this.usuario.saldo);
        }
        else {
            return "\uD83D\uDE22 No ganaste esta vez. Saldo actual: ".concat(this.usuario.saldo);
        }
    };
    return Tragamonedas;
}(casino_1.Casino));
exports.Tragamonedas = Tragamonedas;
