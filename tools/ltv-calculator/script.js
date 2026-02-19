<script>
document.getElementById('ltvForm').onsubmit = function(e) {
    e.preventDefault();
    
    const avgRevenuePerUser = parseFloat(document.getElementById('avgRevenuePerUser').value);
    const customerRetentionRate = parseFloat(document.getElementById('customerRetentionRate').value);

    if (isNaN(avgRevenuePerUser) || isNaN(customerRetentionRate)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    const retentionRate = customerRetentionRate / 100; // convert to decimal
    const churnRate = 1 - retentionRate;

    let months = 12; // base calculation for yearly

    let ltv = avgRevenuePerUser * (1 - Math.pow(churnRate, months));

    document.getElementById('result').innerText = `LTV: $${ltv.toFixed(2)}`;
}
</script>