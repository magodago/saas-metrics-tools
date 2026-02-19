<script>
document.getElementById('mrr-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const numCustomersBasic = parseInt(document.getElementById('num-customers-basic').value, 10);
    const priceBasic = parseFloat(document.getElementById('price-basic').value);
    const numCustomersPremium = parseInt(document.getElementById('num-customers-premium').value, 10);
    const pricePremium = parseFloat(document.getElementById('price-premium').value);

    const mrrTotal = (numCustomersBasic * priceBasic) + (numCustomersPremium * pricePremium);

    document.getElementById('result').innerText = `MRR Total: €${mrrTotal.toFixed(2)}`;
});
</script>