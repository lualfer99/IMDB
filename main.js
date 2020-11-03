"use strict";
exports.__esModule = true;
var professional_1 = require("./professional");
var movie_1 = require("./movie");
var imdb_1 = require("./imdb");
var fs = require("fs");
var readline = require('readline');
//PROFESSIONALS
var persona = new professional_1.Professional("Marcos", 28, "Masculino", 70, 167, "Negro", "Marrones", "Amarillo", false, "Española", 0, "Director");
var persona1 = new professional_1.Professional("Luis", 30, "Masculino", 76, 178, "Blanco", "Verdes", "Americano", true, "Peruana", 4, "Actor");
var persona2 = new professional_1.Professional("Javi", 54, "Masculino", 80, 170, "Rojo", "Azules", "Nativo Americano", false, "Argentina", 1, "Guinista");
var persona3 = new professional_1.Professional("Dani", 56, "Masculino", 88, 180, "Verde", "Grises", "Negro", false, "Española", 2, "Actor");
var persona4 = new professional_1.Professional("Ivan", 43, "Masculino", 90, 175, "Negro", "Negros", "Caucasico", true, "Colombiana", 0, "Actor");
var persona5 = new professional_1.Professional("Urik", 38, "Masculino", 67, 169, "Rubio", "Ambar", "Chino", true, "China", 0, "Actor");
var persona6 = new professional_1.Professional("Jesus", 31, "Masculino", 85, 190, "Gris", "Marrones", "Malayo", false, "Venezolana", 2, "Actor");
var persona7 = new professional_1.Professional("Jorge", 45, "Masculino", 72, 186, "Negro", "Rojos", "Etiopico", true, "Española", 0, "Guinista");
var persona8 = new professional_1.Professional("Jose", 46, "Masculino", 79, 188, "Pelirojo", "Negros", "Blanco", false, "Española", 2, "Director");
var persona9 = new professional_1.Professional("Juan", 47, "Masculino", 82, 179, "Castaño", "Marrones", "Mongolico", false, "Chilena", 1, "Actor");
//TODOS LOS PROFESSIONALS EN UN ARRAY
var personaTotal = [persona, persona1, persona2, persona3, persona4, persona5, persona6, persona7, persona8, persona9];
//LLAMAR A TODAS LAS PERSONAS 
// console.log(personaTotal.toString())
//MOOVIES
var moovie1 = new movie_1.Movie("El Practicante", 2020, "Española", "Thriller");
var moovie2 = new movie_1.Movie("Hocus Pocus", 1993, "Estados Unidos", "Fantasia");
var moovie3 = new movie_1.Movie("Los Simpson", 2007, "Canada", "Comedia");
var moovie4 = new movie_1.Movie("Libranos del Mal", 2014, "Estados Unidos", "Thriller");
//TODAS LAS MOOVIES EN UN ARRAY
var moovieTotal = [moovie1, moovie2, moovie3, moovie4];
var prueba = new imdb_1.Imdb(moovieTotal);
var actores1 = [persona1.name, persona3.name];
var actores2 = [persona4.name, persona5.name];
var actores3 = [persona1.name, persona6.name];
//Actores , 1,3,4,5,6
//Directores, 0,8
//GUINISTAS, 2,7
//RELLENAR DATOS DE MOOVIE 1
moovie1.actors = [persona1];
moovie1.director = persona;
moovie1.writer = persona7;
moovie1.language = "Spanish";
moovie1.platform = "Netflix";
moovie1.isMCU = false;
moovie1.mainCharacterName = "Angel";
moovie1.producer = "Carles Torras";
moovie1.distributor = "Netflix";
//RELLENAR DATOS DE MOOVIE 2
moovie2.actors = [persona3, persona4];
moovie2.director = persona;
moovie2.writer = persona2;
moovie2.language = "English";
moovie2.platform = "Netflix";
moovie2.isMCU = false;
moovie2.mainCharacterName = "Bette Midler";
moovie2.producer = "David Kirschner";
moovie2.distributor = "Netflix";
//RELLENAR DATOS DE MOOVIE 3
moovie3.actors = [persona5, persona6];
moovie3.director = persona;
moovie3.writer = persona7;
moovie3.language = "English";
moovie3.platform = "Disney Plus";
moovie3.isMCU = false;
moovie3.mainCharacterName = "Homer";
moovie3.producer = "Gracie Films";
moovie3.distributor = "Disney";
//RELLENAR DATOS DE MOOVIE 4
moovie4.actors = [persona3, persona6];
moovie4.director = persona;
moovie4.writer = persona2;
moovie4.language = "English";
moovie4.platform = "Netflix";
moovie4.isMCU = false;
moovie4.mainCharacterName = "Eric Bana";
moovie4.producer = "Screen Gems";
moovie4.distributor = "Netflix";
// console.log(moovie1.mostrarDatos())
// let myJson = JSON.stringify(prueba)
// fs.writeFile("imdbBBDD.json", myJson, function(err, result) {
//     if(err) {console.log("error", err)}
//     else{console.log("Archivo creado papi")};
// })
// fs.writeFileSync("imdbBBDD.json", myJson);
// Read & Parse
// let readIMDB = fs.readFileSync("imdbBBDD.json", { encoding: 'utf-8', flag: 'r' })
// let readParseIMBD = JSON.parse(readIMDB)
// console.log(readParseIMBD)
// prueba.escribirEnFicheroJSON("imdbBBDD.json");
// let object:Imdb = prueba.obtenerInstanciaIMDB("imdbBBDD.json");
// object.obtenerInstanciaIMDB("imdbBBDD.json");
// console.log(object.films[1].title);
// prueba.escribirEnFicheroJSON("hola2.json")
// Guardar en fichero JSON
// let title = rl.question("Which is the movie title? ");
// let releaseYear = rl.question("When did the movie came out? ")
// let nationality = rl.question("Which is the country of origin? ")
// let genre = rl.question("Which is the movie genre? ")
// let movieRL: Movie = new Movie(title, releaseYear, nationality, genre)
// let newMovie: Imdb = new Imdb([movieRL])
//console.log(newMovie)
// newMovie.escribirEnFicheroJSON("imbdBBDD.JSON")
console.log(prueba.obtenerInstanciaIMDB("imdbBBDD.json"));
