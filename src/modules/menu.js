const menu = () => {

    const topMenu = document.querySelector('.top-menu'),
        mobileMenu = document.querySelector('.mobile-menu'),
        mobMenuBtn = document.querySelector('.mob-menu-btn');

    const closeMenu = () => {
        mobileMenu.style.right = '-400px'
    }

    topMenu.addEventListener('click', (e) => {
        let target = e.target.closest('a');
        if (target) {
            e.preventDefault();
            const blockId = target.hash;
            document.querySelector(blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    });

    mobMenuBtn.addEventListener('click', () => {
        mobileMenu.style.right = '0px';
    });

    mobileMenu.addEventListener('click', (e) => {
        let target = e.target;
        if (target === target.closest('.mobile-menu-close')) {
            closeMenu();
        } else if (target === target.closest('a')) {
            closeMenu();
        }
    });
};

export default menu;