<script>
document.getElementById('roiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const costoTotalAdquisicion = parseFloat(document.getElementById('costoTotalAdquisicion').value);
    const numeroClientesNuevos = parseInt(document.getElementById('numeroClientesNuevos').value, 10);
    const valorMedio = parseFloat(document.getElementById('valorMedio').value);
    const frecuencia = parseFloat(document.getElementById('frecuencia') ? document.getElementById('frecuencia').value : 0);
    const vidaDelCliente = parseInt(document.getElementById('vidaDelCliente').value, 10);

    if (isNaN(costoTotalAdquisicion) || isNaN(numeroClientesNuevos) || isNaN(vidaDelCliente)) {
        alert("Por favor, ingresa valores numéricos válidos.");
        return;
    }

    const CAC = costoTotalAdquisicion / numeroClientesNuevos;
    const LTV = (valorMedio * frecuencia * vidaDelCliente);
    const churnRate = (1 - (numeroClientesNuevos / numeroClientesNuevos)) * 100; // Simulación para la tasa de cancelaciones

    let roi = (LTV - CAC) / CAC * 100;

    if (isNaN(roi)) {
        alert("Error en el cálculo, por favor revisa los datos ingresados.");
        return;
    }

    document.getElementById('resultado').innerHTML = `<p>Resultado: ROI = ${roi.toFixed(2)}%</p>`;
});
</script>