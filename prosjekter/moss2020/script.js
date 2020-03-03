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
var buttonEl = document.querySelectorAll("button")
for (var i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener("click", velgAktivitet);
}