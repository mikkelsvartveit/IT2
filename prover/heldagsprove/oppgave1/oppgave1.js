// Funksjon for å vise en video når knapp trykkes
function showVideo() {
    // Skjuler alle videoer
    document.querySelector("#bass").classList.add("hide");
    document.querySelector("#gitar").classList.add("hide");

    // Sjekker hvilken knapp som ble trykket på
    if (this.id == "bass-button") {
        var divEl = document.querySelector("#bass");
        var videoEl = document.querySelector("#bass-video");
        var hash = "#bass";
    } else if (this.id == "gitar-button") {
        var divEl = document.querySelector("#gitar");
        var videoEl = document.querySelector("#gitar-video");
        var hash = "#gitar";
    }

    // Viser div-element med video
    divEl.classList.remove("hide");
    // Scroller siden ned til videoen
    location.hash = "";
    location.hash = hash;
    // Starter video på nytt og spiller av
    videoEl.pause();
    videoEl.currentTime = 0;
    videoEl.play();
}

document.querySelector("#bass-button").addEventListener("click", showVideo);
document.querySelector("#gitar-button").addEventListener("click", showVideo);