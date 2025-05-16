"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("./cliente");
var Tragamonedas25_1 = require("./Tragamonedas25");
var Tragamonedas50_1 = require("./Tragamonedas50");
var Ruleta_1 = require("./Ruleta");
var Dados_1 = require("./Dados");
var readlineSync = require("readline-sync");
var fs = require("fs");
function leerInstrucciones(archivo) {
    try {
        var instrucciones = fs.readFileSync(archivo, "utf-8");
        console.log(instrucciones);
    }
    catch (error) {
        console.error("No se pudo leer el archivo ".concat(archivo, ". Verifica que existe y tiene permisos de lectura."));
    }
}
function recargarSaldo(cliente) {
    var monto = parseFloat(readlineSync.question("Cuanto saldo deseas recargar? Ingresa el monto: "));
    if (isNaN(monto) || monto <= 0) { // validacion del monto introducido 
        console.log("Monto inválido. No se recargó saldo.");
    }
    else {
        cliente.setSaldo(cliente.getSaldo() + monto);
        console.log("Saldo recargado. Saldo actual: ".concat(cliente.getSaldo()));
    }
}
function mostrarMenu(cliente) {
    console.log("\n=== Bienvenido al Casino ===");
    console.log("Saldo actual: ".concat(cliente.getSaldo()));
    console.log("1. Jugar a la Tragamonedas 25%");
    console.log("2. Jugar a la Tragamonedas 50%");
    console.log("3. Jugar a la Ruleta");
    console.log("4. Jugar a los Dados");
    console.log("5. Recargar saldo");
    console.log("6. Salir");
}
function main() {
    var nombre = readlineSync.question("Ingresa tu nombre: ");
    var saldoInicial = parseFloat(readlineSync.question("Ingresa tu saldo inicial: ")); //solicita el saldo inicial y se valida que sea un número positivo. Si no es válido, se asigna un saldo de 
    var cliente = new cliente_1.Cliente(nombre, isNaN(saldoInicial) || saldoInicial < 0 ? 0 : saldoInicial); // crea el nombre y el saldo inicil del cliente
    console.log("\u00A1Bienvenido ".concat(cliente.getNombre(), "! Saldo actual: ").concat(cliente.getSaldo())); // mensaje de bievenida con los datos del cliente
    // se crean instancias de los juegos y se vincula al cliente
    var tragamonedas25 = new Tragamonedas25_1.Tragamonedas25(cliente);
    var tragamonedas50 = new Tragamonedas50_1.Tragamonedas50(cliente);
    var ruleta = new Ruleta_1.Ruleta(cliente);
    var dados = new Dados_1.JuegoDeDados("Juego de Dados", 50, cliente);
    //bucle do-while mantiene al progama estable para que el usuario pueda usarlo hasta usar la opcion salirs
    var opcion;
    do {
        mostrarMenu(cliente); // se llama a esta funcion para mostrar el menu con los juegos y con los datos del cliente actulizados
        opcion = readlineSync.question("Selecciona una opcion: ");
        switch (opcion) {
            case "1": {
                leerInstrucciones("tragamonedas25.txt"); // lee las instrucciones del juego antes de poder jugar 
                var seguirJugando = true;
                do {
                    var apuesta = parseFloat(readlineSync.question("Ingresa el monto de tu apuesta: "));
                    console.log(tragamonedas25.realizarApuesta(apuesta));
                    if (cliente.getSaldo() <= 0) {
                        console.log("Te has quedado sin saldo.");
                        var deseaRecargar = readlineSync.question("Deseas recargar saldo? (si/no): ").toLowerCase();
                        if (deseaRecargar === "si") {
                            recargarSaldo(cliente);
                        }
                        else {
                            console.log("Gracias por jugar. Volviendo al menú principal.");
                            break;
                        }
                    }
                    var deseaSeguir = readlineSync.question("Quieres seguir jugando? (si/no): ").toLowerCase();
                    if (deseaSeguir !== "si") {
                        seguirJugando = false;
                    }
                } while (seguirJugando);
                break;
            }
            case "2": {
                leerInstrucciones("tragamonedas50.txt");
                var seguirJugando = true;
                do {
                    var apuesta = parseFloat(readlineSync.question("Ingresa el monto de tu apuesta: "));
                    console.log(tragamonedas50.realizarApuesta(apuesta));
                    if (cliente.getSaldo() <= 0) {
                        console.log("Te has quedado sin saldo.");
                        var deseaRecargar = readlineSync.question("Deseas recargar saldo? (si/no): ").toLowerCase();
                        if (deseaRecargar === "si") {
                            recargarSaldo(cliente);
                        }
                        else {
                            console.log("Gracias por jugar. Volviendo al menú principal.");
                            break;
                        }
                    }
                    var deseaSeguir = readlineSync.question("Quieres seguir jugando? (si/no): ").toLowerCase();
                    if (deseaSeguir !== "si") {
                        seguirJugando = false;
                    }
                } while (seguirJugando);
                break;
            }
            case "3": {
                leerInstrucciones("ruleta.txt");
                var seguirJugando = true;
                do {
                    var apuesta = parseFloat(readlineSync.question("Ingresa el monto de tu apuesta: "));
                    var numero = parseInt(readlineSync.question("Elige un numero entre 0 y 36: "));
                    console.log(ruleta.realizarApuesta(apuesta, numero));
                    if (cliente.getSaldo() <= 0) {
                        console.log("Te has quedado sin saldo.");
                        var deseaRecargar = readlineSync.question("Deseas recargar saldo? (si/no): ").toLowerCase();
                        if (deseaRecargar === "si") {
                            recargarSaldo(cliente);
                        }
                        else {
                            console.log("Gracias por jugar. Volviendo al menú principal.");
                            break;
                        }
                    }
                    var deseaSeguir = readlineSync.question("Quieres seguir jugando? (si/no): ").toLowerCase();
                    if (deseaSeguir !== "si") {
                        seguirJugando = false;
                    }
                } while (seguirJugando);
                break;
            }
            case "4": {
                leerInstrucciones("dados.txt");
                var seguirJugando = true;
                do {
                    var apuesta = parseFloat(readlineSync.question("Ingresa el monto de tu apuesta: "));
                    console.log(dados.realizarApuesta(apuesta));
                    if (cliente.getSaldo() <= 0) {
                        console.log("Te has quedado sin saldo.");
                        var deseaRecargar = readlineSync.question("Deseas recargar saldo? (si/no): ").toLowerCase();
                        if (deseaRecargar === "si") {
                            recargarSaldo(cliente);
                        }
                        else {
                            console.log("Gracias por jugar. Volviendo al menú principal.");
                            break;
                        }
                    }
                    var deseaSeguir = readlineSync.question("Quieres seguir jugando? (si/no): ").toLowerCase();
                    if (deseaSeguir !== "si") {
                        seguirJugando = false;
                    }
                } while (seguirJugando);
                break;
            }
            case "5": {
                recargarSaldo(cliente);
                break;
            }
            case "6": { // finaliza el bucle y muesta los datos del cliente con un mensaje final
                console.log("Gracias por jugar, ".concat(cliente.getNombre(), ". Saldo final: ").concat(cliente.getSaldo()));
                break;
            }
            default: { // en caso de que el usuario elija una opcion incorrecta
                console.log("Opción inválida. Por favor, elige una opción del menú.");
            }
        }
    } while (opcion !== "6");
}
main();
