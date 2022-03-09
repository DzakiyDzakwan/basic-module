// DOM merupakan singkatan dari Document Object Model.
// Artinya, dokumen (HTML) yang dimodelkan dalam sebuah objek.
// DOM (Document Object Model) adalah interface yang memungkinkan
// developer untuk memanipulasi konten, struktur, dan style situs web.

// Secara umum DOM
// Get Element
document.getElementById("id");
document.getElementsByClassName("class");
document.getElementsByTagName("p");
document.getElementsByName("hello");

// Create Element
document.createElement("div");
document.createElement("button");

// Modifikasi Element / styling element
document.getElementById("id").innerHTML = "Digidev Indo";
document.getElementById("id").classList += " button";
document.getElementById("id").style.color = "red";

// Event Listener
document.getElementById("button").addEventListener("click", () => {
  // do something
});
