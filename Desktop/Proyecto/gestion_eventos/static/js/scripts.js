document.addEventListener('DOMContentLoaded', function () {
    // Confirm deletion
    const deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            if (!confirm("¿Estás seguro de que deseas eliminar este elemento?")) {
                event.preventDefault();
            }
        });
    });
});
