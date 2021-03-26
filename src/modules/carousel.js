const carousel = () => {
    const services = document.querySelector('#services'),
        elems = services.querySelectorAll('.element'),
        left = document.querySelector('.arrow-left'),
        right = document.querySelector('.arrow-right');


    services.addEventListener('click', (e) => {
        let target = e.target;
        if (target == target.closest('.arrow-right')) {

        }
    });


}

export default carousel;