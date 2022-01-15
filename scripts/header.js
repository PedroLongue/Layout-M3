const headerPage = () => {
    const head = document.querySelector('.header-page');
    let headStructure = '';

    headStructure = `
        <nav class="header-page-wrapper">
            <div class="header-page-image">
                <img class="logo-M3-desktop" src="../assets/images/logoM3Desktop.png" alt="Logo da Agência M3" />
                <img class="logo-M3-tablet" src="../assets/images/logoM3Tablet.png" alt="Logo da Agência M3" />
                <img class="logo-M3-mobile" src="../assets/images/logoM3Mobile.png" alt="Logo da Agência M3" />
            </div>
            <div class="header-page-nav"> 
                <button class="header-page-nav-burguer-button">
                    <span class="header-page-nav-burguer-icon"></span>    
                </button>
                
                <ul class="header-page-nav-list">
                    <li class="header-page-services-link-wrapper">
                        <a class="header-page-services-link" href="/">Serviços</a>
                    </li>
                    
                    <li class="header-page-blog-link-wrapper">
                        <a class="header-page-blog-link" href="/">Blog</a>
                    </li>
                    
                        <li class="header-page-customers-link-wrapper">
                    <a class="header-page-customers-link" href="/">Clientes</a>
                    </li>
                    
                    <li class="header-page-contacts-link-wrapper">
                        <a class="header-page-contacts-link" href="/">Contato</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        `

    head.innerHTML = headStructure;
}

export default headerPage;