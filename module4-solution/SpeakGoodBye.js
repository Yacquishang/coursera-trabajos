// ¡NOTA! Los pasos en este archivo son básicamente idénticos a los que
// realizado en el archivo SpeakHello.js.

// PASO 6: Envuelva todo el contenido de SpeakGoodBye.js dentro de un IIFE
// Ver Clase 52, parte 2


// PASO 7: Cree un objeto, llamado 'byeSpeaker' al que adjuntará
// el método "hablar" y que expondrás al contexto global
// Ver Clase 52, parte 1
// var byeSpeaker =

// NO adjunte la variable speakWord al objeto 'byeSpeaker'.
(function(window) {
    var byeSpeaker = new Object();
    var speakword = "Good Bye "; 

    byeSpeaker.speak = function(name) {
    console.log(speakword + "" + name);
  };

     
// PASO 8: Vuelva a escribir la función 'hablar' de modo que se adjunte a la
// objeto byeSpeaker en lugar de ser una función independiente.
// Ver Clase 52, parte 2
// PASO 9: Exponer el objeto 'byeSpeaker' al alcance global. Nombralo
// 'byeSpeaker' también en el ámbito global.
// xxxx.xxxx = adiosOrador;
window.byeSpeaker = byeSpeaker;
})(window);