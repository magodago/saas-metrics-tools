<script>
document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const totalCost = parseFloat(document.getElementById('totalCost').value);
    const newCustomers = parseInt(document.getElementById('newCustomers').value);
    const avgValue = parseFloat(document.getElementById('avgValue').value);
    const frequency = parseFloat(document.getElementById('frequency').value);
    const customerLifetime = parseInt(document.getElementById('customerLifetime').value);
    const churnRate = parseFloat(document.getElementById('churnRate').value);

    if (isNaN(totalCost) || isNaN(newCustomers) || isNaN(avgValue) || isNaN(frequency) || isNaN(customerLifetime) || isNaN(churnRate)) {
        document.getElementById('result').textContent = 'Por favor, asegúrate de ingresar valores numéricos válidos.';
        return;
    }

    const CAC = totalCost / newCustomers;
    const LTV = avgValue * frequency * customerLifetime;
    const resultRatio = (LTV - CAC) / LTV;

    document.getElementById('result').textContent = `El ratio CAC a LTV es: ${resultRatio.toFixed(2)};`;
});
</script>