
function toggleDropdown(id) {
    document.getElementById(id).classList.toggle("show");
}

function closeDropdown(id) {
    document.getElementById(id).classList.remove("show");
}

// Fechar o drop-down se o usuário clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}