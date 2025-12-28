if(!localStorage.getItem("playerData")) {
    const playerData = [];
} else {
    const playerData = localStorage.getItem("playerData");
}

function updateCount() {
    const playerCount = document.getElementById('playerCount').value;
    const namesDiv = document.querySelector('.namesToShow-js');

    namesDiv.innerHTML = ''; //Resets

    for(let i = 1; i <= playerCount; i++) {
        namesDiv.innerHTML += `Name: <input placeholder="John" id="nameIDNum_${i}"><br>`;
    }

    namesDiv.innerHTML += `<button onclick="readNames(playerData, playerCount)">Submit</button>`;
}

//Read in names and populate names array
function readNames(playerCount) {

    for(let i = 1; i < playerCount; i++) {
        const nameInfo = document.getElementById(`NameIDNum_${i}`).value;
        console.log(nameInfo);

        playerData.push[{
            "Name": nameInfo,
            "Money": 0
        }];
    }

    console.table(playerData);
    localStorage.setItem("playerData", playerData);
}