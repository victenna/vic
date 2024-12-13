// Функция для добавления класса 'active' к активной ссылке
    function setActiveLink() {
        const links = document.querySelectorAll("nav a");
        const currentPath = window.location.pathname;

        links.forEach((link) => {
            if (currentPath.endsWith(link.getAttribute('href'))) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    // Вызов функции при загрузке страницы
    document.addEventListener("DOMContentLoaded", setActiveLink);

    // Вызов функции при клике по ссылке
    document.querySelectorAll("nav a").forEach((link) => {
        link.addEventListener("click", function() {
            
            
            setActiveLink();
        });
    });