// Objekt med alle aktivitetene
var events = [
    {
        id: "beethoven",
        navn: "Beethoven-jubileum",
        bilde: "bilder/beethoven.jpg",
        kategori: "Underholdning",
        pris: 200,
        antallBilletter: 60
    },
    {
        id: "kino",
        navn: "Kinopremiere: «Bombenatt»",
        bilde: "bilder/kino.jpg",
        kategori: "Underholdning",
        pris: 135,
        antallBilletter: 40
    },
    {
        id: "maleriutstilling",
        navn: "Maleriutstilling med mossekunstnere",
        bilde: "bilder/maleriutstilling.jpg",
        kategori: "Kunst",
        pris: 0,
        antallBilletter: 30
    },
    {
        id: "westsidestory",
        navn: "West Side Story på Parkteateret",
        bilde: "bilder/westsidestory.jpg",
        kategori: "Underholdning",
        pris: 250,
        antallBilletter: 300
    },
    {
        id: "rygge",
        navn: "Rygge som det var - utstilling",
        bilde: "bilder/rygge.jpg",
        kategori: "Kunst",
        pris: 50,
        antallBilletter: 25
    },
    {
        id: "funkisvandring",
        navn: "Funkisvandring i Moss sentrum",
        bilde: "bilder/funkisvandring.jpg",
        kategori: "Utendørs",
        pris: 0,
        antallBilletter: 70
    }
];

// Oppdaterer antall resterende billetter
var bestillinger = JSON.parse(localStorage.getItem("bestillinger")) || [];
for (var i = 0; i < bestillinger.length; i++) {
    var bestilling = bestillinger[i];

    var aktiviteter = bestilling.aktiviteter;
    for (var j = 0; j < aktiviteter.length; j++) {
        var aktivitetId = aktiviteter[j];
        for (var k = 0; k < events.length; k++) {
            if (events[k].id == aktivitetId) {
                events[k].antallBilletter--;
            }
        }
    }
}

// Laster listen med aktiviteter på siden
var eventsListEl = document.querySelector("#events-list");
for (var i = 0; i < events.length; i++) {
    var eventEl = document.querySelector("#sample-event").cloneNode(true);
    eventEl.id = events[i].id;
    eventEl.classList.remove("hidden");
    eventEl.querySelector("h3").innerHTML = events[i].navn;
    eventEl.querySelector("img").src = events[i].bilde;
    eventEl.querySelector(".kategori").innerHTML = events[i].kategori;
    eventEl.querySelector(".billetter").innerHTML = events[i].antallBilletter;
    eventEl.querySelector(".pris").innerHTML = events[i].pris;
    eventsListEl.appendChild(eventEl);
}

// Holder styr på hvilke aktiviteter som er valgt
var valgteAktiviteter = [];
function velgAktivitet() {
    // Henter id-en til aktiviteten
    var id = this.parentElement.parentElement.id;
    if (!this.classList.contains("valgt")) {
        this.innerHTML = this.innerHTML.replace("Velg", "Valgt");
        this.classList.add("valgt");

        valgteAktiviteter.push(id);
    } else {
        this.innerHTML = this.innerHTML.replace("Valgt", "Velg");
        this.classList.remove("valgt");

        var index = valgteAktiviteter.indexOf(id);
        valgteAktiviteter.splice(index, 1);
    }
}

// Lager en "kvittering" og viser skjema for påmelding
function gaaVidere() {
    if (valgteAktiviteter.length > 0) {
        var totalPris = 0;

        var table = document.querySelector("#sammendrag");
        table.innerHTML = "";

        for (var i = 0; i < valgteAktiviteter.length; i++) {
            for (var j = 0; j < events.length; j++) {
                if (events[j].id == valgteAktiviteter[i]) {
                    var aktivitet = events[j];
                    break;
                }
            }

            var tr = document.createElement("tr");
            var tdNavn = document.createElement("td");
            var tdPris = document.createElement("td");
            tdNavn.innerHTML = aktivitet.navn;
            tdPris.innerHTML = "kr " + aktivitet.pris + ",-";
            tr.appendChild(tdNavn);
            tr.appendChild(tdPris);
            table.appendChild(tr);

            totalPris += aktivitet.pris;
        }

        document.querySelector("#totalPris").innerHTML = "kr " + totalPris + ",-";
        document.querySelector("#kontaktInfo").classList.remove("hidden");

        // Scroller ned
        window.location.hash = "";
        window.location.hash = "kontaktInfo";
    }

    else {
        alert("Velg noen aktiviteter først!");
    }
}

// Lagrer bestillingen i localstorage og refresher siden
function bestill() {
    var fornavn = document.querySelector("#fornavn").value;
    var etternavn = document.querySelector("#etternavn").value;
    var fodselsdato = document.querySelector("#fodselsdato").value;

    var bestilling = {
        fornavn: fornavn,
        etternavn: etternavn,
        fodselsdato: fodselsdato,
        aktiviteter: valgteAktiviteter
    }

    var bestillinger = JSON.parse(localStorage.getItem("bestillinger")) || [];
    bestillinger.push(bestilling);
    localStorage.setItem("bestillinger", JSON.stringify(bestillinger));

    alert("Din bestilling er registrert!");
    window.location.reload();
}


// EVENT LISTENERS:
var buttonEl = document.querySelectorAll(".velg")
for (var i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener("click", velgAktivitet);
}

document.querySelector("#gaaVidere").addEventListener("click", gaaVidere);

document.querySelector("#bestill").addEventListener("click", bestill);