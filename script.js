const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  let sum = 0;
    let prices = document.querySelectorAll(".price");

    for (let price of prices) {
        sum += parseFloat(price.textContent) || 0;
    }

    document.getElementById("total").textContent = sum;
  
};

getSumBtn.addEventListener("click", getSum);

