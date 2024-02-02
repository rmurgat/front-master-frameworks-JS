var nombre="Ruben Murga";
var altura=172;

/* COMMENTED 1 - Escribir usand innerHTML
var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML=`
<h1>Soy la caja de datos</h1>
<h2>Mi nombre es: ${nombre}</h2>
<h3>Mido: ${altura} cm`;

if(altura>=180){
    datos.innerHTML+=`<h1>Eres una persona alta</h2>`;
} else {
    datos.innerHTML+=`<h1>Eres una persona bajita</h2>`;
}

for(var i=2000; i<=2020; i++) {
    datos.innerHTML += `<h3>Estamos en el año ${i}</h3>`;
}*/

/* COMMENTED 2 - Usando funciones
function muestraNombre(nombre, altura) {
    return misdatos=`
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm`;
}

function imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML= muestraNombre('Ruben Murga Tapia',186);
}
function showArray(nombres) {
    document.write(`<h1>Listado de Nombres</h1>`);
    for(var i=0; i<nombres.length; i++) {
        document.write(nombres[i]+", ");
    }
} 

imprimir();

var nombres = ['Victor','Antonio','Joaquin'];
//showArray(nombres);
nombres.forEach((nombre) => {
    document.write(nombre+', <br/>');
}); */

/* COMMENTED 3 - Objetos JSON
var coche = {
    modelo: "Mercedes Clase A",
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad);
    },
    propiedad1: "valor aleatorio"
}
document.write("<h1>"+coche.antiguedad+"</h1>");
coche.mostrarDatos();
console.log(coche);
*/

/* COMMENTED 4  - PROMESAS
var saludar = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let saludo = "Hola, todo bien";
        saludo=false;
        if(saludo) {
            resolve(saludo);
        }else{
            reject('Hay un error de comunicación');
        }
    }, 2000);
});

var datos = document.getElementById("datos")
saludar.then(resultado=>{
    datos.innerHTML=resultado;
})
.catch(err=>{
    datos.innerHTML=err;
}) */