// Write your JavaScript code here!
// import { addDestinationInfo, validateInput, formSubmission, pickPlanet, myFetch } from "./scriptHelper";


// const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function () {
    let form = document.querySelector("form");
    let list = document.querySelector("#faultyItems")

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

        // console.log(pilot);
    });
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        // console.log(listedPlanets);
        let randPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, randPlanet.name, randPlanet.diameter, randPlanet.star, randPlanet.distance, randPlanet.moons, randPlanet.image);
    });

});