let playerData = [];

if(!localStorage.getItem("playerData")) {

    console.log("playerData array not found");

} else {

    playerData = JSON.parse(localStorage.getItem("playerData"));
    console.log("playerData array loaded");
    console.table(playerData);

    document.getElementById("continueDiv").classList.remove("hidden");

}

document.getElementById("continueButton").addEventListener("click", () => {
    window.location.href = 'banking.html';
});

function updateCount() {
    const playerCount = document.getElementById('playerCount').value;
    const namesDiv = document.querySelector('.namesToShow-js');

    namesDiv.innerHTML = ''; //Resets

    for(let i = 0; i < playerCount; i++) {
        namesDiv.innerHTML += `Name: <input placeholder="John" id="nameIDNum_${i}"><br>`;
    }
    
    document.getElementById("submitButton").addEventListener("click", () => readNames(playerData, playerCount));
}

//Read in names and money and populate playerData array
function readNames(playerData, playerCount) {
    const money = Number(document.getElementById("moneyAmount").value).toFixed(2);
    playerData = [];

    for(let i = 0; i < playerCount; i++) {
        const nameInfo = document.getElementById(`nameIDNum_${i}`);

        playerData.push({
            "Name": nameInfo.value,
            "Money": money
        });
    }

    console.table(playerData);
    localStorage.setItem("playerData", JSON.stringify(playerData));
    window.location.href = 'banking.html';
}