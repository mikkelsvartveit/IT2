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

// Genererer tabell med alle bestillinger
var tableEl = document.querySelector("#bestillinger");
var bestillinger = JSON.parse(localStorage.getItem("bestillinger")) || [];
for (var i = 0; i < bestillinger.length; i++) {
    var bestilling = bestillinger[i];
    var tr = document.createElement("tr");
    var fornavnEl = document.createElement("td");
    var etternavnEl = document.createElement("td");
    var fodselsdatoEl = document.createElement("td");
    var aktiviteterEl = document.createElement("td");
    var prisEl = document.createElement("td");

    fornavnEl.innerHTML = bestilling.fornavn;
    etternavnEl.innerHTML = bestilling.etternavn;
    fodselsdatoEl.innerHTML = bestilling.fodselsdato;

    var totalPris = 0;

    var aktiviteterList = "<ul>";
    for (var j = 0; j < bestilling.aktiviteter.length; j++) {
        for (var k = 0; k < events.length; k++) {
            if (events[k].id == bestilling.aktiviteter[j]) {
                var aktivitet = events[k];
                break;
            }
        }

        aktiviteterList += "<li>" + aktivitet.navn + "</li>";
        totalPris += aktivitet.pris;
    }
    aktiviteterList += "</ul>";
    aktiviteterEl.innerHTML += aktiviteterList;
    prisEl.innerHTML = "kr " + totalPris + ",-";

    tr.appendChild(fornavnEl);
    tr.appendChild(etternavnEl);
    tr.appendChild(fodselsdatoEl);
    tr.appendChild(aktiviteterEl);
    tr.appendChild(prisEl);

    tableEl.appendChild(tr);
}