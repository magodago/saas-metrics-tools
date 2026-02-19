<script>
document.getElementById('roi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const budget = document.getElementById('budget').value;
    const revenue = document.getElementById('revenue').value;
    const costs = document.getElementById('costs').value;

    if (!budget || !revenue || !costs) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const roiValue = (100 * (revenue - costs)) / budget;
    document.getElementById('roi-value').innerText = `ROI: ${roiValue.toFixed(2)}%`;
    
    setTimeout(() => {
        document.querySelector('.result').style.animation = 'fadeIn 1s ease';
    }, 500);
});

</script>