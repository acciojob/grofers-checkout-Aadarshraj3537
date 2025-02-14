const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
    let total = 0;

	let prices = document.querySelectorAll(".prices");

    prices.forEach(price => {
        let value = price.textContent.trim().replace(/[^0-9.]/g, ""); // Remove non-numeric characters
        total += parseFloat(value) || 0;
    });

    let table = document.querySelector("table");
    if (!table) {
        console.error("Table not found!");
        return; 
    }

   