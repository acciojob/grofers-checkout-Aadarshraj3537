const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    let total = 0;

    let prices = document.querySelectorAll(".price");

    prices.forEach(price => {
        total += parseFloat(price.textContent) || 0; 
    });

    alert(`Total Price: $${total.toFixed(2)}`);
};

getSumBtn.addEventListener("click", getSum);

