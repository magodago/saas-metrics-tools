<script>
document.getElementById('mrr-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const monthlyPrice = document.getElementById('monthly-subscription-price').value;
    const totalCustomers = document.getElementById('total-customers').value;
    const annualGrowthRate = document.getElementById('annual-growth-rate').value;

    if (monthlyPrice === '' || totalCustomers === '' || annualGrowthRate === '') {
        alert('Por favor, llena todos los campos.');
        return;
    }

    const monthlyGrowthRate = (annualGrowthRate / 100) / 12;
    const mrr = ((monthlyPrice * totalCustomers) * (1 + monthlyGrowthRate)).toFixed(2);

    document.getElementById('mrr-result').textContent = `El Monthly Recurring Revenue es: €${mrr}`;
});
</script>