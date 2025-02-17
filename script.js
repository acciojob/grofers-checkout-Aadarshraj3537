// Create the "Get Total Price" button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    
    let prices = document.querySelectorAll(".price");

    let total = 0;
    prices.forEach(price => {
        total += parseInt(price.innerText);
    });

    let existingTotalRow = document.getElementById("ans");
    if (existingTotalRow) {
        existingTotalRow.parentElement.remove();
    }

    let row = document.createElement("tr");

    let cell = document.createElement("td");
    cell.textContent = `Total Price: Rs ${total}`;
    cell.id = "ans";
    cell.colSpan = 2;  

    row.appendChild(cell);
    document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

   