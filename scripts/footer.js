const footerPage = () => {
    const footer = document.querySelector('.footer-page');
    let footerStructure = `
        <div class="footer-page-site-wrapper">
            <span class="footer-page-site">www.digitalm3.com.br</span>
        </div>

        <ul class="footer-page-image-wrapper">
            <li>
                <a href="https://www.facebook.com/digitalm3" target="_blank"> 
                    <img class="footer-page-image-facebook-desktop" src="../assets/images/facebookDesktop.png" alt="icone facebook" />
                    <img class="footer-page-image-facebook-tablet" src="../assets/images/facebookTablet.png" alt="icone facebook" />
                    <img class="footer-page-image-facebook-mobile" src="../assets/images/facebookMobile.png" alt="icone facebook" />
                </a>
            </li>

            <li>
                <a href="https://www.instagram.com/m3.ecommerce/" target="_blank">
                    <img class="footer-page-image-instagram-desktop" src="../assets/images/instagramDesktop.png" alt="icone instagram" />
                    <img class="footer-page-image-instagram-tablet" src="../assets/images/instagramTablet.png" alt="icone instagram" />
                    <img class="footer-page-image-instagram-mobile" src="../assets/images/instagramMobile.png" alt="icone instagram" />
                </a>
            </li>

            <li>
                <a href="https://www.linkedin.com/company/m3ecommerce/" target="_blank">
                    <img class="footer-page-image-linkedIn-desktop" src="../assets/images/linkedInDesktop.png" alt="icone linkedin" />
                    <img class="footer-page-image-linkedIn-tablet" src="../assets/images/linkedInTablet.png" alt="icone linkedin" />
                    <img class="footer-page-image-linkedIn-mobile" src="../assets/images/linkedInMobile.png" alt="icone linkedin" />
                </a>
            </li>
        </ul>
    `

    footer.innerHTML = footerStructure;
}

export default footerPage;