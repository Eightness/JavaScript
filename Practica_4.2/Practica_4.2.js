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

<!DOCTYPE html>
<html>
<head>
  <title>Formulario</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    form {
      width: 65%;
      height: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }

    label {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    input[type="text"],
    textarea {
      width: 300px;
      height: 30px;
      padding: 5px;
    }

    select {
      width: 100px;
      height: 30px;
    }

    img {
      width: 100px;
      height: 100px;
    }
  </style>
</head>
<body>
  <form>
    <h1>Formulario</h1>

    <label>
      Selector:
      <select id="selector" onchange="selectPersona()">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </label>

    <label>
      Nombre:
      <input type="text" id="nombre" required>
    </label>

    <label>
      Email:
      <input type="text" id="email" required>
    </label>

    <label>
      Fecha de Nacimiento:
      <input type="text" id="fecha_nacimiento" required>
    </label>

    <label>
      Dirección:
      <textarea id="direccion" required></textarea>
    </label>

    <label>
      Imagen Inicial:
      <img id="imagen" src="" alt="Imagen inicial">
    </label>

    <input type="submit" value="Enviar">
  </form>

  <script>
    const json = {
      "personas": [
        {
          "nombre": "Persona 1",
          "email": "persona1@example.com",
          "fecha_nacimiento": "01/01/1990",
          "direccion": "Calle 1, Ciudad",
          "imagen": "imagen1.png"
        },
        {
          "nombre": "Persona 2",
          "email": "persona2@example.com",
          "fecha_nacimiento": "02/02/1991",
          "direccion": "Calle 2, Ciudad",
          "imagen": "imagen2.png"
        },
        {
          "nombre": "Persona 3",
          "email": "persona3@example.com",
          "fecha_nacimiento": "03/03/1992",
          "direccion": "Calle 3, Ciudad",
          "imagen": "imagen3.png"
        },
        // Agrega más personas aquí según sea necesario
      ]
    };

    function selectPersona() {
      const selector = document.getElementById("selector");
      const index = parseInt(selector.value);



