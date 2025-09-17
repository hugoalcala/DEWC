import { heroes as listaHeroes  } from "./Heroes.js";

export const filtrarPorPlaneta = planeta => listaHeroes.filter(heroes => heroes.planeta ===planeta);

export const aumentarNivel = lista =>lista.map(heroes =>({...Heroes, nivel :heroes.nivel +1}));

 export const poderTotal = lista => lista.reduce((acc, heroes) => acc+ heroes.poder, 0);


