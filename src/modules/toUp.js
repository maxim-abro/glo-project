const toUp = () => {

    const goTopBtn = document.querySelector('.up');

    const trackScroll = () => {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.style.display = 'block';
        }
        if (scrolled < coords) {
            goTopBtn.style.display = 'none';
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
}

export default toUp;