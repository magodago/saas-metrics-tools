<script>
document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const CAC = parseFloat(document.getElementById('costoAdquisicion').value);
    const clientesNuevos = parseInt(document.getElementById('clientesNuevos').value);
    const valorMedio = parseFloat(document.getElementById('valorMedio').value);
    const frecuencia = parseFloat(document.getElementById('frecuencia').value);
    const vidaCliente = parseInt(document.getElementById('vidaCliente').value);
    const clientesPerdidos = parseInt(document.getElementById('clientesPerdidos').value);
    const totalClientes = parseInt(document.getElementById('totalClientes').value);

    if (isNaN(CAC) || isNaN(clientesNuevos) || isNaN(valorMedio) || isNaN(frecuencia) || isNaN(vidaCliente) || isNaN(clientesPerdidos) || isNaN(totalClientes)) {
        alert("Por favor, verifica que todos los campos son números válidos.");
        return;
    }

    const CAC_calculo = CAC / clientesNuevos;
    const LTV_calculo = (valorMedio * frecuencia * vidaCliente);
    const churnRate_calculo = ((clientesPerdidos / totalClientes) * 100).toFixed(2);

    document.getElementById('result').innerText = `
        <p><strong>CAC:</strong> ${CAC_calculo.toFixed(2)}</p>
        <p><strong>LTV:</strong> ${LTV_calculo}</p>
        <p><strong>Churn Rate:</strong> ${churnRate_calculo}%</p>
    `;
});
</script>