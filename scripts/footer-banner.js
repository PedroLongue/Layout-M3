const footerBanner = () => {
    const footerbanner = document.querySelector('.footer-banner');
    let footerbannerStructure = `
        <img class="footer-banner-google-partner" src="../assets/images/footerBannerGoogle.png" alt="Logo do Google Partner" />
        
        <img class="footer-banner-ecommerce" src="../assets/images/footerBannerEcommerce.png" alt="Logo do e-commerce Brasil" />

        <img class="footer-banner-logo-M3" src="../assets/images/bottomBannerLogoM3Tablet.png" alt="Logo da Agência M3" />
    `

    footerbanner.innerHTML = footerbannerStructure;
}

export default footerBanner;