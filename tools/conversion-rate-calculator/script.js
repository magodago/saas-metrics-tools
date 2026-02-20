<script>
document.getElementById('metricsForm').addEventListener('submit', calculateMetrics);

function calculateMetrics() {
    const totalCost = parseFloat(document.getElementById('totalCost').value);
    const newCustomers = parseInt(document.getElementById('newCustomers').value);
    const avgValue = parseFloat(document.getElementById('avgValue').value);
    const frequency = parseFloat(document.getElementById('frequency') ? document.getElementById('frequency').value : 12);
    const customerLife = parseInt(document.getElementById('customerLife').value);
    const lostCustomers = parseInt(document.getElementById('lostCustomers').value);

    if (isNaN(totalCost) || isNaN(newCustomers) || isNaN(avgValue) || isNaN(customerLife) || isNaN(lostCustomers)) {
        alert("Por favor, rellena todos los campos correctamente.");
        return;
    }

    const churnRate = ((lostCustomers / newCustomers) * 100).toFixed(2);
    const CAC = (totalCost / newCustomers).toFixed(2);
    const LTV = (avgValue * frequency * customerLife).toFixed(2);

    document.getElementById('results').innerHTML = `
        <p>Churn Rate: ${churnRate}%</p>
        <p>CAC: $${CAC}</p>
        <p>LTV: $${LTV}</p>
    `;
}
</script>