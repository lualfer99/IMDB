"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genere, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.genere = genere;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.toString = function () {
        return "Name: " + this.name +
            "\nAge: " + this.age +
            "\nGenere: " + this.genere +
            "\nWeight: " + this.weight +
            "\nHeight: " + this.height +
            "\nHairColor: " + this.hairColor +
            "\nEyeColor: " + this.eyeColor +
            "\nRace: " + this.race +
            "\nIsRetired: " + this.isRetired +
            "\nNationality: " + this.nationality +
            "\nOscarsNumer: " + this.oscarsNumber +
            "\nProfession: " + this.profession + " ";
    };
    return Professional;
}());
exports.Professional = Professional;
