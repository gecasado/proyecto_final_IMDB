import { Movie } from "./movie";

export class Imdb{

    peliculas: Movie[];

    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }
}