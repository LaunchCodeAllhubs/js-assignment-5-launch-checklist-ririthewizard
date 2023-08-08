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
    if (string === "") {
        return "Empty";
    } else if (isNaN(string)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // let document = window.document;
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelLevelCurrent = document.getElementById("fuelStatus");
    let cargoLevelCurrent = document.getElementById("cargoStatus");


    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Make sure to enter valid information for each field!");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!");
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} Ready`;
        copilotStatus.innerHTML = `Copilot ${copilot} Ready`;
        fuelLevel < 10000 ? (
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch",
            document.getElementById("launchStatus").style.color = "#C7254E"
        ) : cargoLevel > 10000 ? (
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch",
            document.getElementById("launchStatus").style.color = "#C7254E"
        ) : (
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch",
            document.getElementById("launchStatus").style.color = "#419F6A"
        );
    }

    // form.addEventListener("submit", event => {
    // let validatePilot = validateInput(pilot.value);

    // });

}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
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
