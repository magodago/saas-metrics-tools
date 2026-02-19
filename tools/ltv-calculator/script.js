<script>
document.getElementById('ltv-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const avgRevenuePerUser = parseFloat(document.getElementById('avg-revenue-per-user').value);
    const retentionRate = parseFloat(document.getElementById('customer-retention-rate').value) / 100;
    
    if (isNaN(avgRevenuePerUser) || isNaN(retentionRate)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }
    
    const ltv = avgRevenuePerUser / (1 - retentionRate);
    document.getElementById('result').innerText = `LTV: $${ltv.toFixed(2)}`;
});
</script>