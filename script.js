// Endre Fargen på teksten
var tekstEl = document.getElementById("tekst");
var fargeEl = document.getElementById("farge");
var knappEl = document.getElementById("endreFargeTekst");

knappEl.addEventListener("click", function () {
    if (fargeEl.value) {
        tekstEl.style.color = fargeEl.value;
        fargeEl.value = "";
    } else {
        alert("Skriv inn en gyldig farge på engelsk.");
    }
});

// Endre bakgrunnsfarge
var radioButtons = document.querySelectorAll("input[name='fargeBG']");

radioButtons.forEach(function (radio) {
    radio.addEventListener("change", function () {
        document.body.style.backgroundColor = radio.value;
    });
});

