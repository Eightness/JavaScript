function practica1() {
    var eleccion = parseInt(prompt("Ingrese el número del ejercicio:"));

    switch (eleccion) {
        //Ejercicio 1
        case 1:
            ejercicio1()
        break;

        //Ejercicio 2
        case 2:
            ejercicio2()
        break;

        //Ejercicio 3
        case 3:
            ejercicio3()
        break;

        //Ejercicio 4
        case 4:
            ejercicio4()
        break;

        //Ejercicio 5
        case 5:
            ejercicio5()
        break;

        //Ejercicio 6
        case 6:
            ejercicio6()
        break;

        //Ejercicio 7
        case 7:
            ejercicio7()
        break;

        //Ejercicio 8
        case 8:
            ejercicio8()
        break;

        //Ejercicio 9
        case 9:
            ejercicio9()
        break;

        //Ejercicio 10
        case 10:
            ejercicio10()
        break;

        //Ejercicio 11
        case 11:
            ejercicio11()
        break;

        //Ejercicio 12
        case 12:
            ejercicio12()
        break;

        //Caso por defecto
        default:
            document.write("Ejercicio inválido.")
        break;
    }
}

//EJERCICIO 1

//---------------------------------------------------------------------------

function ejercicio1() {
    var resultado;

    var entero1 = parseInt(prompt("Introduce un número entero positivo: "))
    var entero2 = parseInt(prompt("Introduce otro número entero positivo (distinto): "))
    var entero3 = parseInt(prompt("Introduce otro número entero positivo (distinto): "))

    if (entero1 > entero2 && entero1 > entero3) {
        resultado = entero1;
    } else if (entero2 > entero1 && entero2 > entero3) {
        resultado = entero2;
    } else {
        resultado = entero3;
    }

    document.write("El mayor valor de los tres números es: " + resultado);
}

//EJERCICIO 2

//---------------------------------------------------------------------------

function ejercicio2() {
    var num = parseInt(prompt("Introduce un número entero positivo: "))

    if (num % 2 == 0) {
        document.write("El número introducido es par.")
    } else {
        document.write("El número introducido es impar.")
    }
}

//EJERCICIO 3

//---------------------------------------------------------------------------

function ejercicio3() {
    var resultado = 0;

    for (let index = 1; index <= 100; index++) {
        resultado += index
    }

    document.write("La suma de los 100 primeros números naturales es: " + resultado);
}

//EJERCICIO 4

//---------------------------------------------------------------------------

function ejercicio4() {
    var numero = parseInt(prompt("Introduce un número entero positivo: "))
    var resultado = 0;

    for (let index = numero; index < (numero + 100); index++) {
        resultado += index 
    }

    document.write("La suma de los 100 números siguientes a " + numero + " es: " + resultado);
}

//EJERCICIO 5

//---------------------------------------------------------------------------

function ejercicio5() {
    var entero1 = parseInt(prompt("Introduce un número entero positivo: "))
    var entero2 = parseInt(prompt("Introduce un número entero positivo (distinto): "))
    var entero3 = parseInt(prompt("Introduce un número entero positivo (distinto): "))

    var mayor = Math.max(entero1, entero2, entero3)
    var menor = Math.min(entero1, entero2, entero3)

    document.write("Número mayor: " + mayor);
    document.write(" ");
    document.write("Número menor: " + menor);
}

//EJERCICIO 6

//---------------------------------------------------------------------------

function ejercicio6() {
    var numeros = [];
    var numero;
    
    do {
        numero = parseInt(prompt("Introduce un número positivo (número negativo para finalizar): "))
        
        if (numero >= 0) {
            numeros.push(numero);
        }

    } while (numero >= 0);
    
    if (numeros.length > 0) {
        var maximo = Math.max(...numeros);
        var minimo = Math.min(...numeros);
        
        document.write("El valor máximo es: " + maximo);
        document.write(" ");
        document.write("El valor mínimo es: " + minimo);
    } else {
        document.write("No se han introducido números positivos.");
    }    
}

//EJERCICIO 7

//---------------------------------------------------------------------------

function ejercicio7() {
    while (true) {
        var temperaturaFahrenheit = parseInt(prompt("Introduce la temperatura en grados Fahrenheit (999 para finalizar): "));
        
        if (temperaturaFahrenheit === 999) {
            document.write("Programa terminado.");
            break;
        }
        
        var temperaturaCelsius = (5 / 9) * (temperaturaFahrenheit - 32);
        
        document.write(temperaturaFahrenheit + "º Fahrenheit es igual a " + temperaturaCelsius + "º Celsius.");
    }
}

//EJERCICIO 8

//---------------------------------------------------------------------------

function ejercicio8() {
    var velocidadKmPorHora = parseFloat(prompt("Introduce la velocidad en kilómetros por hora: "));
    var segundos = parseInt(prompt("Introduce los segundos invertidos en el trayecto: "));

    var metrosRecorridos = (velocidadKmPorHora * 1000 * segundos) / 3600;

    document.write("El total de metros recorridos es: " + metrosRecorridos + " metros.");
}

//EJERCICIO 9

//---------------------------------------------------------------------------

function ejercicio9() {
    var monedaOrigen = prompt("Introduce la moneda de origen (€, $, £): ");
    var monedaDestino = prompt("Introduce la moneda de cambio (€, $, £): ");
    var cantidad = parseFloat(prompt("Introduce la cantidad a calcular:"));

    var tasaConversion = 0;

    //Obtener la tasa de conversión según las opciones dadas
    if (monedaOrigen === "€" && monedaDestino === "$") {
        tasaConversion = 1.11;
    } else if (monedaOrigen === "€" && monedaDestino === "£") {
        tasaConversion = 0.84;
    } else if (monedaOrigen === "$" && monedaDestino === "€") {
        tasaConversion = 0.9;
    } else if (monedaOrigen === "$" && monedaDestino === "£") {
        tasaConversion = 0.76;
    } else if (monedaOrigen === "£" && monedaDestino === "€") {
        tasaConversion = 1.19;
    } else if (monedaOrigen === "£" && monedaDestino === "$") {
        tasaConversion = 1.32;
    }

    //Realizar el cálculo de conversión
    var cantidadConvertida = cantidad * tasaConversion;

    //Mostrar el resultado
    document.write(cantidad + monedaOrigen + " equivale a " + cantidadConvertida + monedaDestino);
}

//EJERCICIO 10

//---------------------------------------------------------------------------

function ejercicio10() {
    var numeroA = parseInt(prompt("Introduce el valor de A: "));
    var numeroB = parseInt(prompt("Introduce el valor de B: "));
    var creciente = confirm("¿Mostrar en orden creciente? ");

    if (creciente) {
        for (var i = numeroA; i <= numeroB; i++) {
            document.writeln(i);
        }
    } else {
        for (var i = numeroA; i >= numeroB; i--) {
            document.writeln(i);
        }
    }
}

//EJERCICIO 11

//---------------------------------------------------------------------------

function ejercicio11() {
    for (var i = 50; i <= 100; i++) {
        if (i % 5 === 0) {
          document.write(i + " ");
        }
      }
}

//EJERCICIO 12

//---------------------------------------------------------------------------

function ejercicio12() {
    var x = parseInt(prompt("Introduce el valor de X: "));
    var a = parseInt(prompt("Introduce el valor de A: "));
    var b = parseInt(prompt("Introduce el valor de B: "));

    for (var i = a; i <= b; i++) {
        if (i % x === 0) {
            document.write(i + " ");
        }
    }
}

