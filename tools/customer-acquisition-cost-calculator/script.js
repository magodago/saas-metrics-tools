<script>
document.getElementById('cac-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const totalCost = parseFloat(document.getElementById('total-cost').value);
    const newCustomers = parseInt(document.getElementById('new-customers').value);

    if (isNaN(totalCost) || isNaN(newCustomers) || totalCost <= 0 || newCustomers < 0) {
        alert("Por favor, verifica los valores ingresados.");
        return;
    }

    const cac = totalCost / newCustomers;
    document.getElementById('result').innerHTML = `<p><strong>Costo de Adquisición del Cliente (CAC): $${cac.toFixed(2)}</strong></p>`;
});
</script>