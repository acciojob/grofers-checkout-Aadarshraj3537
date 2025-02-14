const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    let total = 0;

    let prices = document.querySelectorAll(".prices");

    prices.forEach(price => {
        total += parseFloat(price.textContent) || 0; 
    });

    let existingTotalRow = document.getElementById("total-row");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }


    let table = document.querySelector("table");
    let newRow = document.createElement("tr");
    newRow.id = "total-row"; 
    let newCell = document.createElement("td");

    newCell.colSpan = 2;
    newCell.style.fontWeight = "bold";
    newCell.style.textAlign = "center";
    newCell.textContent = `Total Price: ₹${total.toFixed(2)}`;

    newRow.appendChild(newCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);


