if(!localStorage.getItem("playerData")) {
    const playerData = []
} else {

}

function updateCount() {
    const playerCount = document.getElementById('playerCount').value;
    const namesDiv = document.querySelector('.namesToShow-js');

    namesDiv.innerHTML = ''; //Resets

    for(let i = 1; i <= playerCount; i++) {
        namesDiv.innerHTML += `Name: <input placeholder="John" id="${i}"><br>`;
    }
}