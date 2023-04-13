import { Professional } from "./professionals";
import { Movie } from "./movie";

let pelicula:Movie = new Movie("Los Vengadores",2012,"Estadounidense","cine de superheroes, Ciencia Ficción, Acción");

pelicula.printAttributes();

let Robert:Professional = new Professional("Robert Downey Jr.",58,80,174,false,"Estadounidense",0,"Actor");
let chris:Professional = new Professional("Chris Evans",41,105,183,false,"Estadounidense",0,"Actor");
let scarlet:Professional = new Professional("Scarlett Johansson",38,55,160,false,"Estadounidense",0,"Actriz");
let samuel:Professional = new Professional("Samuel L. Jackson",74,83,189,false,"Estadounidense",1,"Actor");
let actors:Professional[] = [Robert,chris,scarlet,samuel];
pelicula.actors = actors;

let joss:Professional = new Professional("Joss Whedon",58,75,178,false,"Estadounidense",1,"Director");
pelicula.director = joss;
pelicula.writer = joss;
pelicula.language = "English";
pelicula.plataforma =  "Disney+";
pelicula.isMCU = true;
pelicula.mainCharacterName = "Iron Man";
pelicula.producer = "Kevin Feige";
pelicula.distributor = "Walt Disney Studios Motion Pictures";

pelicula.printAttributes();