const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    let total = 0;

    // Select all elements with class "prices"
    let prices = document.querySelectorAll(".prices");

    prices.forEach(price => {
        total += parseFloat(price.textContent) || 0; // Convert text to number
    });

    // Check if a total row already exists, remove it to prevent duplication
    let existingTotalRow = document.getElementById("total-row");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for total price
    let table = document.querySelector("table");
    let newRow = document.createElement("tr");
    newRow.id = "total-row"; // Set ID to avoid duplicate rows
    let newCell = document.createElement("td");

    // Span across all columns to display total price
    newCell.colSpan = 2;
    newCell.style.fontWeight = "bold";
    newCell.style.textAlign = "center";
    newCell.textContent = `Total Price: ₹${total.toFixed(2)}`;

    newRow.appendChild(newCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);


