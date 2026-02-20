<script>
document.getElementById('converterForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const mrr = document.querySelector('#mrr').value;
    if (mrr === '') {
        alert('Por favor, ingresa el valor de MRR.');
        return;
    }

    const periodoSelect = document.querySelector('#periodo');
    const periodo = parseInt(periodoSelect.value);
    let arr;

    if (!isNaN(mrr)) {
        arr = mrr * periodo;
        document.getElementById('result').innerText = `ARR: ${arr.toFixed(2)} millones`;
    } else {
        alert('Por favor, ingresa un valor numérico para MRR.');
    }
});
</script>