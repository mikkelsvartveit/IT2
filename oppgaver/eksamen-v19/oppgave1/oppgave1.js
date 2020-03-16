function visInfo() {
    var id = this.id;
    var h2 = document.querySelector("#bilde-info h2");
    var p = document.querySelector("#bilde-info p");

    if (id == "bilde1") {
        h2.innerHTML = "Bilde 1";
        p.innerHTML = "Dette bildet er detaljrikt og innerholder ikke gjennomsiktige områder. Det egner seg derfor å lagre bildet i filformatet <b>JPG</b>. Dette formatet er komprimert, og tar derfor opp mindre plass og lastes raskere på nettsider. Hovedtypen for datagrafikk er <b>punktgrafikk</b>.";
    }
    else if (id == "bilde2") {
        h2.innerHTML = "Bilde 2";
        p.innerHTML = "Dette bildet inneholder gjennonsiktige områder. Vi er derfor nødt til å bruke et filformat som tillater dette. Et hensiktmessig format er <b>PNG</b>. Ulempen er at PNG er ukomprimert, og filene blir derfor ganske store. Det finnes dessverre ingen gode komprimerte formater med støtte for gjennomsiktighet. Hovedtypen for datagrafikk er <b>punktgrafikk</b>.";
    }
    else if (id == "bilde3") {
        h2.innerHTML = "Bilde 3";
        p.innerHTML = "Dette bildet har få detaljer og store områder av samme farge, og er i tillegg gjennomsiktig. Dette gjør at det egner seg godt for <b>SVG</b>-formatet. Dette formatet kan skaleres opp uten kvalitetstap. Hovedtypen for datagrafikk er <b>vektorgrafikk</b>."
    }
}

document.querySelector("#bilde1").addEventListener("click", visInfo);
document.querySelector("#bilde2").addEventListener("click", visInfo);
document.querySelector("#bilde3").addEventListener("click", visInfo);