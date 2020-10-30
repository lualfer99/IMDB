"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nationality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
    Movie.prototype.mostrarPeliculas = function () {
        var datos = "Title: " + this.title + "\n" +
            "Release Year: " + this.releaseYear + "\n" +
            "Actors: " + this.actors + "\n" +
            "Nationality: " + this.nationality + "\n" +
            "Director: " + this.director + "\n" +
            "Writer: " + this.writer + "\n" +
            "Language: " + this.language + "\n" +
            "Platform: " + this.plataform + "\n" +
            "Is MCU?: " + this.isMCU + "\n";
        "Main Character: " + this.mainCharacterName + "\n";
        "Producer: " + this.producer + "\n";
        "Distributor: " + this.distributor + "\n";
        "Genre: " + this.genre + "\n";
        console.log(datos);
    };
    return Movie;
}());
exports.Movie = Movie;
