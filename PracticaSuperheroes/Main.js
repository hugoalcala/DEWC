import { heroes as listaHeroes} from "./Heroes.js";
import * as op from "./Operaciones.js"

console.log(op.filtrarPorPlaneta("Luna", listaHeroes));
console.log(op.aumentarNivel(listaHeroes));
console.log(op.poderTotal(listaHeroes));

