const middleBanner = () => {
    const middle = document.querySelector('.middle-banner');
    let middleStructure = '';

    middleStructure = `
        <div class="middle-banner-image-01-wrapper">
            <img class="middle-banner-image-01" src="../assets/images/middleBanner01.png" alt="Primeira imagem do banner do meio" />
        </div>

        <div class="middle-banner-image-02-wrapper">
            <img class="middle-banner-image-02" src="../assets/images/middleBanner02.png" alt="Segunda imagem do banner do meio" />
        </div>

        <div class="middle-banner-image-03-wrapper">
            <img class="middle-banner-image-03" src="../assets/images/middleBanner03.png" alt="Terceira imagem do banner do meio" />
        </div>
    `

    middle.innerHTML = middleStructure;
}

export default middleBanner;