const getSumBtn = document.getElementById("getSumBtn");

const getSum = () => {
    const priceElements = document.querySelectorAll('.price');
    let totalPrice = 0;

    priceElements.forEach(function(priceElement) {
        totalPrice += parseInt(priceElement.innerText, 10); 
    });

    // Create a new row in the table for the total price
    const table = document.querySelector('table');
    const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2; 
    totalCell.textContent = Total: Rs ${totalPrice}; 

    // Append the total cell to the new row
    newRow.appendChild(totalCell);

    // Append the new row to the table
    table.appendChild(newRow);

    const ansParagraph = document.getElementById('ans');
    ansParagraph.textContent = Total Price: Rs ${totalPrice};
};

getSumBtn.addEventListener("click", getSum);