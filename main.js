"use strict";
exports.__esModule = true;
var imbd_1 = require("./imbd");
var persona = new imbd_1.Professional("Marcos", 28, "Masculino", 70, 167, "Negro", "Marrones", "Amarillo", false, "Española", 0, "Juez");
var persona1 = new imbd_1.Professional("Luis", 30, "Masculino", 76, 178, "Blanco", "Verdes", "Americano", false, "Española", 0, "Abogado");
var persona2 = new imbd_1.Professional("Javi", 54, "Masculino", 80, 170, "Rojo", "Azules", "Nativo Americano", false, "Española", 0, "Enfermero");
var persona3 = new imbd_1.Professional("Dani", 56, "Masculino", 88, 180, "Verde", "Grises", "Negro", false, "Española", 0, "Doctor");
var persona4 = new imbd_1.Professional("Ivan", 43, "Masculino", 90, 175, "Negro", "Negros", "Caucasico", false, "Española", 0, "Perito");
var persona5 = new imbd_1.Professional("Urik", 38, "Masculino", 67, 169, "Rubio", "Ambar", "Chino", false, "Española", 0, "Policia");
var persona6 = new imbd_1.Professional("Jesus", 31, "Masculino", 85, 190, "Gris", "Marrones", "Malayo", false, "Española", 0, "Militar");
var persona7 = new imbd_1.Professional("Jorge", 45, "Masculino", 72, 186, "Negro", "Rojos", "Etiopico", false, "Española", 0, "Odontologo");
var persona8 = new imbd_1.Professional("Jose", 46, "Masculino", 79, 188, "Pelirojo", "Negros", "Blanco", false, "Española", 0, "Profesor");
var persona9 = new imbd_1.Professional("Juan", 47, "Masculino", 82, 179, "Castaño", "Marrones", "Mongolico", false, "Española", 0, "Contador");
var personaTotal = [persona, persona1, persona2, persona3, persona4, persona5, persona6, persona7, persona8, persona9];
console.log(personaTotal.toString());
