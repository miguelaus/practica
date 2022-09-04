

//---------- Gestor de comandas de restaurante

function Pizza(version,precio,size) {
	this.version = version;
	this.precio = precio;
	this.size = size;
}

const pizzaCapresse = new Pizza("capresse", 500, "grande");
const pizzaMargarita = new Pizza("margarita", 500, "grande");
const pizzaPrimavera = new Pizza("primavera", 500, "grande");


function Pasta(version,precio,size) {
	this.version = version;
	this.precio = precio;
	this.size = size;
}

const pastaSpaghetti = new Pasta('spaghetti', 400, "grande");
const pastaRavioles = new Pasta('ravioles', 600, "grande");
const pastaMacarrones = new Pasta('macarrones', 450, "grande");

function Ensalada(version,precio,size) {
	this.version = version;
	this.precio = precio;
	this.size = size;
}

const ensaladaTomateLechuga = new Ensalada('tomateLechuga', 750, "mediana");
const ensaladaCesar = new Ensalada('cesar', 800, "mediana");
const ensaladaPapaHuevo = new Ensalada('papaHuevo', 800, "mediana");

function Carne(version,precio,size) {
	this.version = version;
	this.precio = precio;
	this.size = size;
}

const carneBife = new Carne('bife', 400, "mediano");
const carneHamburguesa = new Carne('hamburguesa', 600, "mediana");
const carneVacio = new Carne('vacio', 650, "mediano");
const carneChorizo = new Carne('chorizo', 400, "mediano");
const carneAsado = new Carne('asado', 600, "mediana");

function Trago(version,precio,size) {
	this.version = version;
	this.precio = precio;
	this.size = size;
}

const tragoVino = new Trago('vino', 400, "copa");
const tragoCerveza = new Trago('cerveza', 600, "pinta");
const tragoRefresco = new Trago('refresco', 650, "vaso");

function Postre(version,precio,size) {
	this.version = version;
	this.precio = precio;
	this.size = size;
}

const postreFlan = new Postre('flan', 400, "chico");
const postreFruta = new Postre('fruta', 600, "chico");
const postreHelado = new Postre('helado', 650, "chico");


function Cafe(version,precio,size) {
	this.version = version;
	this.precio = precio;
	this.size = size;
}

const cafeCafe = new Cafe('cafe', 300, "chico");
const cafeTe = new Cafe('te', 250, "chico");
const cafeCapuccino = new Cafe('capuccino', 350, "chico");

let arrayPizzas = [pizzaCapresse, pizzaMargarita, pizzaPrimavera] 
let arrayCarne = [carneBife, carneAsado, carneVacio, carneChorizo, carneHamburguesa] 
let arrayEnsadala = [ensaladaCesar, ensaladaPapaHuevo, ensaladaTomateLechuga] 
let arrayPasta = [pastaRavioles, pastaSpaghetti, pastaMacarrones]
let arrayTragos =  [cafeCapuccino, cafeTe, cafeCafe]
let arrayPostres = [postreFlan, postreFruta, postreHelado]

let opcion
let precioAcumulado = 0

function infoPrecio (){
	console.log(precioAcumulado)
}

function mostrarPizzas() {
	console.log("Estas son nuestras pizzas:");
    console.log(pizzaPrimavera);
    console.log(pizzaCapresse);
    console.log(pizzaMargarita);
  }


function mostrarPasta() {
	for (const pastaRavioles of arrayPasta);{
    console.log(pastaRavioles);
    console.log(pastaSpaghetti);
    console.log(pastaMacarrones);
  }
}

function mostrarEnsalada() {
	for (const ensaladaCesar of arrayEnsadala);{
    console.log(ensaladaCesar);
    console.log(ensaladaPapaHuevo);
    console.log(ensaladaTomateLechuga);
    
  }
}

function mostrarCarne() {
	for (const carneHamburguesa of arrayCarne);{
    console.log(carneHamburguesa);
    console.log(carneBife);
    console.log(carneAsado);
    console.log(carneVacio);
    console.log(carneChorizo);
  }
}


function mostrarTragos() {
	for (const tragoVino of arrayTragos);{
    console.log(tragoVino);
    console.log(tragoCerveza);
    console.log(tragoRefresco);
  }
}



function mostrarPostres() {
	for (const postreFlan of arrayPostres);{
    console.log(postreFlan);
    console.log(postreFruta);
    console.log(postreHelado);
  
  }
}



alert("Bienvenido a nuestro servicio de comidas online. ")

let nombreCalle = prompt("Ingrese su domicilio especificando solamente calle, ej: San Martin. ")

let numeracionCalle = parseInt(prompt("Ingrese por favor su numeracion sin puntos"))

let nombreCliente = prompt("Por favor ingrese su nombre completo de este modo: Juan Perez")

do{ opcion = prompt("Para conocer nuestros platos ingrese su opcion deseada: 1 - Pizzas , 2 - Pastas , 3 - Ensaladas , 4 - Carne , 5 - tragos , 6 - postres , 8 - salir ") 
	

	if( opcion == "1")  {mostrarPizzas(); infoPrecio();}

	else if( opcion == "2") {alert("Estas son nuestras pastas" + mostrarPasta()); infoPrecio()}
	
	else if( opcion == "3") {alert("Estas son nuestras ensaladas" + mostrarEnsalada()); infoPrecio()}
	
	else if( opcion == "4") {alert("Usted ha cargado una carnes" + mostrarCarne()); infoPrecio()}

	else if( opcion == "5") {alert("Usted ha cargado una tragos" + mostrarTragos()); infoPrecio()}
else if( opcion == "6") {alert("Usted ha cargado una postres" + mostrarPostres()); infoPrecio()}

    



    else if( opcion != "8") {alert("codigo inexistente")}


}while(opcion != "8")


alert("el precio total de la mesa " + nombreCalle + numeracionCalle + " es " + precioAcumulado + " pesos.")

document.write("el precio total de la mesa " + nombreCalle + numeracionCalle + " es " + precioAcumulado + " pesos.")