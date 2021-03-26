const fetchData = () => {
    const statusMessage = document.createElement('div');

    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const form = document.getElementById('form1');


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.appendChild(statusMessage);
        let inputs = form.querySelectorAll('input');
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};

        for (let val of formData.entries()) {
            body[val[0]] = val[1]
        }
        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
                setTimeout(() => {
                    statusMessage.textContent = '';
                }, 3000)
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
                setTimeout(() => {
                    statusMessage.textContent = '';
                }, 3000)
            })
        inputs.forEach((item, i) => {
            if (i < 2) {
                item.value = '';
            }

        });
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }
}


export default fetchData;