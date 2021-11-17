let color = "black";
let number = 5

const numberChanger = () => {
    if (number === 5) {
        number = 12;
    } else {
        number = 5;
    }
    document.getElementById("Dinner").innerHTML = `<p style="color: ${color};"> ${number} </p>`
};

const colorChanger = () => {
    if (color === "black") {
        color = "blue";
    } else {
        color = "black";
    }
    document.getElementById("Dinner").innerHTML = `<p style="color: ${color};"> ${number} </p>`
};


