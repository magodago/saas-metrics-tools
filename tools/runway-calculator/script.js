<script>
document.getElementById('runway-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const currentCash = parseFloat(document.getElementById('current-cash').value);
    const monthlyBurnRate = parseFloat(document.getElementById('monthly-burn-rate').value);

    if (isNaN(currentCash) || isNaN(monthlyBurnRate)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    const runwayMonths = currentCash / monthlyBurnRate;

    document.getElementById('runway-months').textContent = Math.floor(runwayMonths);
});
</script>