import { Professional } from "./professionals";
import { Movie } from "./movie";
import { Imdb } from "./imdb";
import { pelicula } from "./testMovies";

let pelicula2:Movie = new Movie("Los angeles de charlie",2000,"estadounidense","Accion, Comedia");
pelicula2.actors = [
    new Professional("Luci Liu",54,60,160,false,"Estadounidense",0,"Actriz"),
    new Professional("Cameron Diaz",50,56,174,false,"Estadounidense",0,"Actriz"),
    new Professional("Drew Barrymore",48,57,163,false,"American",0,"Actriz")
]
pelicula2.director = new Professional("Joseph McGinty Nichol",54,84,188,false,"Estadounidense",0,"Director");
pelicula2.writer = new Professional("Ryan Rowe",65,75,185,false,"American",0,"Escritor");
pelicula2.language = "English";
pelicula2.plataforma = "Netflix";
pelicula2.isMCU = false;
pelicula2.mainCharacterName = "Charlie";
pelicula2.producer = "Drew Barrymore";
pelicula2.distributor = "Universal Studio";

let peliculas:Movie[] = [pelicula,pelicula2];
let imdb:Imdb = new Imdb(peliculas);
console.log(imdb);

export {pelicula};