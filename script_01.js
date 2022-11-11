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

// function ausgabeNamenParam(firstName) {

//}

// function ausgabeNamenParam(firstName) {
//     console.log("Hallo " + firstName + "!");


// ausgabeNamenParams("Hinda" , "Whatever");
// ausgabeNamenParams(prompt("Vorname?"), prompt("Nachname?"));
// Argumente sind Daten für Parameter

// console.log(firstName); // Fehler : Scope!
 // Funktionen 02c


//  function ausgabeNamenParams("Hinda"); //Argument

//  function ausgabeNamenParams(firstName, familyName) // parameter
//  {
//     console.log("Hallo " + firstName + " " + familyName + "!");
//  }


 // Funktionen 03 a
// 03a Vorbereitung
// Postulat one function = one job (uncle Bob)
// SRP Single responsibility principle


// ausgabeNamenParams("Hinda2" , "Whatever2"); // Argumente

// function ausgabeNamenParam2(firstName, familyName) // Parameter
// {

//     //1. Funktionalität: Srtring composing
//     const gap = " ";
//     const outputStr = "Hallo " + firstName + gap + familyName + "!";

//     //2. Funktionalität: string output

//     console.log(outputStr);
// }



/** Funktionen 03b */
// Trennen der Funktionalitäten , return

//1.Funktionalität: String composing

let x = getString("test1", "test2");
function getString(firstName,familyName) {
    const gap = " ";
    const outputStr = "Hallo " + firstName + gap + familyName + "!";
    return outputStr;
}
console.log(x);




// console.log(outputStr);

// output("test"); // Call

//function output(outputData) { // wrappeer
 //   console.log(outputData);
//}


