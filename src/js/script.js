document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada. Aproveite sua visita!');

    
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            event.preventDefault(); 
            alert('Por favor, preencha todos os campos antes de enviar.');
        } else if (!validateEmail(email)) {
            event.preventDefault();
            alert('Por favor, insira um endereço de email válido.');
        } else {
            alert('Formulário enviado com sucesso!');
        }
    });
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
