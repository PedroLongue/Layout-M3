const bottomBanner = () => {
    const bottom = document.querySelector('.bottom-banner');
    let bottomStructure = '';

    bottomStructure = `
        <div class="bottom-banner-image-wrapper">
            <img class="bottom-banner-image-desktop" src="../assets/images/bottomBannerLogoM3Desktop.png" alt="Logo da Agência M3" />
            <img class="bottom-banner-image-tablet" src="../assets/images/bottomBannerLogoM3Tablet.png" alt="Logo da Agência M3" />
            <img class="bottom-banner-image-mobile" src="../assets/images/bottomBannerLogoM3Mobile.png" alt="Logo da Agência M3" />
        </div>

        <div class="bottom-banner-info-card">
            <div class="bottom-banner-info-card-personal-information
            ">
                <h1 class="bottom-banner-info-card-personal-information-greetings">olá!</h1>
                <h2 class="bottom-banner-info-card-personal-information-phone">+55 11 9999 9999</h2>
                <h3 class="bottom-banner-info-card-personal-information-email">m3academy@digitalm3.com.br</h3>
            </div>
            <div class="bottom-banner-info-card-general-information
            ">
                <h2 class="bottom-banner-info-card-general-information-city">Nova Friburgo</h2>
                <h3 class="bottom-banner-info-card-general-information-city-phone">+55 99999999</h3>
            </div>
        </div>
    `

    bottom.innerHTML = bottomStructure;
}

export default bottomBanner;