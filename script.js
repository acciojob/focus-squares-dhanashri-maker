//your JS code here. If required.

window.onload = function () {
    // Select all squares (assuming they are divs inside body)
    let squares = document.querySelectorAll("div");

    squares.forEach((square) => {
        square.addEventListener("mouseover", function () {

            squares.forEach((other) => {
                if (other !== square) {
                    other.style.backgroundColor = "#6F4E37"; // Coffee
                }
            });

        });

        square.addEventListener("mouseout", function () {

            squares.forEach((sq) => {
                sq.style.backgroundColor = "#E6E6FA"; // Lavender
            });

        });
    });
};