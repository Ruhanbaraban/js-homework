const charName = document.getElementById("name");
let charHealth = document.getElementById("health");
const charStrenght = document.getElementById("strenght");
const charDefence = document.getElementById("defence");
let charLevel = document.getElementById("level");
let charInventory = document.getElementById("inventory");
const locationsVar = document.getElementsByClassName("loc-variant")
const nameVar = document.getElementsByClassName("name-variant")
const currentLocation = document.getElementById("loc-name");
const events = document.getElementById("events");
const action = document.getElementsByClassName("action");

const nameBox = document.getElementById("name-box");
const inputName = document.getElementById("input-name");
const nameSubmitButton = document.getElementById("name-submit");
const characterChoice = document.getElementById("character-choice");
const characterVar = document.getElementsByClassName("character-var");
const gameWrapper = document.getElementById("game-wrapper");

let myName = inputName.value;
let myHealth = null;
let myStrenght = null;
let myDefence = null;
let myLevel = 1;
let myInventory = [];

let characters = {
    magican: {
        health: 50,
        strenght: 9,
        defence: 10
    },
    human: {
        health: 100,
        strenght: 6,
        defence: 6
    },
    dwarf: {
        health: 80,
        strenght: 7,
        defence: 5
    }
}

const locations = ["Деревня", "Темный Замок", "Лес"];
let currentLoc = locations[0]; 

nameSubmitButton.addEventListener("click", () => {
    if(inputName.value.length >= 3 && inputName.value.length <= 8){
        let arrName = inputName.value;
        myName = arrName.charAt(0).toUpperCase() + arrName.slice(1);
        charName.innerHTML = myName;
        nameBox.classList.remove("active");
        characterChoice.classList.add("active")
    } else {
        alert("Имя должно быть меньше 8 символов и больше трех")
    }
});

Array.from(characterVar).forEach((el) => {
    el.addEventListener("click", (e) => {
        const charType = e.target.dataset.char;
        myHealth = characters[charType].health;
        myStrenght = characters[charType].strenght;
        myDefence = characters[charType].defence;
        currentChar = characters[charType];

        charHealth.innerHTML = myHealth;
        charStrenght.innerHTML = myStrenght;
        charDefence.innerHTML = myDefence;
        charLevel.innerHTML = myLevel;
        charInventory.innerHTML = myInventory.length <= 0 ? `Ваша сумка пуста...` : `У вас ${myInventory.length} предметов`

        characterChoice.classList.remove("active");
        gameWrapper.classList.add("active")
    });
});

Array.from(nameVar).forEach((e, i) => {
    e.innerHTML = locations[i];
});

Array.from(locationsVar).forEach((el, i) => {
    el.addEventListener("click", () => {
        currentLoc = locations[i];
        currentLocation.innerHTML = currentLoc;
    });
});

function castle(){
    events.innerHTML = `На вас напал ${currentLoc.ene}`
}