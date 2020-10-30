"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarNumbers, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarNumbers = oscarNumbers;
        this.profession = profession;
    }
    // public getName():string {
    //     return this.name;
    // }
    // public getAge():number {
    //     return this.age;
    // }
    // public getGenre():string {
    //     return this.genre;
    // }
    // public getWeight():number {
    //     return this.weight;
    // }
    // public getHeight():number {
    //     return this.height;
    // }
    // public getHairColor():string {
    //     return this.hairColor;
    // }
    // public getEyeColor():string {
    //     return this.eyeColor;
    // }
    // public getRace():string {
    //     return this.race;
    // }
    // public getIsRetired():boolean {
    //     return this.isRetired;
    // }
    // public getNationality():string {
    //     return this.nationality;
    // }
    // public getOscarNumbers():number {
    //     return this.oscarNumbers;
    // }
    // public getProfession():string {
    //     return this.profession;
    // }
    Professional.prototype.toString = function () {
        var texto = "Name: " + this.name + "\n" +
            "Age: " + this.age + "\n" +
            "Gender: " + this.genre + "\n" +
            "Weight: " + this.weight + "\n" +
            "Height: " + this.height + "\n" +
            "Hair Color: " + this.hairColor + "\n" +
            "Eye Color: " + this.eyeColor + "\n" +
            "Race: " + this.race + "\n" +
            "Is Retired?: " + this.isRetired + "\n";
        "Nationality: " + this.nationality + "\n";
        "Oscar Numbers: " + this.oscarNumbers + "\n";
        "Profession: " + this.profession + "\n";
        console.log(texto);
    };
    return Professional;
}());
exports.Professional = Professional;
