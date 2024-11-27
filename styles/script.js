document.querySelector('form').addEventListener('submit', function(event) {
    const password = document.querySelector('input[name="password"]').value;
    if (password.length < 6) {
        alert('Құпиясөз 6 символдан кем болмауы керек!');
        event.preventDefault();
    }
});
