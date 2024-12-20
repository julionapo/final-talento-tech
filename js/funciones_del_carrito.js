document.addEventListener("DOMContentLoaded", () => 
    {
    const carritoItemsStorage = JSON.parse(localStorage.getItem('cart')) || [];
    const carritoTableBody = document.getElementById('carrito-items');
    const totalgeneral = document.getElementById('total');
    let total = 0;

 
    // Cargar productos en la tabla del carrito
    carritoItemsStorage.forEach(item => 
    {
        const row = document.createElement('tr');

        // Nombre del producto
        const nombreCelda = document.createElement('td');
        nombreCelda.textContent = item.title;
        row.appendChild(nombreCelda);

        // Precio del producto
        const precioCelda = document.createElement('td');
        precioCelda.textContent = `$${item.price}`;
        row.appendChild(precioCelda);

        // Cantidad (hardcodeado a 1)
        const cantidadCelda = document.createElement('td');
        cantidadCelda.textContent = 1;
        row.appendChild(cantidadCelda);

        // Subtotal
        const subtotal = item.price; 
        const subtotalCelda = document.createElement('td');
        subtotalCelda.textContent = `$${subtotal}`;
        row.appendChild(subtotalCelda);

        // Agregar fila a la tabla
        carritoTableBody.appendChild(row);

        // Sumar al total
        total += subtotal;
    });

    // Mostrar el total
    totalgeneral.textContent = total.toFixed(2);

    // Botón para limpiar el carrito y volver al inicio
    document.getElementById('limpiar-carrito').addEventListener('click', () => 
    {
        localStorage.removeItem('cart'); 
        window.location.href = 'index.html'; 
    });

    // Botón para finalizar la compra con sweet Alert
    document.getElementById('finalizar-compra').addEventListener('click', () => 
    {
        if(carritoItemsStorage.length == 0) {
            Swal.fire({
                title: 'Error',
                text: 'No hay productos en el carrito',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            return;
        }
        let d = new Date();
        // Pseudo generador de codigo unico
        let cu = d.getFullYear() + '' + d.getDay() + d.getHours() + d.getSeconds();
        Swal.fire({
            title: 'Compra Procesada',
            text: 'Se ha procesado la compra #' + cu,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

        // Limpiar el carrito después de finalizar la compra
        localStorage.removeItem('cart'); 
        
        
    });
});















