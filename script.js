const charName = document.getElementById("name");
const charHealth = document.getElementById("health");
const charStrenght = document.getElementById("strenght");
const charDefence = document.getElementById("defence");
const charLevel = document.getElementById("level");
const charInventory = document.getElementById("inventory");
const locationsVar = document.getElementsByClassName("loc-variant")
const currentLocation = document.getElementById("loc-name");
const locVariant = document.getElementsByClassName("loc-variant");

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

const enemies = {
    ogr: {
        health: 60,
        strenght: 10,
        defence: 3
    },
    druid: {
        health: 40,
        strenght: 7,
        defence: 9
    },
    knight: {
        health: 100,
        strenght: 4,
        defence: 5
    },
    zombie: {
        health: 100,
        strenght: 4,
        defence: 2
    }
}
let isEnemyAround = false;

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

const locations = ["Деревня", "Лес", "Подземелье", "Темный Замок"];
let currentLocationName = locations[0];
let othersLoc = locations.slice(1, 4);
console.log(othersLoc);

nameSubmitButton.addEventListener("click", () => {
    if(inputName.value.length >= 3 && inputName.value.length <= 8){
        let arrName = inputName.value;
        myName = arrName.charAt(0).toUpperCase() + arrName.slice(1);
        charName.innerHTML = myName;
        console.log(charName);
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

        charHealth.innerHTML = myHealth;
        charStrenght.innerHTML = myStrenght;
        charDefence.innerHTML = myDefence;
        charLevel.innerHTML = myLevel;
        charInventory.innerHTML = myInventory.length <= 0 ? `Ваша сумка пуста...` : `У вас ${myInventory.length} предметов`

        characterChoice.classList.remove("active");
        gameWrapper.classList.add("active")
    });
});

currentLocation.innerHTML = currentLocationName;



Array.from(locVariant).forEach((el, i) => {
    el.addEventListener("click", () => {
        
        currentLocation.innerHTML = othersLoc[i];
    });
});