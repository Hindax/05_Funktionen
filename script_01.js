"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

//Funktionsrumpf (body) callee

// function test();

//     console.log("Hallo Sabine!");
// }


// Funktionsaufruf (call)
// 
/** Funktionen 02a */
// 2a. Parametrisierung + Datenübergabe von Innen

function ausgabeNamenParam(firstName) {

}

// function ausgabeNamenParam(firstName) {
//     console.log("Hallo " + firstName + "!");


ausgabeNamenParams("Hinda" , "Whatever");
ausgabeNamenParams(prompt("Vorname?"), prompt("Nachname?"));
// Argumente sind Daten für Parameter

// console.log(firstName); // Fehler : Scope!
 // Funktionen 02c


//  function ausgabeNamenParams("Hinda"); //Argument

 function ausgabeNamenParams(firstName, familyName) // parameter
 {
    console.log("Hallo " + firstName + " " + familyName + "!");
 }


