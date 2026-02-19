<script>
document.getElementById('runway-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const currentCash = parseFloat(document.getElementById('current-cash').value);
    const monthlyBurnRate = parseFloat(document.getElementById('monthly-burn-rate').value);

    if (!isNaN(currentCash) && !isNaN(monthlyBurnRate)) {
        const runwayMonths = currentCash / monthlyBurnRate;
        document.getElementById('result').innerText = `Runway restantes: ${runwayMonths.toFixed(2)} meses`;
    } else {
        alert('Por favor, ingresa valores numéricos válidos.');
    }
});
</script>