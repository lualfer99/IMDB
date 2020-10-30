"use strict";
exports.__esModule = true;
var profesional_1 = require("./profesional");
var movie_1 = require("./movie");
var imdb_1 = require("./imdb");
var actor1 = new profesional_1.Professional("Steve Carrel", 58, "Man", 75, 1.75, "Brown", "Green", "White", false, "American", 0, "Actor");
var actor2 = new profesional_1.Professional("Ryan Gosling", 39, "Man", 80, 1.84, "Blond", "Green", "White", false, "American", 0, "Actor");
var actor3 = new profesional_1.Professional("Brad Pitt", 55, "Man", 80, 1.84, "Blond", "Blue", "White", false, "American", 2, "Actor");
var actor4 = new profesional_1.Professional("Joaquin Phoenix", 46, "Man", 71, 1.73, "Brown", "Green", "White", false, "American", 1, "Actor");
var actor5 = new profesional_1.Professional("John Legend", 41, "Man", 65, 1.75, "Brown", "Brown", "Black", false, "American", 1, "Musician");
var actriz1 = new profesional_1.Professional("Emma Stone", 31, "Woman", 55, 1.68, "Red", "Blue", "White", false, "American", 1, "Actress");
var actriz2 = new profesional_1.Professional("Scarlett Johannsson", 35, "Woman", 56, 1.60, "Blond", "Green", "White", false, "American", 1, "Actress");
var actriz3 = new profesional_1.Professional("Rooney Mara", 35, "Woman", 54, 1.65, "Brown", "Green", "White", false, "American", 0, "Actress");
var castBigShort = [actor1.name, actriz2.name, actor3.name];
var castHer = [actor4.name, actriz2.name, actriz3.name];
var castLaLa = [actor2.name, actriz1.name, actor5.name];
// "The Big Short" Movie
var movie1 = new movie_1.Movie("The Big Short", 2015, "EEUU", "Based on Real Events");
movie1.actors = castBigShort;
movie1.director = "Adam McKay";
movie1.writer = "Adam McKay";
movie1.language = "English";
movie1.plataform = "Netflix";
movie1.isMCU = false;
movie1.mostrarPeliculas();
console.log("---------------");
// "Her" movie.
var movie2 = new movie_1.Movie("Her", 2013, "EEUU", "Romance");
movie2.actors = castHer;
movie2.director = "Spike Jonze";
movie2.writer = "Spike Jonze";
movie2.language = "English";
movie2.plataform = "HBO";
movie2.isMCU = false;
movie2.mostrarPeliculas();
console.log("---------------");
// "La la land" Movie.
var movie3 = new movie_1.Movie("La la land", 2016, "EEUU", "Musical");
movie3.actors = castLaLa;
movie3.director = "Damien Chazelle";
movie3.writer = "Damien Chazelle";
movie3.language = "English";
movie3.plataform = "Amazon Prime";
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
console.log("---------------");
//Crear un objeto de la clase Imdb y probarla en consola.
var totalMovies = [movie1, movie2, movie3];
var cinesa = new imdb_1.Imdb(totalMovies);
for (var index = 0; index < cinesa.films.length; index++) {
    cinesa.films[index].mostrarPeliculas();
}
