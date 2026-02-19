<script>
function calculateChurn() {
    const initialCustomers = document.getElementById('initialCustomers').value;
    const lostCustomers = document.getElementById('lostCustomers').value;

    if (isNaN(initialCustomers) || isNaN(lostCustomers)) {
        alert("Por favor, ingresa valores numéricos.");
        return;
    }

    const churnRate = (lostCustomers / initialCustomers) * 100;
    document.getElementById('result').innerText = `Churn Rate: ${churnRate.toFixed(2)}%`;
}
</script>