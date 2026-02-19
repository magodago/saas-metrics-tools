<script>
document.getElementById('ltvForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const costeTotalAdquisicion = document.querySelector('#costeTotalAdquisicion').value;
    const numeroClientesNuevos = document.querySelector('#numeroClientesNuevos').value;
    const valorMedio = document.querySelector('#valorMedio').value;
    const frecuencia = document.querySelector('#frecuencia').value;
    const vidaCliente = document.querySelector('#vidaCliente').value;

    if (isNaN(costeTotalAdquisicion) || isNaN(numeroClientesNuevos) || isNaN(valorMedio) || isNaN(frecuencia) || isNaN(vidaCliente)) {
        alert('Todos los campos deben ser números.');
        return;
    }

    const cac = costeTotalAdquisicion / numeroClientesNuevos;
    const ltv = valorMedio * frecuencia * vidaCliente;
    const churn = (1 - (numeroClientesNuevos / 100)) * 100;

    document.querySelector('#ltvResult').textContent = `LTV: ${ltv.toFixed(2)}`;
    document.querySelector('#cacResult').textContent = `CAC: ${cac.toFixed(2)}`;
    document.querySelector('#churnResult').textContent = `Tasa de rotación (Churn): ${churn.toFixed(2)}%`;
});
</script>