<script>
document.getElementById('runway-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const CAC = parseFloat(document.querySelector('#costeTotalAdquisicion').value);
    const clientesNuevos = parseInt(document.querySelector('#numeroClientesNuevos').value);
    const LTV = parseFloat(document.querySelector('#valorMedio').value);
    const frecuencia = parseFloat(document.querySelector('#frecuencia').value);
    const vidaCliente = parseInt(document.querySelector('#vidaCliente').value);
    const clientesPerdidos = parseInt(document.querySelector('#clientesPerdidos').value);

    if (isNaN(CAC) || isNaN(clientesNuevos) || isNaN(LTV) || isNaN(frecuencia) || isNaN(vidaCliente) || isNaN(clientesPerdidos)) {
        document.getElementById('resultado').innerText = "Por favor, asegúrate de llenar todos los campos correctamente.";
        return;
    }

    const CAC_calculado = CAC / clientesNuevos;
    const LTV_calculado = LTV * frecuencia * vidaCliente;
    const churnRate = (clientesPerdidos / (clientesNuevos + clientesPerdidos)) * 100;

    let runway = (LTV_calculado - CAC_calculado) / (churnRate / 100);

    document.getElementById('resultado').innerText = `Runway calculado: ${runway.toFixed(2)} meses`;
});
</script>