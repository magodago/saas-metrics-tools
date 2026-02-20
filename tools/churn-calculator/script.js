<script>
document.getElementById('churnRateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const totalCustomers = parseInt(document.getElementById('totalCustomers').value);
    const lostCustomers = parseInt(document.getElementById('lostCustomers').value);

    if (isNaN(totalCustomers) || isNaN(lostCustomers)) {
        alert("Por favor, ingresa valores numéricos.");
        return;
    }

    const churnRate = ((lostCustomers / totalCustomers) * 100).toFixed(2);
    
    document.getElementById('resultContainer').innerHTML = `
      <p>La tasa de apretura es: ${churnRate}%</p>
    `;
});
</script>