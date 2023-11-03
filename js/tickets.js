document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("resumen").addEventListener("click", function () {
        // Obtener la categoría seleccionada
        var categoria = document.getElementById("categoria").value;
        var cantidadTickets = parseInt(document.getElementById("cantidadTickets").value);

        if (cantidadTickets>= 0) {

            var precioPorTicket = 1500; // Precio por ticket

            var descuento = 0;

            if (categoria === "estudiante") {
                descuento = 0.8; // 80% de descuento
            } else if (categoria === "trainee") {
                descuento = 0.5; // 50% de descuento
            } else if (categoria === "junior") {
                descuento = 0.15; // 15% de descuento
            }

            // Calcular el total con descuento
            var total = cantidadTickets * precioPorTicket * (1 - descuento);

            // Redondear el total a 2 decimales
            total = total.toFixed(2);

            // Mostrar el total
            document.getElementById("total").textContent = total;
        } else {
            alert("Indica una cantidad de tickets valida para hacer el resumen.");
        }
    });
    document.getElementById("borrar").addEventListener("click", function () {
        var form = document.getElementById("ticket_form");
        form.reset();
        document.getElementById("total").textContent = "0";
    });
    
});
