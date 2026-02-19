<script>
document.getElementById('cac-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const marketingCost = document.getElementById('marketing-cost').value;
    const newCustomers = document.getElementById('new-customers').value;
    const cac = parseFloat(marketingCost) / parseInt(newCustomers);
    document.getElementById('result').innerText = `CAC por cliente: €${cac.toFixed(2)}`;
});
</script>