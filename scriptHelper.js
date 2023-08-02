// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(string) {
   if (string === ""){
    return "Empty";
   } else if (isNaN(string)){
    return "Not a Number";
   } else {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let document = window.document;
    let pilot = document.getElementById("pilotName");
    let copilot = document.getElementById("copilotName");
    let fuelLevel = document.getElementById("fuelLevel");
    let cargoLevel = document.getElementById("cargoMass");

    if (validateInput(pilot) !== "Not a Number" || validateInput(pilot) === "Empty"){
        alert("Make sure you put in the right information");
    }


    // form.addEventListener("submit", event => {
        // let validatePilot = validateInput(pilot.value);

    // });
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
