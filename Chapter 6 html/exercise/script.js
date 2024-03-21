// this code will trigger the calculation when i press enter
document.getElementById('cost').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      calculateTotalCost();
    }
  });
  
  document.getElementById('liters').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      calculateTotalCost();
    }
  });
  
  //this is the function to calculate total cost
  function calculateTotalCost() {
    // Fetching input values
    const costPerLiter = parseFloat(document.getElementById('cost').value);
    const litersPurchased = parseFloat(document.getElementById('liters').value);
    const gasType = document.getElementById('gas-type').value;
  
    // this funcyion is for checking the gas type and calculating total cost
    let totalCost;
    if (gasType === 'petrol') {
      totalCost = costPerLiter * litersPurchased;
    } else if (gasType === 'diesel') {
      const dieselCostPerLiter = 1.5;
      totalCost = dieselCostPerLiter * litersPurchased;
    }

  
    // displaying total cost
    document.getElementById('total-cost').textContent = `Total Cost: $${totalCost.toFixed(2)}`;
  }
  
  // Adding event listener to the Calculate button
  document.getElementById('calculate').addEventListener('click', calculateTotalCost);
  