function regnUt() {
    var bredde = document.querySelector("#bredde").value;
    var hoyde = document.querySelector("#hoyde").value;

    var px = bredde * hoyde;
    var mp = px / 1000000;

    var pxEl = document.querySelector("#antallPiksler");
    var mpEl = document.querySelector("#antallMegaPiksler");

    pxEl.innerHTML = "Bildet inneholder <b>" + px + " piksler</b>.";
    mpEl.innerHTML = "Det tilsvarer <b>" + mp + " megapiksler</b>.";
}

document.querySelector("#regnUt").addEventListener("click", regnUt);