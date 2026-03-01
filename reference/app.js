// Select button by accessing the DOM
const colorBtn = document.getElementById("color-btn");
const ratingInput = document.getElementById("rating-input");
const submitRating = document.getElementById("submit-rating");
const ratingMessage = document.getElementById("rating-message");

// add content with innerHTML
const diningHallsMain = document.getElementById("dining-main");;
diningHallsMain.innerHTML += `<h2>DISCLAIMER!</h2><p>These ideas are our own. Plz don't be mad BU.</p>`;;
diningHallsMain.style.color = "white";

// changes background color of home'
function colorToggle(){
    let red = Math.floor(Math.random() * 251);
    let green = Math.floor(Math.random() * 251);
    let blue = Math.floor(Math.random() * 251);

    document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"; 
}

// add event listener
colorBtn.addEventListener("click", colorToggle);

// events related to rating submission
submitRating.addEventListener("click", function() {
    
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
    ratingMessage.innerHTML = "You rated it " + number + " stars";
    ratingInput.value = ""; // clear input

});


