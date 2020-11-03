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
    Movie.prototype.mostrarDatos = function () {
        var a = "";
        for (var i = 0; i < this.actors.length; i++) {
            a += this.actors[i].name;
        }
        return "Tittle: " + this.title +
            "\nRelease year: " + this.releaseYear +
            "\nActors: " + a +
            "\nNationality: " + this.nationality +
            "\nDirector: " + this.director +
            "\nWriter: " + this.writer +
            "\nLanguage: " + this.language +
            "\nPlatform: " + this.platform +
            "\nIs MCU?: " + this.isMCU +
            "\nMain character name: " + this.mainCharacterName +
            "\nProducer: " + this.producer +
            "\nDistributor: " + this.distributor +
            "\nGenere: " + this.genre;
    };
    return Movie;
}());
exports.Movie = Movie;
;
