// Toggle sidebar menu
function toggleMenu() {
    var menu = document.querySelector(".sidebar");
    var icon = document.querySelector(".menu-icon");
    
    menu.classList.toggle("open");
    icon.classList.toggle("change");
}

// Endre fargen på teksten
var tekstEl = document.getElementById("tekst");
var fargeEl = document.getElementById("farge");
var knappEl = document.getElementById("endreFargeTekst");

fargeEl.addEventListener("change", function () {
    if (fargeEl.value) {
        tekstEl.style.color = fargeEl.value;
        fargeEl.value = "";
        console.log("det funker")
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

// Endre element basert på input
var elementInput = document.getElementById("elementInput");
var elementType = document.getElementById("elementType");
var endreElementBtn = document.getElementById("endreElementTekst");
var labelEl = document.querySelector("label[for='elementInput']");

endreElementBtn.addEventListener("click", function () {
    if (elementInput.value.trim() !== "") { 
        var nyttElement = document.createElement(elementType.value);
        nyttElement.textContent = elementInput.value;
        nyttElement.id = "dynamiskElement";

        labelEl.replaceWith(nyttElement);
        elementInput.value = "";
    } else {
        alert("Skriv inn noe tekst før du endrer elementet!");
    }
});
