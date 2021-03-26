const validate = () => {

    document.addEventListener('input', e => {
        let target = e.target;

        if (target.matches('.tel')) {
            target.value = target.value.replace(/[^\+\d]/gi, '');
        } else if (target.matches('.name')) {
            target.value = target.value.replace(/[^А-Яа-яЁё]/gi, '');
        }
    })



}

export default validate;