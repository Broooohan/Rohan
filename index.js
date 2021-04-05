const tellYear = new Date().getFullYear();
console.log(tellYear);

document.querySelector("footer p").textContent = "Copyright © " + tellYear;