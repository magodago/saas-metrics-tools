<script>
document.getElementById('converterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mrr = document.getElementById('mrr').value;
    if (!mrr || isNaN(mrr)) {
        alert("Por favor, ingresa un valor válido para MRR.");
        return;
    }
    
    const result = (parseFloat(mrr) * 12).toFixed(2);
    document.getElementById('result').innerText = `ARR: $${result}`;
    document.getElementById('resultArea').style.display = 'block';
});
</script>