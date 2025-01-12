function copyRow(button) {
    const rowToCopy = button.closest('tr');
    const rowData = Array.from(rowToCopy.children).map(cell => cell.innerText);
    
    // Usar AJAX para enviar los datos a PHP
    fetch('guardar_curso.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(rowData)
    })
    .then(response => response.json())
    .then(data => {
        alert("Fila copiada.");
    })
    .catch(error => console.error('Error:', error));
}