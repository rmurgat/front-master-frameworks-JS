
class Coche {
    constructor(modelo, velocidad, antiguedad) {
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }
    aumentarVelocidad() {
        this.velocidad += 1;
    }
    reducirVelocidad() {
        this.velocidad -=1;
    }
    toString() {
        return "Coche [modelo:"+this.modelo+",velocidad:"+this.velocidad+",antiguedad:"+this.antiguedad+"]";
    }
}

class Autobus extends Coche {
    constructor(modelo, velocidad, antiguedad) {
        super(modelo, velocidad, antiguedad);
        this.altura = 5;
    }
    toString() {
        return super.toString()+"+Autobus [altura:"+this.altura+"]";
    }
}

var coche1 = new Coche('BMW Z3',100,2017);
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
var coche2 = new Coche('Nissan Leaf',200,2018);
var coche3 = new Coche('Land Rover Defender',300,2015);
var coche4 = new Coche('Renault',50,2015);
var autobus1 = new Autobus("PEGASUS", 70, 2020);

var datos = document.getElementById("datos")
datos.innerHTML = coche1+ "<br>";
datos.innerHTML += coche2+ "<br>";
datos.innerHTML += coche3+ "<br>";
datos.innerHTML += coche4+ "<br>";
datos.innerHTML += autobus1+ "<br>";