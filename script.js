const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
    let total = 0;

    // Select all elements with class "prices"
    let prices = document.querySelectorAll(".prices");

    prices.forEach(price => {
        let value = price.textContent.trim().replace(/[^0-9.]/g, ""); // Remove non-numeric characters
        total += parseFloat(value) || 0; // Convert text to number
    });

    let table = document.querySelector("table");
    if (!table) {
        console.error("Table not found!");
        return; // Exit function if table is missing
    }

    // Remove existing total row if present
    let existingTotalRow = document.getElementById("total-row");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create new total row
    let newRow = document.createElement("tr");
    newRow.id = "total-row";

    let newCell = document.createElement("td");
    newCell.colSpan = 2;
    newCell.style.fontWeight = "bold";
    newCell.style.textAlign = "center";
    newCell.textContent = `Total Price: ₹${total.toFixed(2)}`;

    newRow.appendChild(newCell);

    // Append total row

   