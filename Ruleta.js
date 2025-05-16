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
exports.Ruleta = void 0;
var casino_1 = require("./casino"); // traigo nombre, apuestaMinima
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta(usuario) {
        return _super.call(this, "Ruleta Clasica", 50, usuario) || this; // aca defino el nombre del juego, la apuesta minima, y el usuario
    }
    Ruleta.prototype.realizarApuesta = function (valor, numeroElegido) {
        // Validar que el número elegido sea un número
        if (typeof numeroElegido !== "number" || isNaN(numeroElegido)) {
            return "El número elegido tiene que ser entre 0 y 36.";
        }
        // Validar que el monto de la apuesta sea mayor o igual al mínimo y menor o igual al saldo actual
        if (!this.esApuestaValida(valor)) {
            return "La apuesta no es v\u00E1lida. Debe ser de al menos ".concat(this.valorMinimo, " y no exceder el saldo disponible (").concat(this.usuario.saldo, ").");
        }
        // Validar que el número elegido esté dentro del rango permitido
        if (numeroElegido < 0 || numeroElegido > 36) {
            return "El número elegido tiene que ser entre 0 y 36.";
        }
        // Procesar la apuesta
        this.usuario.saldo -= valor; // Descuenta el monto de la apuesta después de validar el número elegido y el monto de la apuesta
        console.log("Girando la ruleta...");
        var numeroGanador = this.simularRuleta(); // Simula el giro de la ruleta
        console.log("La bolilla cay\u00F3 en el n\u00FAmero: ".concat(numeroGanador));
        if (numeroElegido === numeroGanador) {
            var ganancia = valor * 36;
            this.actualizarSaldo(true, ganancia);
            return "\u00A1Ganaste en ".concat(this.nombre, "! Ganancia: ").concat(ganancia, ". Saldo actual: ").concat(this.usuario.saldo);
        }
        else {
            return "Perdiste en ".concat(this.nombre, ". Saldo actual: ").concat(this.usuario.saldo, ". \u00A1M\u00E1s suerte para la pr\u00F3xima vez!");
        }
    };
    Ruleta.prototype.simularRuleta = function () {
        var numeroActual;
        console.clear();
        for (var i = 0; i < 20; i++) {
            numeroActual = Math.floor(Math.random() * 37); // Genera un número aleatorio entre 0 y 36
            console.log("N\u00FAmero actual: ".concat(numeroActual));
            this.esperar(200); // Aplica una pausa de 200 ms para simular los numeros por donde pasa la bolilla de la ruleta
            console.clear();
        }
        return numeroActual;
    };
    Ruleta.prototype.esperar = function (ms) {
        // Pausa la ejecución hasta que llegue a los "ms" asignados (milisegiundos)
        var start = new Date().getTime();
        while (new Date().getTime() - start < ms) { }
    };
    return Ruleta;
}(casino_1.Casino));
exports.Ruleta = Ruleta;
