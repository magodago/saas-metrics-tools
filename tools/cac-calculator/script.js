<script>
document.getElementById('cac-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const costPerAcquisition = document.getElementById('cost-per-acquisition').value;
    const totalRevenue = document.getElementById('total-revenue').value;

    if (!costPerAcquisition || !totalRevenue) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const cacResult = parseFloat(totalRevenue) / parseFloat(costPerAcquisition);
    document.getElementById('cac-result').innerText = `Tu CAC es: $${cacResult.toFixed(2)}`;
});
</script>