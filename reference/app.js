// Select button by accessing the DOM
const colorBtn = document.getElementById("color-btn");
const ratingInput = document.getElementById("rating-input");
const submitRating = document.getElementById("submit-rating");
const ratingMessage = document.getElementById("rating-message");

// store ratings in an array
let ratings = [];

// add content with innerHTML
const diningHallsMain = document.getElementById("dining-main");
// Using innerHTML means that any JavaScript references to the descendants of element will be removed.
// When you use insertAdjacentHTML, adding additional content will not corrupt
// the existing JS references and the existing nodes are not altered.
diningHallsMain.insertAdjacentHTML(
  "beforeend",
  `<h2>DISCLAIMER!</h2>
   <p>These ideas are our own. Plz don't be mad BU.</p>`
);
diningHallsMain.style.color = "white";

// changes background color of home'
function colorToggle(){
    let red = Math.floor(Math.random() * 251);
    let green = Math.floor(Math.random() * 251);
    let blue = Math.floor(Math.random() * 251);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// add event listener
colorBtn.addEventListener("click", colorToggle);

// events related to rating submission
submitRating.addEventListener("click", function() {

    console.log("clicked!");

    const value = ratingInput.value;
    const number = Number(value); // typecasting

    // Check #1: must be a number
    if (isNaN(number)){
        ratingMessage.innerHTML = "Please enter a valid number.";
        return;
    }

    // Check #2: check that the number is between 1 and 5
    if (number < 1 || number > 5){
        ratingMessage.innerHTML = "Rating must be between 1 and 5.";
        return;
    }

    // If both checks are passed
    ratings.push(number); // add to array
    ratingMessage.innerHTML = "You rated it " + number + " stars";
    ratingInput.value = ""; // clear input

});

// store valid ratings in an array and display in the console when button is clicked
const showRatingsBtn = document.getElementById("show-ratings");

showRatingsBtn.addEventListener("click", function() {

    if (ratings.length === 0) {
        console.log("No ratings yet.");
        return;
    }

    console.log("All ratings:");

    for (let i = 0; i < ratings.length; i++) {
        console.log("Rating " + (i + 1) + ":", ratings[i]);
    }

});
