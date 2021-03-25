const accordeon = () => {







    const accord = document.querySelector('.accordeon'),
        title = accord.querySelectorAll('.title'),
        element = accord.querySelectorAll('.element'),
        elementContent = accord.querySelectorAll('.element-content');



    accord.addEventListener('click', (e) => {
        let target = e.target;
        if (target == target.closest('.title')) {
            for (let i = 0; i < element.length; i++) {
                if (target.parentElement == element[i]) {
                    element[i].classList.add('active');
                    elementContent[i].style.display = 'block';
                } else {
                    element[i].classList.remove('active');
                    elementContent[i].style.display = 'none';
                }
            }
        }
    });
};

export default accordeon;