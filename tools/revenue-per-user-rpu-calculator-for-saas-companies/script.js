<script>
document.getElementById('rpuForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const totalRevenue = parseFloat(document.getElementById('totalRevenue').value);
    const numberOfUsers = parseInt(document.getElementById('numberOfUsers').value);

    if (isNaN(totalRevenue) || isNaN(numberOfUsers)) {
        document.getElementById('rpuResult').innerText = 'Por favor, ingresa valores numéricos válidos.';
        return;
    }

    const rpu = totalRevenue / numberOfUsers;
    document.getElementById('rpuResult').innerText = `RPU: ${rpu.toFixed(2)}€`;
});
</script>