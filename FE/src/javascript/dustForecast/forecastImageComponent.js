let _imageCount = 0;
const _maxXPosition = 300;

const render = () => {
    return `
    <div class="imageArea">
        <img src="https://1.bp.blogspot.com/-yIhXlQfYN1E/WMksG192LLI/AAAAAAAAA9w/txsqdQfykVksDEFshayeN54c0Gu6C3AAwCLcB/s1600/glow.gif" alt="Loading Image">
    </div>
    `;
}

const renderImage = (images) => {
    return `
    ${Object.keys(images).map(key => (
        `<img class="image" src="${images[key]}" style="display: ${key > 0 ? `none` : `block`};">\n`
    )).join('')}
    `;
}

const onNotifyCurrentXPositionChanged = (currentXPosition) => {
    const images = document.querySelectorAll(".imageArea img");
    const index = parseInt(currentXPosition / (_maxXPosition / _imageCount));
  
    images.forEach((forecastImage, currentIndex) => {
        if (index !== currentIndex) {
            forecastImage.style = "display: none;"
        }
        else {
            forecastImage.style = "display: block;"
        }
    });
}

const onNotifyImageCountChanged = (imageCount) => {
    _imageCount = imageCount;
}


export default {render, renderImage, onNotifyCurrentXPositionChanged, onNotifyImageCountChanged}