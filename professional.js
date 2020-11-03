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
    Professional.prototype.getName = function () {
        return this.name;
    };
    Professional.prototype.setName = function (name) {
        this.name = name;
    };
    Professional.prototype.getAge = function () {
        return this.age;
    };
    Professional.prototype.setAge = function (age) {
        this.age = age;
    };
    Professional.prototype.getGenere = function () {
        return this.genere;
    };
    Professional.prototype.setGenere = function (genere) {
        this.genere = genere;
    };
    Professional.prototype.getWeight = function () {
        return this.weight;
    };
    Professional.prototype.setWeight = function (weight) {
        this.weight = weight;
    };
    Professional.prototype.getHeight = function () {
        return this.height;
    };
    Professional.prototype.setHeight = function (height) {
        this.height = height;
    };
    Professional.prototype.getHairColor = function () {
        return this.hairColor;
    };
    Professional.prototype.setHairColor = function (hairColor) {
        this.hairColor = hairColor;
    };
    Professional.prototype.getEyeColor = function () {
        return this.eyeColor;
    };
    Professional.prototype.setEyeColor = function (eyeColor) {
        this.eyeColor = eyeColor;
    };
    Professional.prototype.getRace = function () {
        return this.race;
    };
    Professional.prototype.setRace = function (race) {
        this.race = race;
    };
    Professional.prototype.getIsRetired = function () {
        return this.isRetired;
    };
    Professional.prototype.setIsRetired = function (isRetired) {
        this.isRetired = isRetired;
    };
    Professional.prototype.getNationality = function () {
        return this.nationality;
    };
    Professional.prototype.setNationality = function (nationality) {
        this.nationality = nationality;
    };
    Professional.prototype.getOscarsNumber = function () {
        return this.oscarsNumber;
    };
    Professional.prototype.setOscarsNumber = function (oscarsNumber) {
        this.oscarsNumber = oscarsNumber;
    };
    Professional.prototype.getProfession = function () {
        return this.profession;
    };
    Professional.prototype.setProfession = function (profession) {
        this.profession = profession;
    };
    Professional.prototype.toString = function () {
        var txt1 = "Name: " + this.name +
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
            "\nProfession: " + this.profession + "\n";
        console.log(txt1);
    };
    return Professional;
}());
exports.Professional = Professional;
