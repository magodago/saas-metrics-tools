<script>
document.getElementById('profit-margin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const revenue = parseFloat(document.getElementById('revenue').value);
    const costOfGoodsSold = parseFloat(document.getElementById('cost-of-goods-sold').value);
    const operatingExpenses = parseFloat(document.getElementById('operating-expenses').value);

    if (isNaN(revenue) || isNaN(costOfGoodsSold) || isNaN(operatingExpenses)) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }

    const grossProfit = revenue - costOfGoodsSold - operatingExpenses;
    const profitMargin = (grossProfit / revenue) * 100;

    document.getElementById('profit-margin-result').innerText = `Margen bruto: ${profitMargin.toFixed(2)}%`;
});
</script>