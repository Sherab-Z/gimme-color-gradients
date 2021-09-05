function generateRandomHSLColor () {
    const hue = Math.floor(Math.random() * 361);
    const saturation = Math.floor(Math.random() * 101);
    const lightness = Math.floor(Math.random() * 101);

    const randomColor = 'hsl(' + hue + ',' + saturation + '%,' + lightness + '%)';

    return randomColor;
}

 
function insertRandomBackgroundColorGradient () {

    document.getElementById('wrapper').style.background = 'linear-gradient(70deg, ' + generateRandomHSLColor() + ', ' + generateRandomHSLColor() + ')'; 
}

const btn = document.getElementById('btn');
btn.addEventListener("click", insertRandomBackgroundColorGradient, false);