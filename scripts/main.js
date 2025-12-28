function updateCount() {
    const playerCount = document.getElementById('playerCount').value;
    const namesDiv = document.querySelector('.namesToShow-js');

    for(let i = 0; i < playerCount; i++) {
        console.log("gets here")
        namesDiv.innerHTML += ``;
    }
}