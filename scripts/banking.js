const playerData = JSON.parse(localStorage.getItem("playerData"));
const transactionDiv = document.getElementById("transaction-div");

playerData.forEach(element => {
    element.Money = Number(element.Money);
});

let playerDiv = document.getElementById("playerData-js");

console.table(playerData);

playerData.forEach((element, index) => {
    playerDiv.innerHTML += 
    `
        <div class="players-div" id="box_${index}">
            ${element.Name} <br>
            Balance: $${element.Money}
            <br><br>
            <button onclick="selectPlayer(${index})">Change Balance</button>
        </div>
    `;
});

function selectPlayer(index) {
    const updateBox = document.getElementById(`box_${index}`);
    updateBox.innerHTML = `
            ${playerData[index].Name} <br>
            Balance: $${playerData[index].Money}
            <br><br>
            <input placeholder="-2000.00" id="money-insert-${index}"> 
            <button onclick="changeBalance(${index})">Submit</button>
    `;
}

function changeBalance(index) {
    const updateBox = document.getElementById(`box_${index}`);
    console.log(document.getElementById(`money-insert-${index}`).value);    

    playerData[index].Money += Number(document.getElementById(`money-insert-${index}`).value);
    console.table(playerData[index]);

    //After each update, save to localStorage and reset main div
    localStorage.setItem("playerData", JSON.stringify(playerData));
    playerDiv.innerHTML = '';

    playerData.forEach((element, index) => {
    playerDiv.innerHTML += 
    `
        <div class="players-div" id="box_${index}">
            ${element.Name} <br>
            Balance: $${element.Money}
            <br><br>
            <button onclick="selectPlayer(${index})">Change Balance</button>
        </div>
    `;
    });
}

//Read for transaction button press
document.getElementById("transaction-button").addEventListener("click", () => {

    transactionDiv.innerHTML += 
        `
            <br><br>
            Withdrawal From: 
        `;

    populateSelect(1);

    transactionDiv.innerHTML += 
        `
            <br>
            Deposit To: 
        `;

    populateSelect(2);

    transactionDiv.innerHTML += 
    `
        <br><br> Amount: <input id="transaction-amount-input"> <br><br>
        <button id="transaction-button" onclick="transaction()">Submit</button>
    `;
});

function populateSelect(num) {
    transactionDiv.innerHTML += `<Select name="player1" id="player${num}Select">`;

    for(let i = 0; i < playerData.length; i++) {
        document.getElementById(`player${num}Select`).innerHTML += 
        `
            <option value="${i}">${playerData[i].Name}</option>
        `;
    }
}


