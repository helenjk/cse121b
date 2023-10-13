/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#verbs");
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {

    temples.forEach((currentTemple) => {
        // Create articleElement
        let articleElement = document.createElement("article");

        let h3Element = document.createElement("h3");
        h3Element.textContent = currentTemple.templeName;
        //h3Element.innerHTML = currentTemple.templeName;

        let imageElement = document.createElement("img");
        imageElement.setAttribute('src', currentTemple.imageUrl);
        imageElement.setAttribute('alt', currentTemple.location);
        // Append child elements to the articleElement
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imageElement);
        //Append articleElement to the global element
        templesElement.appendChild(articleElement);
    })
};

/* async getTemples Function using fetch()*/

const getTemples = async() => {
    //const response = await fetch("https://github.com/helenjk/cse121b/blob/main/teste.json");
    const response = await fetch("teste.json");
    if (response.ok) {
        // Convert the response to a json
        templeList = await response.json();
        // Show the list's content
        displayTemples(templeList);
    } else {
        console.log('Temple List could not be fetched!');
    };
};

/* reset Function */
function reset(){
    document.querySelector("#verbs").textContent = "";
};

/* sortBy Function */
function checkUtah(temple){
    return temple.templeName.indexOf("Utah") >= 0;
};

function checkNotUtah(temple){
    return temple.templeName.indexOf("Utah") == -1;
};

function checkDedicationDate(temple){
    return new Date(temple.dedicated) <= new Date(1950, 0, 1);
};

function compare(temple1, temple2){
    if (temple1.templeName > temple2.templeName){
        return 1;
    } if (temple1.templeName < temple2.templeName){
        return -1;
    } else {
        return 0;
    }
}

function sortBy(temples){
    reset();

    let filter = document.getElementById("sortBy");
    let resultTemples = [];
    
    switch(filter.value){
            case "utah":
                resultTemples = temples.filter(checkUtah);
                break;
            case "notutah":
                resultTemples = temples.filter(checkNotUtah);
                break;
            case "older":
                resultTemples = temples.filter(checkDedicationDate);
                break;
            default:
                resultTemples = temples;
    };
    // Order the resulting list
    resultTemplesOrdered = resultTemples.sort(compare);
    
    // Show the resulting ordered list of temples according to the selected filter
    displayTemples(resultTemplesOrdered);
};

getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});
