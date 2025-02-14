const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    let total = 0;

    // Select all table cells that contain prices (assuming they have a class "price")
    let prices = document.querySelectorAll(".price");

    prices.forEach(price => {
        total += parseFloat(price.textContent) || 0; // Convert to number and add
    });

    // Display total price
    alert(`Total Price: $${total.toFixed(2)}`);
};

getSumBtn.addEventListener("click", getSum);




