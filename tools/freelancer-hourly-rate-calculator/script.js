<script>
document.getElementById('freelancer-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const costoMensual = parseFloat(document.getElementById('costo-mensual').value);
    const precioHoraCliente = parseFloat(document.getElementById('precio-hora-cliente').value);
    const horasSemanalesTrabajo = parseFloat(document.getElementById('horas-semanales-trabajo').value);

    if (isNaN(costoMensual) || isNaN(precioHoraCliente) || isNaN(horasSemanalesTrabajo)) {
        alert("Por favor, asegúrate de ingresar valores numéricos.");
        return;
    }

    const tarifaHoraria = (costoMensual / 12 / horasSemanalesTrabajo * 52).toFixed(2);
    
    document.getElementById('tarifa-horaria').innerText = `Tarifa horaria recomendada: ${tarifaHoraria}€`;
});
</script>