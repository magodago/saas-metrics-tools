<script>
document.getElementById('ltvForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const monthlyRevenue = parseFloat(document.getElementById('monthlyRevenue').value);
    const customerLifetimeValue = parseFloat(document.getElementById('customerLifetimeValue').value);
    const customerAcquisitionCost = parseFloat(document.getElementById('customerAcquisitionCost').value);

    if (isNaN(monthlyRevenue) || isNaN(customerLifetimeValue) || isNaN(customerAcquisitionCost)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    const ltvResult = monthlyRevenue * customerLifetimeValue / customerAcquisitionCost;
    document.getElementById('ltvResult').innerText = ltvResult.toFixed(2);

    const roiResult = (customerLifetimeValue - customerAcquisitionCost) / customerAcquisitionCost;
    document.getElementById('roiResult').innerText = roiResult.toFixed(4);
    
    document.getElementById('result').style.display = 'block';
});
</script>