// Utøverne lagres som objekter i en array
var utovere = [
    {
        fornavn: "Albus",
        etternavn: "Nilsen",
        fodselsaar: 2004,
        ovelser: ["Spydkast", "Sleggekast"]
    },
    {
        fornavn: "Kylo",
        etternavn: "Pettersen",
        fodselsaar: 2006,
        ovelser: ["100 m", "Sleggekast"]
    },
    {
        fornavn: "Elsa",
        etternavn: "Frost",
        fodselsaar: 2006,
        ovelser: ["100 m", "Sleggekast"]
    }
];

// Funksjon for å vise utøvere for en valgt øvelse
function visUtovere() {
    var utovereEl = document.querySelector("#utovere");
    utovereEl.innerHTML = "";

    var ovelse = document.querySelector("#ovelser").value;
    document.querySelector("#ovelse").innerHTML = ovelse;

    // Viser alle registrerte utøvere hvis "Alle utøvere" er valgt
    if (ovelse == "alle øvelser") {
        for (var i = 0; i < utovere.length; i++) {
            var liEl = document.createElement("li");
            liEl.innerHTML = utovere[i].fornavn + " " + utovere[i].etternavn;
            liEl.innerHTML += " (" + utovere[i].fodselsaar + ")";

            utovereEl.appendChild(liEl);
        }
    }

    // Viser kun utøverne i den valgte øvelsen
    else {
        for (var i = 0; i < utovere.length; i++) {
            if (utovere[i].ovelser.indexOf(ovelse) >= 0) {
                var liEl = document.createElement("li");
                liEl.innerHTML = utovere[i].fornavn + " " + utovere[i].etternavn;
                liEl.innerHTML += " (" + utovere[i].fodselsaar + ")";

                utovereEl.appendChild(liEl);
            }
        }
    }
}

// Funksjon for å registrere en ny utøver
function registrer() {
    // Henter verdier for fornavn, etternavn og fødselsår
    var fornavn = document.querySelector("#fornavn").value;
    var etternavn = document.querySelector("#etternavn").value;
    var fodselsaar = document.querySelector("#fodselsaar").value;

    // Sjekker hvilke avkrysningsbokser som er krysset av,
    // og lagrer valgte øvelser i en array
    var alleOvelser = ["100 m", "1500 m", "Spydkast", "Sleggekast"];
    var ovelser = [];
    var checkbox = [
        document.querySelector("#lop100m").checked,
        document.querySelector("#lop1500m").checked,
        document.querySelector("#spyd").checked,
        document.querySelector("#slegge").checked
    ];
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i]) {
            ovelser.push(alleOvelser[i]);
        }
    }

    // Sjekker at alle feltene er fylt inn riktig
    if (!fornavn || !etternavn) {
        alert("Du må fylle inn alle feltene.");
    }
    else if (fodselsaar > 2020 || fodselsaar < 1900) {
        alert("Ugyldig fødselsår. Velg et år mellom 1900 og 2020");
    }
    else if (ovelser.length == 0) {
        alert("Du må velge én eller flere øvelser!");
    }

    // Registrerer ny utøver hvis all input er korrekt
    else {
        var nyUtover = {};
        nyUtover.fornavn = fornavn;
        nyUtover.etternavn = etternavn;
        nyUtover.fodselsaar = fodselsaar;
        nyUtover.ovelser = ovelser;

        utovere.push(nyUtover);

        // Viser bekreftelse på registrering
        document.querySelector("#deltaker").innerHTML = fornavn + " " + etternavn;
        document.querySelector("#bekreftelse").classList.remove("hide");

        // Nullstiller skjemaet
        var felter = document.querySelectorAll("input");
        for (var i = 0; i < felter.length; i++) {
            felter[i].value = "";
            if (felter[i].checked) {
                felter[i].checked = false;
            }
        }

        // Laster listen med utøvere på nytt etter registrering
        visUtovere();
    }
}

document.querySelector("#registrer-button").addEventListener("click", registrer);
document.querySelector("#ovelser").addEventListener("change", visUtovere);

// Viser listen med utøvere når siden lastes
visUtovere();