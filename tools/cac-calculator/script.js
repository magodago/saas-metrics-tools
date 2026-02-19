<script>
document.getElementById('cacForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const marketingCost = parseFloat(document.getElementById('marketingCost').value);
    const newCustomers = parseInt(document.getElementById('newCustomers').value);

    if (isNaN(marketingCost) || isNaN(newCustomers)) {
        alert("Por favor, asegúrate de que los campos sean números válidos.");
        return;
    }

    const cac = marketingCost / newCustomers;

    document.getElementById('result').innerText = `El CAC por cliente es: $${cac.toFixed(2)}`;
});
</script>