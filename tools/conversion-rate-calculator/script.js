<script>
document.getElementById('conversionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const totalVisits = document.getElementById('totalVisits').value;
    const conversions = document.getElementById('conversions').value;

    if (totalVisits === '' || conversions === '') {
        alert('Por favor, ingresa los valores para ambos campos.');
        return;
    }

    const conversionRate = (conversions / totalVisits) * 100;
    document.getElementById('conversionRate').textContent = `Tasa de Conversión: ${conversionRate.toFixed(2)}%`;

    document.getElementById('resultArea').classList.remove('hidden');
});
</script>