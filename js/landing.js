document.addEventListener('DOMContentLoaded', function() {
    fetch('/js/Datos_Climaticos_Piura_2020.json')
        .then(response => response.json())
        .then(data => {
            const tabla = document.getElementById('datos-climaticos');
            tabla.innerHTML = '<tr><th>Fecha</th><th>Temperatura (°C)</th><th>Tipo de nubes</th><th>Cobertura nubosa</th></tr>';
            data.forEach(registro => {
                tabla.innerHTML += `<tr>
                    <td>${registro.Fecha}</td>
                    <td>${registro['Temperatura (°C)']}</td>
                    <td>${registro['Tipo de nubes']}</td>
                    <td>${registro['Cobertura nubosa']}</td>
                </tr>`;
            });
        });
});