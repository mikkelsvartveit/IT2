// Funksjon for å regne ut og vise makspuls
function regnUt() {
    var alder = document.querySelector("#alder-input").value;

    // Kjører bare hvis gyldig alder er skrevet inn
    if (alder && alder >= 0 && alder <= 150) {
        // Regner ut makspuls, 70% av makspuls og 90% av makspuls
        var makspuls = 211 - 0.64 * alder;
        var puls70 = makspuls * 0.7;
        var puls90 = makspuls * 0.9;

        // Setter inn de utregnede verdiene i DOM
        document.querySelector("#makspuls").innerHTML = Math.round(makspuls);
        document.querySelector("#puls-70").innerHTML = Math.round(puls70);
        document.querySelector("#puls-90").innerHTML = Math.round(puls90);

        // Viser resultat
        document.querySelector("#resultat").classList.remove("hide");
    }

    else {
        // Skjuler resultat og gir feilmelding hvis alder ikke er gyldig
        document.querySelector("#resultat").classList.add("hide");
        alert("Skriv inn gyldig alder!");
    }
}

document.querySelector("#regnut-knapp").addEventListener("click", regnUt);