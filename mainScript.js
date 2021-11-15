let yesTwelve = true;

function sayTwelve() {
    if (yesTwelve) {
        document.getElementById("Dinner").innerHTML = `<p class="big">12</p>`;
        yesTwelve = false;
        document.getElementById("changer").innerHTML = "Make 5"
    } else {
        document.getElementById("Dinner").innerHTML = "<p>5</p>"
        yesTwelve = true;
        document.getElementById("changer").innerHTML = "Press For 12"
    }
}

