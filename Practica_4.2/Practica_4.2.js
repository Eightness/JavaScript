function practica2() {
    var eleccion = parseInt(prompt("Elige ejercicio:"))

    switch (eleccion) {

        //Ejercicio1
        case 1:
            ejercicio1()
        break;

        //Ejercicio2
        case 2:
            ejercicio2()
        break;

        //Ejercicio3
        case 3:
            ejercicio3()
        break;

        //Ejercicio4
        case 4:
            ejercicio4()
        break;

        //Ejercicio5
        case 5: 
            ejercicio5()
        break;

        //Ejercicio6
        case 6:
            ejercicio6()
        break;

        //Ejercicio7
        case 7:
            ejercicio7()
        break;

        //Ejercicio8
        case 8:
            ejercicio8()
        break;

        //Ejercicio9
        case 9:
            ejercicio9()
        break;

        //Ejercicio10
        case 10:
            ejercicio10()
        break;

        //Ejercicio11
        case 11:
            ejercicio11()
        break;

        //Ejercicio12
        case 12:
            ejercicio12()
        break;

        //Ejercicio13
        case 13:
            ejercicio13()
        break;

        //Ejercicio14
        case 14:
            ejercicio14()
        break;

        //Opción por defecto
        default:
            document.write("Ejercicio inválido.")
        break;

    }

}

//EJERCICIO 1

function ejercicio1() {
    // Definición del objeto Persona
    var Persona = {
        nombre: "",
        apellidos: "",
        edad: 0,
        padre: null,
        madre: null,
        hermanos: [],
        set_padre: function(nombrePadre) {
        this.padre = nombrePadre;
        },
        set_madre: function(nombreMadre) {
        this.madre = nombreMadre;
        },
        add_hermano: function(nombreHermano) {
        this.hermanos.push(nombreHermano);
        }
    };
    
    // Creación de la familia Stark
    var nedStark = Object.create(Persona);
    nedStark.nombre = "Ned";
    nedStark.apellidos = "Stark";
    nedStark.edad = 45;
    
    var catelynTully = Object.create(Persona);
    catelynTully.nombre = "Catelyn";
    catelynTully.apellidos = "Tully";
    catelynTully.edad = 42;
    
    var robStark = Object.create(Persona);
    robStark.nombre = "Rob";
    robStark.apellidos = "Stark";
    robStark.edad = 20;
    
    var jonSnow = Object.create(Persona);
    jonSnow.nombre = "Jon";
    jonSnow.apellidos = "Snow";
    jonSnow.edad = 18;
    
    var sansaStark = Object.create(Persona);
    sansaStark.nombre = "Sansa";
    sansaStark.apellidos = "Stark";
    sansaStark.edad = 16;
    
    nedStark.set_padre("Desconocido"); // No se conoce el nombre del padre
    nedStark.set_madre("Desconocida"); // No se conoce el nombre de la madre
    
    robStark.set_padre(nedStark.nombre);
    robStark.set_madre(catelynTully.nombre);
    
    jonSnow.set_padre(nedStark.nombre);
    jonSnow.set_madre(catelynTully.nombre);
    
    sansaStark.set_padre(nedStark.nombre);
    sansaStark.set_madre(catelynTully.nombre);
    
    robStark.add_hermano(jonSnow.nombre);
    robStark.add_hermano(sansaStark.nombre);
    
    jonSnow.add_hermano(robStark.nombre);
    jonSnow.add_hermano(sansaStark.nombre);
    
    sansaStark.add_hermano(robStark.nombre);
    sansaStark.add_hermano(jonSnow.nombre);
    
    // Recorriendo los hermanos de Jon Snow
    alert("Hermanos de Jon Snow:");
    jonSnow.hermanos.forEach(function(hermano) {
        alert(hermano);
    });
  
}

//---------------------------------------------------------

//EJERCICIO 2

function ejercicio2() {
    
}

//---------------------------------------------------------

//EJERCICIO 3

function ejercicio3() {
    
}

//---------------------------------------------------------

//EJERCICIO 4

function ejercicio4() {
    
}

//---------------------------------------------------------

//EJERCICIO 5

function ejercicio5() {
    
}

//---------------------------------------------------------

//EJERCICIO 6

function ejercicio6() {
    
}

//---------------------------------------------------------

//EJERCICIO 7

function ejercicio7() {
    
}

//---------------------------------------------------------

//EJERCICIO 8

function ejercicio8() {
    
}

//---------------------------------------------------------

//EJERCICIO 9

function ejercicio9() {
    
}

//---------------------------------------------------------

//EJERCICIO 10

function ejercicio10() {
    
}

//---------------------------------------------------------

//EJERCICIO 11

function ejercicio11() {
    
}

//---------------------------------------------------------

//EJERCICIO 12

function ejercicio12() {
    
}

//---------------------------------------------------------

//EJERCICIO 13

function ejercicio13() {
    
}

//---------------------------------------------------------

//EJERCICIO 14

function ejercicio14() {
    
}

//---------------------------------------------------------
