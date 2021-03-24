const topSlider = () => {
    setInterval(() => {
        let slides = document.querySelectorAll('.top-slider>.item');
        slides[0].insertAdjacentElement('beforebegin', slides[2]);
    }, 3000)
}

export default topSlider;