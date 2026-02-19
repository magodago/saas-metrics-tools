<script>
document.getElementById('conversion-rate-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const totalVisits = parseInt(document.getElementById('total-visits').value);
    const conversions = parseInt(document.getElementById('conversions').value);

    if (isNaN(totalVisits) || isNaN(conversions)) {
        alert('Por favor, ingresa valores numéricos válidos.');
        return;
    }

    const conversionRate = (conversions / totalVisits) * 100;
    
    document.getElementById('conversion-rate-result').innerText = `Tasa de conversión: ${conversionRate.toFixed(2)}%`;
});
</script>