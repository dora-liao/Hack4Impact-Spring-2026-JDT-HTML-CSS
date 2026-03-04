const colorBtn = document.getElementById("color-btn");

function colorToggle(){
    let red = Math.floor(Math.random() * 251);
    let green = Math.floor(Math.random() * 251);
    let blue = Math.floor(Math.random() * 251);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

const ratingInput = document.getElementById("rating-input");
const submitRating = document.getElementById("submit-rating");
const ratingMessage = document.getElementById("rating-message");

let ratings = [];

submitRating.addEventListener("click", function(){
    const value = ratingInput.value;
    const number = Number(value); // typecasting

    // Check #1: must be a number
    if (isNaN(number)){
        ratingMessage.innerHTML = "Please enter a valid number.";
        return;
    }

    // Check #2: check that a number is between 1 and 5
    if (number < 1 || number > 5){
        ratingMessage.innerHTML = "Rating must be between 1 and 5";
        return;
    }

    ratings.push(number);
    ratingMessage.innerHTML = "You rated it " + number + " stars";
    ratingInput.value = "";
});


const diningHallsMain = document.getElementById("dining-main");


diningHallsMain.insertAdjacentHTML(
    "beforeend",
    `<h2>DISCLAIMER</h2>
    <p>These ideas are our own plz dont be mad BU</p>`
);
diningHallsMain.style.color = "white";

const showRatingsBtn = document.getElementById("show-ratings");
showRatingsBtn.addEventListener("click", function(){
    if (ratings.length === 0){
        console.log("No ratings yet.");
        return;
    }

    console.log("All ratings:");

    for (let i = 0; i < ratings.length; i++){
        console.log("Rating " + (i+1) + ": ", ratings[i]);
    }
});