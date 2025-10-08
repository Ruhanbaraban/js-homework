const charName = document.getElementById("name");
let charHealth = document.getElementById("health");
const charStrenght = document.getElementById("strenght");
let charLevel = document.getElementById("level");
let charInventory = document.getElementById("inventory");
const locationsVar = document.getElementsByClassName("loc-variant")
const nameVar = document.getElementsByClassName("name-variant")
const currentLocation = document.getElementById("loc-name");
const events = document.getElementById("events");
const actions = document.getElementsByClassName("action");
const actionAttack = document.getElementById("attack");
const actionDefence = document.getElementById("defence");
const actionUseItem = document.getElementById("use-item");

const nameBox = document.getElementById("name-box");
const inputName = document.getElementById("input-name");
const nameSubmitButton = document.getElementById("name-submit");
const characterChoice = document.getElementById("character-choice");
const characterVar = document.getElementsByClassName("character-var");
const gameWrapper = document.getElementById("game-wrapper");

let myName = inputName.value;
let myHealth = null;
let myStrenght = null;
let myLevel = 1;
let myInventory = [];

let characters = {
    magican: {
        health: 50,
        strenght: 9
    },
    human: {
        health: 100,
        strenght: 6
    },
    dwarf: {
        health: 80,
        strenght: 7
    }
}

const locations = [
    {
        name: "Деревня",
        enemy: {
            enemyName: "",
            enemyHealth: null,
            enemyStrenght: null 
        }
    },
    {
        name: "Темный Замок",
        enemy: {
            enemyName: "Рыцарь",
            enemyHealth: 50,
            enemyStrenght: 10 
        },
        items: [{itemName: "Ключь От Замка", itemCount: null}, {itemName: "Посох Придворного Мага", itemCount: null}]
    },
        {
        name: "Лес",
        enemy: {
            enemyName: "Гоблин",
            enemyHealth: 30,
            enemyStrenght: 13 
        },
        items: [{itemName: "Зелье Здоровья", itemCount: null}, {itemName: "Метательный Топор Гнома", itemCount: null}]
    }
];
let currentLoc = locations[0]; 

gameState = {
    isFightStart: false,
    currentEnemy: null,
    player: {
        name: "",
        health: null,
        strenght: null,
        level: 1,
        inventory: []
    }
}

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
        currentChar = characters[charType];

        charHealth.innerHTML = myHealth;
        charStrenght.innerHTML = myStrenght;
        charLevel.innerHTML = myLevel;
        charInventory.innerHTML = myInventory.length <= 0 ? `Ваша сумка пуста...` : `У вас ${myInventory.length} предметов`

        characterChoice.classList.remove("active");
        gameWrapper.classList.add("active")
    });
});

Array.from(nameVar).forEach((e, i) => {
    e.innerHTML = locations[i].name;
});


currentLocation.innerHTML = currentLoc.name;
let isFightStart = false;
Array.from(locationsVar).forEach((el, i) => {
    el.addEventListener("click", () => {
        if(isFightStart === true){
            return ;
        }
        currentLoc = locations[i];
        currentLocation.innerHTML = currentLoc.name;
        if(currentLoc.name === "Деревня" || currentLoc.enemy.enemyHealth <= 0){
            events.innerHTML = "Тут ничего не происходит"
        } else{
            events.innerHTML = `На вас напал ${currentLoc.enemy.enemyName}! Действуйте быстрее!`
            isFightStart = true;
        }
    });
});

actionAttack.addEventListener("click", () => {
    if(currentLoc.name === "Деревня") return;
    else if(currentLoc.enemy.enemyHealth > 0){
        currentLoc.enemy.enemyHealth -= currentChar.strenght;
        currentChar.health -= currentLoc.enemy.enemyStrenght;
        charHealth.innerHTML = currentChar.health < 0 ? 0 : currentChar.health;
        events.innerHTML = `Вы смогли контратаковать его, но он задел вас... У вас осталось ${currentChar.health}, у него осталось ${currentLoc.enemy.enemyHealth <= 0 ? 0 : currentLoc.enemy.enemyHealth} `
    }
    else if(currentLoc.enemy.enemyHealth < 0){
        isFightStart = false;
        events.innerHTML = `Вы выиграли! У вас осталось ${currentChar.health} HP`
    }  
    if(currentChar.health < 0) events.innerHTML = `Вы проиграли! У вас осталось 0 HP`;
});