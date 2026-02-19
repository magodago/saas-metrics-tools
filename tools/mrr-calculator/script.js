<script>
document.getElementById('mrr-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const numCustomersFree = parseFloat(document.getElementById('num-customers-free').value);
    const priceFree = parseFloat(document.getElementById('price-free').value);
    const numCustomersPaid = parseFloat(document.getElementById('num-customers-paid').value);
    const pricePaid = parseFloat(document.getElementById('price-paid').value);

    const mrrTotal = (numCustomersFree * priceFree) + (numCustomersPaid * pricePaid);
    document.getElementById('mrr-total').innerText = mrrTotal.toFixed(2);
});
</script>