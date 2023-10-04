/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: 'Helen Junginger Klinger',
    favoriteFoods: ["Risotto", "Baked Fish", "Tomato and lettuce salad", "Pumpkin Soup", "Spanish paella"],
    photo: 'images/HelenKlinger_photo.png',
    hobbies: ["Run", "Bike", "Read", "Handcraft", "Watch movies"],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {place: 'Caxias do Sul, RS, Brazil',
     length: '19 years'}
);

myProfile.placesLived.push(
    {place: 'Sao Paulo, SP, Brazil',
     length: '6 months'}
);

myProfile.placesLived.push(
    {place: 'Campinas SP, Brazil',
     length: '26 years'}
)

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
const imageElement = document.querySelector("img");
imageElement.setAttribute('src', myProfile.photo);
imageElement.setAttribute('alt', `Profile image of ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = placeLived.place;
    dd.textContent = placeLived.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
})


