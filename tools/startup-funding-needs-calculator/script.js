<script>
document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const costeTotalAdquisicion = document.querySelector('#costeTotalAdquisicion').value;
    const numeroClientesNuevos = document.querySelector('#numeroClientesNuevos').value;
    const valorMedio = document.querySelector('#valorMedio').value;
    const frecuencia = document.querySelector('#frecuencia').value;
    const vidaDelCliente = document.querySelector('#vidaDelCliente').value;
    const clientesPerdidos = document.querySelector('#clientesPerdidos').value;

    if (!costeTotalAdquisicion || !numeroClientesNuevos || !valorMedio || !frecuencia || !vidaDelCliente || !clientesPerdidos) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const CAC = costeTotalAdquisicion / numeroClientesNuevos;
    const LTV = valorMedio * frecuencia * vidaDelCliente;
    const churnRate = (clientesPerdidos / (numeroClientesNuevos + clientesPerdidos)) * 100;

    document.getElementById('resultado').innerHTML = `
        <p><strong>Costo de Adquisición (CAC):</strong> $${CAC.toFixed(2)}</p>
        <p><strong>Lifetime Value (LTV):</strong> $${LTV}</p>
        <p><strong>Tasa de Renuncia:</strong> ${churnRate.toFixed(2)}%</p>
    `;
});
</script>