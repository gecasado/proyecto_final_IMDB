import { Professional } from "./professionals";

//-- Pruebas
let pro1:Professional = new Professional("Lola indigo",28,68,167,false,"Española",0,"Cantante");
let pro2:Professional = new Professional("Julia Roberts",55,73,175,false,"Estadounidense",1,"Actriz");
let pro3:Professional = new Professional("Robert Downey Jr.",58,80,174,false,"Estadounidense",0,"Actor");

console.log("-------professional1-------");
pro1.printAttributes();
console.log("-------professional2-------");
pro2.printAttributes();
console.log("-------professional3-------");
pro3.printAttributes();