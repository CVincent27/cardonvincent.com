function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    let formValue = [name, email, message];

    // Verif si le champ est vide
    if (name.trim() == '') {
        alert('Veuillez entrer votre nom.');
        return;
    }

