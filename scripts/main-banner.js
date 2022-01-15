const mainBanner = () => {
    const banner = document.querySelector('.top-main-banner');
    let bannerStructure = '';

    bannerStructure = `
        <div class="main-banner-wrapper">            
            <div class="main-banner-title">
                <h1 class="main-banner-title-style">Mais um evento </br> de sucesso!</h1>
            </div>

            <div class="main-banner-logo-m3-image">
                <img class="main-banner-logo-m3-image-desktop-style" src="../assets/images/mainBannerLogoM3Desktop.png" alt="Logo da Agência M3" />
                <img class="main-banner-logo-m3-image-tablet-style" src="../assets/images/mainBannerLogoM3Tablet.png" alt="Logo da Agência M3" />
                <img class="main-banner-logo-m3-image-mobile-style" src="../assets/images/mainBannerLogoM3Mobile.png" alt="Logo da Agência M3" />
            </div>

            <div class="main-banner-elements-wrapper">
                <div class="main-banner-m3-academy"> 
                    <img class="main-banner-logo-m3-academy-image-desktop-style" src="../assets/images/mainBannerLogoM3AcademyDesktop.png" alt="Logo da M3 Academy" />
                    <img class="main-banner-logo-m3-academy-image-tablet-style" src="../assets/images/mainBannerLogoM3AcademyTablet.png" alt="Logo da M3 Academy" />
                    <img class="main-banner-logo-m3-academy-image-mobile-style" src="../assets/images/mainBannerLogoM3AcademyMobile.png" alt="Logo da M3 Academy" />
                </div>

                <div class="main-banner-lecture-image"> 
                    <img class="main-banner-lecture-image-desktop-style" src="../assets/images/mainBannerLectureDesktop.png" alt="Evento" />
                    <img class="main-banner-lecture-image-tablet-style" src="../assets/images/mainBannerLectureTablet.png" alt="Evento"/>
                    <img class="main-banner-lecture-image-mobile-style" src="../assets/images/mainBannerLectureMobile.png" alt="Evento"/>
                </div>
            <div>
        </div>
    `

    banner.innerHTML = bannerStructure;
}

export default mainBanner;