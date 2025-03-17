//Endre Fargen på teksten
var tekstEl = document.getElementById("tekst")
var fargeEl = document.getElementById("farge")
var knappEl = document.getElementById("endreFarge")

knappEl.addEventListener("click", klikkefunkskjon)

function klikkefunkskjon(e){
    tekstEl.style.color = fargeEl.value;
    fargeEl.value = ""
}