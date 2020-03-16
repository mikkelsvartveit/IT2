function bestill() {
    var fornavn = document.querySelector("#fornavn").value;
    var etternavn = document.querySelector("#etternavn").value;
    var postnummer = document.querySelector("#postnummer").value;
    var epost = document.querySelector("#epost").value;
    var passord1 = document.querySelector("#passord1").value;
    var passord2 = document.querySelector("#passord2").value;

    if (passord1 === passord2) {
        if (fornavn && etternavn && postnummer && epost && passord1 && passord2) {
            var formEl = document.querySelector(".form");
            var bekreftelse = document.querySelector(".bekreftelse");
            var fornavnText = document.querySelector("#fornavn-text");
            var epostText = document.querySelector("#epost-text");

            fornavnText.innerHTML = fornavn;
            epostText.innerHTML = epost;

            formEl.style.display = "none";
            bekreftelse.style.display = "block";
        }
        else {
            alert("Fyll ut alle feltene!");
        }
    }
    else {
        alert("Passordene samsvarer ikke! Sjekk at de er like og prøv på nytt.");
    }
}