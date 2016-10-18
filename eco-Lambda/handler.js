'use strict';

module.exports.handler = function(event, context, cb) {

    console.log(event.title, event.points);
    return event.title;

    //1er paso  que la lambda regrese UNA, no importa que sea la misma, recomendacion cada vez que se llame
    //2do paso hacer un arreglo de recomendaciones y que la lambda elija una al azar y la regrese


   //var recomendaciones = ["No tires tanta agua","No uses el carro cuando recorras distancias cortas"];
   //console.log(recomendaciones[0]);
   //return recomendaciones[0];


};
