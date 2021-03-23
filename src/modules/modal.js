const modal = () => {
    const modalCallback = document.querySelector('.modal-callback'),
        modalOverlay = document.querySelector('.modal-overlay'),
        body = document.querySelector('body');

    body.addEventListener('click', (e) => {
        let target = e.target;
        console.log(target);
        if (target == target.closest('.callback-btn')) {
            modalCallback.style.display = 'block';
            modalOverlay.style.display = 'block';
        } else if (target == target.closest('.modal-overlay') ||
            target == target.closest('.modal-close')) {
            modalCallback.style.display = 'none';
            modalOverlay.style.display = 'none';
        }
    })
}


export default modal;