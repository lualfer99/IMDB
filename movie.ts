import { Professional } from "./profesional";

export class Movie {
    public title:string;
    public releaseYear:number;
    public actors:string[];
    public nationality:string;
    public director:string;
    public writer:string;
    public language:string;
    public plataform:string;
    public isMCU:boolean;
    public mainCharacterName:string;
    public producer:string;
    public distributor:string;
    public genre:string;

    constructor (title:string, releaseYear:number, nationality:string, genre:string) {
        this.title = title;
        this.releaseYear = releaseYear;   
        this.nationality = nationality;
        this.genre = genre;
    }
    public mostrarPeliculas() {
        var datos = 
        "Title: " + this.title + "\n" + 
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
    }
}