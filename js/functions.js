const tableBody = document.getElementById('randomTable').getElementsByTagName('tbody')[0];
const addRowButton = document.getElementById('addRowButton');
const wildcardCountDisplay = document.getElementById('wildcardCount');
let wildcardCount = 0;

addRowButton.addEventListener('click', addRandomRow);

function addRandomRow() {

    const newRow = tableBody.insertRow();

    for (let i = 0; i < 7; i++) {

        const newCell = newRow.insertCell();
        newCell.textContent = Math.floor(Math.random() * 10);

    }

    wildcardCount++;
    wildcardCountDisplay.textContent = `Valmiita rivejä ${wildcardCount}`;
}