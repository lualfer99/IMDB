import {Professional} from "./imbd";

let persona:Professional = new Professional("Marcos", 28, "Masculino", 70, 167, "Negro", "Marrones", "Amarillo", false, "Española", 0, "Juez");
let persona1:Professional = new Professional("Luis", 30, "Masculino", 76, 178, "Blanco", "Verdes", "Americano", true, "Peruana", 4, "Abogado");
let persona2:Professional = new Professional("Javi", 54, "Masculino", 80, 170, "Rojo", "Azules", "Nativo Americano", false, "Argentina", 1, "Enfermero");
let persona3:Professional = new Professional("Dani", 56, "Masculino", 88, 180, "Verde", "Grises", "Negro", false, "Española", 2, "Doctor");
let persona4:Professional = new Professional("Ivan", 43, "Masculino", 90, 175, "Negro", "Negros", "Caucasico", true, "Colombiana", 0, "Perito");
let persona5:Professional = new Professional("Urik", 38, "Masculino", 67, 169, "Rubio", "Ambar", "Chino", true, "China", 0, "Policia");
let persona6:Professional = new Professional("Jesus", 31, "Masculino", 85, 190, "Gris", "Marrones", "Malayo", false, "Venezolana", 2, "Militar");
let persona7:Professional = new Professional("Jorge", 45, "Masculino", 72, 186, "Negro", "Rojos", "Etiopico", true, "Española", 0, "Odontologo");
let persona8:Professional = new Professional("Jose", 46, "Masculino", 79, 188, "Pelirojo", "Negros", "Blanco", false, "Española", 2, "Profesor");
let persona9:Professional = new Professional("Juan", 47, "Masculino", 82, 179, "Castaño", "Marrones", "Mongolico", false, "Chilena", 1, "Contador");

let personaTotal:Professional[] = [persona, persona1, persona2, persona3, persona4, persona5, persona6, persona7, persona8, persona9];

console.log(personaTotal.toString())
