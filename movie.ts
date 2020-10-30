import { Professional } from "./professional"

export class Movie
{
    public title:string
    public releaseYear:number
    public actors:Professional[]
    public nationality:string
    public director:Professional
    public writer:Professional
    public language:string
    public platform:string
    public isMCU:boolean
    public mainCharacterName:string
    public producer:string
    public distributor:string
    public genre:string

    constructor (title:string, releaseYear:number, nationality:string, genre:string)
    {
        this.title = title
        this.releaseYear = releaseYear
        this.nationality = nationality
        this.genre = genre
    }

    public mostrarDatos():string
    {
        let a:string = "";
        for(let i=0;i<this.actors.length;i++){
            a += this.actors[i].name;
            
        }
        

                    return  "Tittle: " + this.title + 
                            "\nRelease year: " + this.releaseYear + 
                            "\nActors: " + this.actors+ 
                            "\nNationality: " + this.nationality + 
                            "\nDirector: " + this.director + 
                            "\nWriter: " + this.writer+ 
                            "\nLanguage: " + this.language + 
                            "\nPlatform: " + this.platform + 
                            "\nIs MCU?: " + this.isMCU + 
                            "\nMain character name: " + this.mainCharacterName + 
                            "\nProducer: " + this.producer + 
                            "\nDistributor: " + this.distributor + 
                            "\nGenere: " + this.genre;
        
    }
};