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
exports.JuegoDeDados = void 0;
var casino_1 = require("./casino");
var JuegoDeDados = /** @class */ (function (_super) {
    __extends(JuegoDeDados, _super);
    function JuegoDeDados(nombre, valorMinimo, usuario) {
        var _this = _super.call(this, nombre, valorMinimo, usuario) || this;
        _this._dado1 = 0;
        _this._dado2 = 0;
        return _this;
    }
    Object.defineProperty(JuegoDeDados.prototype, "dado1", {
        // Getters
        get: function () {
            return this._dado1;
        },
        // Setters
        set: function (valor) {
            this._dado1 = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JuegoDeDados.prototype, "dado2", {
        get: function () {
            return this._dado2;
        },
        set: function (valor) {
            this._dado2 = valor;
        },
        enumerable: false,
        configurable: true
    });
    // Método para lanzar los dados, obtener resultado random
    JuegoDeDados.prototype.lanzarDados = function () {
        this.dado1 = Math.floor(Math.random() * 6) + 1;
        this.dado2 = Math.floor(Math.random() * 6) + 1;
        console.log("🎲 ", this.dado1, " + 🎲 ", this.dado2, " = ");
    };
    // Método Obtener Resultado, es la suma de los dados
    JuegoDeDados.prototype.obtenerResultado = function () {
        var resul;
        resul = this.dado1 + this.dado2;
        console.log("    🌟 ", resul, " 🌟");
        return resul;
    };
    // Realizar apuesta
    JuegoDeDados.prototype.realizarApuesta = function (valor) {
        if (!this.esApuestaValida(valor)) {
            return "La apuesta no es v\u00E1lida. Debe ser de al menos ".concat(this.valorMinimo, " y no exceder el saldo disponible (").concat(this.usuario.saldo, ")");
        }
        this.lanzarDados();
        var resultado = this.obtenerResultado();
        if (resultado === 7 || resultado === 11) {
            this.actualizarSaldo(true, valor);
            return "\uD83C\uDFB2 Resultado: ".concat(resultado, ". \u00A1Ganaste! Has ganado ").concat(valor, ". Saldo actual: ").concat(this.usuario.saldo, ".");
        }
        else if (resultado === 2 || resultado === 3 || resultado === 12) {
            this.actualizarSaldo(false, valor);
            return "\uD83C\uDFB2 Resultado: ".concat(resultado, ". Perdiste. Has perdido ").concat(valor, ". Saldo actual: ").concat(this.usuario.saldo, ".");
        }
        else {
            return this.segundaEtapa(resultado, valor);
        }
    };
    // Método para la segunda etapa (puntuar)
    JuegoDeDados.prototype.segundaEtapa = function (punto, valor) {
        var resultado;
        console.log("Has pasado a la segunta etapa. ¡Sigue intentando conseguir el mismo valor que el punto!");
        do {
            console.log("Lanza los dados!!!");
            this.lanzarDados();
            resultado = this.obtenerResultado();
            if (resultado === 7) { //verifica si el resultado es 7. Si es así, el jugador pierde.
                this.actualizarSaldo(false, valor); //Descuenta el saldo del jugador
                return "\uD83C\uDFB2 Resultado: ".concat(resultado, ". Perdiste. Has perdido ").concat(valor, ". Saldo actual: ").concat(this.usuario.saldo, ".");
            }
        } while (resultado !== punto); /* Verifica si resultado no es igual a punto, lo que significa que el bucle seguirá
                                        ejecutándose hasta que el jugador obtenga el mismo valor que el "punto".*/
        this.actualizarSaldo(true, valor);
        return "\uD83C\uDFB2 Resultado: ".concat(resultado, ". \u00A1Ganaste! Has ganado ").concat(valor, ". Saldo actual: ").concat(this.usuario.saldo, ".");
    };
    return JuegoDeDados;
}(casino_1.Casino));
exports.JuegoDeDados = JuegoDeDados;
