import { Professional } from "./profesional";
import { Movie } from "./movie";

export class Imdb {
    public films:Movie[];

    constructor (films:Movie[]) {
        this.films = films; 
    }
}