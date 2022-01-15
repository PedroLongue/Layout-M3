const mobileNavBar = () => {
    const toggleOptions = document.querySelector('.header-page-nav-burguer-button');
    function toggleMenu() {
        const nav = document.querySelector('.header-page-nav');
        nav.classList.toggle('active');
    }
    
    toggleOptions.addEventListener('click', toggleMenu);
}

export default mobileNavBar;