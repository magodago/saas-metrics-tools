<script>
document.getElementById('saasForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const coste_adquisicion = document.getElementById('coste_adquisicion').value;
    const clientes_nuevos = document.getElementById('clientes_nuevos').value;
    const valor_medio = document.getElementById('valor_medio').value;
    const frecuencia = document.getElementById('frecuencia').value;
    const vida_cliente = document.getElementById('vida_cliente').value;
    const clientes_perdidos = document.getElementById('clientes_perdidos').value;
    const total_clientes = document.getElementById('total_clientes').value;

    if (isNaN(coste_adquisicion) || isNaN(clientes_nuevos) || isNaN(valor_medio) || 
        isNaN(frecuencia) || isNaN(vida_cliente) || isNaN(clientes_perdidos) ||
        isNaN(total_clientes)) {
        alert("Por favor, asegúrate de ingresar todos los valores.");
        return;
    }

    const CAC = coste_adquisicion / clientes_nuevos;
    const LTV = valor_medio * frecuencia * vida_cliente;
    const churnRate = (clientes_perdidos / total_clientes) * 100;

    document.getElementById('result').innerText = `
        <p>CAC: ${CAC.toFixed(2)}€</p>
        <p>LTV: ${LTV.toFixed(2)}€</p>
        <p>Churn: ${churnRate.toFixed(2)}%</p>
    `;
});
</script>