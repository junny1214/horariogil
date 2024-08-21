document.addEventListener("DOMContentLoaded", function() {
    const highlights = document.querySelectorAll('.highlight');

    highlights.forEach(cell => {
        cell.addEventListener('click', () => {
            alert(`Clase: ${cell.textContent}\nHora: ${cell.parentElement.children[0].textContent}\nDía: ${cell.parentElement.parentElement.children[0].children[cell.cellIndex].textContent}`);
        });
    });
});
