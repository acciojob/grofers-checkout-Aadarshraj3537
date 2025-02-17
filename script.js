// Create the "Get Total Price" button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Get all price elements
    let prices = document.querySelectorAll(".price");

    let total = 0;
    prices.forEach(price => {
        total += parseInt(price.innerText);
    });

    // Remove existing total row if it exists
    let existingTotalRow = document.getElementById("ans");
    if (existingTotalRow) {
        existingTotalRow.parentElement.remove();
    }

    // Create a new row for the total price
    let row = document.createElement("tr");

    let cell = document.createElement("td");
    cell.textContent = `Total Price: Rs ${total}`;
    cell.id = "ans";
    cell.colSpan = 2;  // Spans across columns

    row.appendChild(cell);
    document.querySelector("table").appendChild(row);
};

// Attach event listener to button
getSumBtn.addEventListener("click", getSum);

   