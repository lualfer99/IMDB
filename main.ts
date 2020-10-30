import { Professional } from "./profesional";
import { Movie } from "./movie";

let actor1:Professional = new Professional("Steve Carrel", 58, "Man", 75, 1.75, "Brown", "Green", "White", false, "American", 0, "Actor");
let actor2:Professional = new Professional("Ryan Gosling", 39, "Man", 80, 1.84, "Blond", "Green", "White", false, "American", 0, "Actor");
let actor3:Professional = new Professional("Brad Pitt", 55, "Man", 80, 1.84, "Blond", "Blue", "White", false, "American", 2, "Actor");
let actor4:Professional = new Professional("Joaquin Phoenix", 46, "Man", 71, 1.73, "Brown", "Green", "White", false, "American", 1, "Actor");
let actor5:Professional = new Professional("John Legend", 41, "Man", 65, 1.75, "Brown", "Brown", "Black", false, "American", 1, "Musician");
let actriz1:Professional = new Professional("Emma Stone", 31, "Woman", 55, 1.68, "Red", "Blue", "White", false, "American", 1, "Actress");
let actriz2:Professional = new Professional("Scarlett Johannsson", 35, "Woman", 56, 1.60, "Brown", "Green", "White", false, "American", 1, "Actress");

let cast1 = [actor1.name, actriz2.name, actor3.name];
let cast2 = [actor4.name, actriz2.name];
let cast3 = [actor2.name, actriz1.name, actor5.name];

// The Big Short Movie

let movie1:Movie = new Movie("The Big Short", 2015, "EEUU", "Based on Real Events");

movie1.actors = cast1;
movie1.director = "Adam McKay";
movie1.writer = "Adam McKay";
movie1.language = "English";
movie1.plataform ="Netflix";
movie1.isMCU = false;
movie1.mostrarPeliculas();
console.log("---------------");

// Her movie.

let movie2:Movie = new Movie("Her", 2013, "EEUU", "Romance");

movie2.actors = cast2;
movie2.director = "Spike Jonze";
movie2.writer = "Spike Jonze";
movie2.language = "English";
movie2.plataform ="HBO";
movie2.isMCU = false;
movie2.mostrarPeliculas();
console.log("---------------");

// La la land Movie.

let movie3:Movie = new Movie("La la land", 2016, "EEUU", "Musical");

movie3.actors = cast3;
movie3.director = "Damien Chazelle";
movie3.writer = "Damien Chazelle";
movie3.language = "English";
movie3.plataform ="Amazon Prime";
movie3.isMCU = false;
movie3.mostrarPeliculas();
console.log("---------------");

// Mostrar por consola los atributos de la clase Professional.

actor1.toString();
console.log("---------------");
actor2.toString();
console.log("---------------");
actor3.toString();
console.log("---------------");
actor4.toString();




