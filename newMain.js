"use strict";
exports.__esModule = true;
var imdb_1 = require("./imdb");
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var text = "";
// rl.question("Introduce tittle: ", (tittle1:string) => {
//   rl.question("Introduce release year: ", (release1:number) => {
//     rl.question("Introduce nationality: ", (nationality1:string) => {
//       rl.question("Introduce genre: ", (genre1:string) => {
//         let newFilm : Movie = new Movie(tittle1, release1, nationality1, genre1)
//         let myImdb: Imdb = new Imdb([])
//         myImdb = myImdb.obtenerInstanciaIMDB("imdbBBDD.json")
//         myImdb.films.push(newFilm);
//         myImdb.escribirEnFicheroJSON("imdbBBDD.json")
//         rl.close();
//       })
//     })
//   })
// });
rl.question("What movie do you want to see? ", function (answer1) {
    var numero = 0;
    numero = answer1;
    var myImdb = new imdb_1.Imdb([]);
    console.log(myImdb.films[2]);
    myImdb = myImdb.obtenerInstanciaIMDB("imdbBBDD.json");
    console.log(myImdb.films[2]);
    rl.close();
});
