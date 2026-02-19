<script>
document.getElementById('churn-form').onsubmit = function(e) {
    e.preventDefault();
    const initialCustomers = parseInt(document.getElementById('initial-customers').value);
    const lostCustomers = parseInt(document.getElementById('lost-customers').value);

    if(isNaN(initialCustomers) || isNaN(lostCustomers)) {
        document.getElementById('result').innerText = "Por favor, ingresa valores numéricos válidos.";
        return;
    }

    const churnRate = (lostCustomers / initialCustomers) * 100;
    document.getElementById('result').innerText = `Churn Rate: ${churnRate.toFixed(2)}%`;
}
</script>