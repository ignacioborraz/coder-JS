alert('CONCESIONARIA DE AUTOS DE IGNACIO (presione F12 para abrir la consola por favor)');

let año = 0 //defino el año

//NaN = Not a Number
//isNAN = is Not a Number ==> pregunta si NO es un numero
//console.log(isNaN('hola')) //como NO es un numero, el método returna TRUE
//console.log(isNaN(20)) //como ES un numero, el método returna FALSE

function añoActual() { //defino la función
    año = prompt ('Ingrese el año vigente (forma "aaaa")'); //capturo el año por el usuario
    while ((isNaN(año)) || (año<2016) || (año>2026)) { //mientras el año no cumpla estas condiciones
        alert('el año '+año+' no es correcto'); //me va a tirar esta alerta
        año = parseInt (prompt ('Debe estar en forma "aaaa" por favor (por ejemplo 2020)')); //y luego preguntar nuevamente por el año
    }
}

//ejemplo para carrito
//let cantidad = prompt('ingrese cantidad')
//while ((isNaN(cantidad)) || (cantidad>0))

añoActual() //ejecuto la función

class Auto { //defini una clase para mi producto
    //la clase genera OBJETOS y métodos que SOLAMENTE se aplican a esta clase
    constructor(marca,color,año) {
        this.marca = marca,
        this.color = color,
        this.modelo = año,
        this.precio = parseInt(Math.random()*1000000) //Math.random genera un numero entre 0 y 1
    }
    mostrarModelo() { //metodo que muestra el modelo en consola SOLAMENTE PARA AUTO
        return ('Del modelo '+this.modelo+' tenemos de la marca '+this.marca+' en color '+this.color+' y el precio es: '+this.precio);
    }
    mostrarMarca() { //metodo que muestra la marca en consola SOLAMENTE PARA AUTO
        return ('De la marca '+this.marca+' tenemos el modelo '+this.modelo+' en color '+this.color+' y el precio es: '+this.precio);
    }
}

class Moto { //defini una clase para mi producto
    //la clase Moto NO TIENE ACCESO A LOS MÈTODOS DE mostrarModelo y mostrarMarca
    //ya que son EXCLUSIVOS de Auto
    constructor(marca,color,año) {
        this.marca = marca,
        this.color = color,
        this.modelo = año,
        this.precio = parseInt(Math.random()*1000000) //Math.random genera un numero entre 0 y 1
    }
    mostrarModelo() { //metodo que muestra el modelo en consola SOLAMENTE PARA AUTO Y MOTO
        return ('Del modelo '+this.modelo+' tenemos de la marca '+this.marca+' en color '+this.color+' y el precio es: '+this.precio);
    }
    //MOTO SOLO TIENE UN METODO
}

class Camion { //defini una clase para mi producto
    //la clase Moto NO TIENE ACCESO A LOS MÈTODOS DE mostrarModelo y mostrarMarca
    //ya que son EXCLUSIVOS de Auto
    constructor(marca,color,año) {
        this.marca = marca,
        this.color = color,
        this.modelo = año,
        this.precio = parseInt(Math.random()*1000000) //Math.random genera un numero entre 0 y 1
    }
    //CAMION SOLO GENERA OBJETO Y NO TIENE METODOS
}

let autos = [ //defino un ARRAY
    //'auto1','auto2','auto3', //puede contener strings, numeros, arrays, objetos, clases, etc
    //['auto1','auto2','auto3'],
    new Auto ('ford','gris',año), //se construye un nuevo AUTO en cada línea
    new Auto ('ford','azul',año-1), //le paso los parámetros en el orden correspondiente
    new Auto ('ford','negro',año-2),
    new Auto ('ford','blanco',año-3),
    new Auto ('fiat','blanco',año),
    new Auto ('fiat','azul',año-1),
    new Auto ('fiat','rojo',año-2),
    new Auto ('fiat','negro',año-3),
    new Auto ('honda','dorado',año),
    new Auto ('honda','blanco',año-1),
    new Auto ('honda','rojo',año-2),
    new Auto ('honda','negro',año-3),
    new Moto ('moto honda','negro azabache',año)
];

//console.log(autos)

function clasificacionModelo(año) { //defino una función que clasificará los autos por MODELO
    for (let auto of autos) { //PARA CADA AUTO DE TODOS LOS AUTOS
        //para cada elemento de todos los que hay en el array
        if (auto.modelo == año) { //si coincide el año del modelo con el año que el usuario ingresó
            auto.mostrarModelo(); //a la clase auto alojada en esa posición: le aplico el método
            console.log(auto)
        }
    
    }
}

let codigo = 0

function cod () {
    codigo = parseInt (prompt ('Ingrese el código correspondiente: 1-comprar un auto nuevo 2-comprar un auto usado 3-comprar un repuesto 0-salir'));
    switch (codigo) {
        case 1:
            clasificacionModelo(año);
            alert('En la consola te detallamos los autos nuevos disponibles. Presione 0 para salir de las instrucciones por favor');
            break;
        case 2:
            let nuevoCodigo = 0
            do {
                nuevoCodigo = prompt ('Ingrese el código correspondiente: A-MODELO '+(año-1)+' B-MODELO '+(año-2)+' C-MODELO '+(año-3));
                if ((nuevoCodigo == "A")||(nuevoCodigo == "a")) {
                    clasificacionModelo(año-1);
                } else if ((nuevoCodigo == "B")||(nuevoCodigo == "b")) {
                    clasificacionModelo(año-2);
                } else if ((nuevoCodigo == "C")||(nuevoCodigo == "c")) {
                    clasificacionModelo(año-3);
                }
            } while ((nuevoCodigo != "A")&&(nuevoCodigo != "a")&&(nuevoCodigo != "B")&&(nuevoCodigo != "b")&&(nuevoCodigo != "C")&&(nuevoCodigo != "c"))
            alert('En la consola te detallamos los autos disponibles de ese modelo. Presione 0 para salir de las instrucciones por favor');
            break;
        case 3:
            for (let i=0; i<10; i++) {
                console.log('repuesto: R-'+((10*i)+(1000-i))+'-A. Acercate a la sucursal para verlo!');
            }
            alert('En la consola te detallamos los repuestos que tenemos. Presione 0 para salir de las instrucciones por favor');
            break;
        default:
            break;
    }
}

do { //va a ejecutar al menos UNA VEZ
    cod(); // la función cod 
} while (codigo !=0); //mientras que codigo sea distinto de 0