//literal templates
let nombre = "Karina";
let apellido = "Iannello";
//console.log(`Hola, mi nombre es : ${nombre} ${apellido}`);

// Actividad clase 5, Funciones


/* function test1(x,y) {
    return y -x
}

console.log(test1(10, 40)); */

/* function test2(x,y) {
    return x * 2
    console.log(x)
    return x / 2
}

console.log(test2(10)) */

// Pulgadas a centimestros 

function conversion(a){
    return a * 2.54;
}

//console.log(conversion(1));

function url(b) {
    return "http://www." + b + ".com";
}
//console.log(url("pepito"));

function admiracion(c) {
    return "¡" + c + "!";
}

//console.log(admiracion("La vida es bella"));

function edadPerro(d) {
    return d * 7;
}

//console.log(edadPerro(2));

function timeWork(e) {
    return e / 40;
}

//console.log(timeWork(250000));

function calculadorIMC(x, y){
    return x / (y * y);
}

//console.log(calculadorIMC(60, 1.70));

function mayuscula(d) {
    return d.toUpperCase();
}

//console.log(mayuscula("colombia y argentina"));

function tipoDe(e) {
    return typeof e;
}

//console.log(tipoDe(true));

function calcularCircunferencia(z){
    return 2 * Math.PI * z;
}

console.log(calcularCircunferencia(1));
