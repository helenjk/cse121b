// Final project
// This project aims to build one page or my personal website which purpose is to offer tips, ideas and
// resources to Brazilian guys who are studying English
//

// Global variables
const phrasalVerbsElement = document.querySelector("#phrasalverbs_block");
let phrasalVerbsList = [];
let filter = '';

// displayPhrasalVerbs Function: receives a list and display its elements on the screen

const displayPhrasalVerbs = (phrasalVerbs) => {

    phrasalVerbs.forEach((currentPhrasalVerb) => {
        // Create verbElement; this element will show details of the verb
        
        let verbElement = document.createElement("verb");

        // Create the header which will show the verb itself
        let h1Element = document.createElement("h1");
        h1Element.textContent = currentPhrasalVerb.phrasalVerb;
        // Create paragraphs to show the verb details
        let p1Element = document.createElement("p");
        p1Element.textContent = 'Meaning: ' + currentPhrasalVerb.meaningEng;
        let p2Element = document.createElement("p");
        p2Element.textContent = 'Significado: ' + currentPhrasalVerb.meaningPor;
        let p3Element = document.createElement("p");
        p3Element.textContent = 'Example: '+ currentPhrasalVerb.exampleSentence;
        
        // Append child elements to the verb element
        verbElement.appendChild(h1Element);
        verbElement.appendChild(p1Element);
        verbElement.appendChild(p2Element);
        verbElement.appendChild(p3Element);

        // Append verbElement to the global element
        phrasalVerbsElement.appendChild(verbElement);
    })
};

// This async getPhrasalVerbs function will recover the file's content 

const getPhrasalVerbs = async() => {
    
    const response = await fetch("files/phrasalVerbs.json");

    if (response.ok) {
        // Convert the response to a json
        phrasalVerbsList = await response.json();
        // Order the list
        phrasalVerbsList = phrasalVerbsList.sort(compare);
        // Show the list's content
        displayPhrasalVerbs(phrasalVerbsList);
    } else {
        console.log('Phrasal Verbs List could not be fetched!');
    };
};

// Reset Function 
function reset(){
    document.querySelector("#phrasalverbs_block").textContent = "";
};

// Functions to sort the list of verbs 

function checkPrepositionUp(verb){
    return verb.phrasalVerb.indexOf('up') >= 0;
};

function checkPrepositionOn(verb){
    return verb.phrasalVerb.indexOf('on') >= 0;
};

function checkPrepositionOff(verb){
    return verb.phrasalVerb.indexOf('off') >= 0;
};

function checkPrepositionOut(verb){
    return verb.phrasalVerb.indexOf('out') >= 0;
};

function checkOthers(verb){
    return (verb.phrasalVerb.indexOf('out') < 0) && (verb.phrasalVerb.indexOf('up') < 0) && (verb.phrasalVerb.indexOf('off') < 0) && (verb.phrasalVerb.indexOf('on') < 0);
};

// Function to order the list
function compare(verb1, verb2){
    if (verb1.phrasalVerb > verb2.phrasalVerb){
        return 1;
    } if (verb1.phrasalVerb < verb2.phrasalVerb){
        return -1;
    } else {
        return 0;
    }
}

function sortByPreposition(phrasalverbs){
    // Cleans the screen
    reset();
    document.getElementById('verbInput').value = '';
    
    // Get selected option of filter choosen by the user
    filter = document.getElementById("sortByPreposition");
    
    // List after applying the filter
    let resultVerbs = [];
    
    switch(filter.value){
            case "up":
                resultVerbs = phrasalverbs.filter(checkPrepositionUp);
                break;
            case "on":
                resultVerbs = phrasalverbs.filter(checkPrepositionOn);
                break;
            case "off":
                resultVerbs = phrasalverbs.filter(checkPrepositionOff);
                break;
            case "out":
                resultVerbs = phrasalverbs.filter(checkPrepositionOut);
                break;
            case "others":
                resultVerbs = phrasalverbs.filter(checkOthers);
                break;
            default:
                resultVerbs = phrasalverbs;
    };

    // Order the resulting list
    let resultVerbsOrdered = resultVerbs.sort(compare);
    
    // Show the resulting ordered list of verbs
    displayPhrasalVerbs(resultVerbsOrdered);
};

function findVerb() {
    // Cleans the screen
    reset();

    // List after applying the filter
    let resultVerbs = [];

    // Get the typed word
    let inputVerb = document.getElementById('verbInput');
    inputVerb = inputVerb.value.toUpperCase();
    
    let count = 0;

    // Find a verb that matches what was typed
    phrasalVerbsList.forEach((currentPhrasalVerb) => {
        verbUpperCase = currentPhrasalVerb.phrasalVerb.toUpperCase();
        let position = verbUpperCase.indexOf(inputVerb);
        if (position >= 0){
            resultVerbs[count] = currentPhrasalVerb;
            count++;
        }
    }
    );
    
    // Order the resulting list
    let resultVerbsOrdered = resultVerbs.sort(compare);

    // Show the resulting list
    displayPhrasalVerbs(resultVerbsOrdered);
};

// At first, show all the list of verbs
getPhrasalVerbs();

// Event listener over the combo-box with the filter options
document.querySelector("#sortByPreposition").addEventListener("change", () => {sortByPreposition(phrasalVerbsList)});
