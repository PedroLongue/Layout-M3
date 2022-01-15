import headerPage from './header.js';
import mobileNavBar from './mobile-navbar.js';
import mainBanner from './main-banner.js';
import middleDescription from './middle-description.js';
import middleBanner from './middle-banner.js';
import bottomBanner from './bottom-banner.js';
import footerBanner from './footer-banner.js';
import footerPage from './footer.js'

document.addEventListener('DOMContentLoaded', () => {
    headerPage();
    mobileNavBar();
    mainBanner();
    middleDescription();
    middleBanner();
    bottomBanner();
    footerBanner();
    footerPage();
});