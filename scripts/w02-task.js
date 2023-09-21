/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Helen Junginger Klinger";
let currentYear = new Date().getFullYear();
let profilePicture = "images/HelenKlinger_photo.png";

console.log(currentYear);

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let favoritefoods = ["Risotto", "Baked Fish", "Tomato and lettuce salad", "Pumpkin Soup", "Spanish paella"];
// foodElement.innerHTML = favoritefoods.toString();
foodElement.textContent = favoritefoods;

// Adding a new item in the list
let newFavoriteFood = 'Lentils';
favoritefoods.push(newFavoriteFood);

// Appending the new item in the element
foodElement.innerHTML += `<br>${favoritefoods}`;

// Removing the first item of the list
favoritefoods.shift();
foodElement.innerHTML += `<br>${favoritefoods}`;

// Removing the last item of the list
favoritefoods.pop();
foodElement.innerHTML += `<br>${favoritefoods}`;
