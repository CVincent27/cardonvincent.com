function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Verif si les champs sont vides
    if (!name.trim() || !email.trim() || !message.trim()) {
        alert('Veuillez remplir tous les champs du formulaire.');
        return;
    }

    // Vérifier si le champ adresse e-mail est invalide
    if (!isValidEmail(email)) {
        alert('Veuillez entrer une adresse e-mail valide.');
        return;
    }

    // Afficher le message personnalisé
    alert(`Merci, ${name}! Votre message a été envoyé.`);
}

// Fonction pour valider une adresse e-mail simple
function isValidEmail(email) {
    // verif si l'adresse mail a la bonne syntaxe 
    // TODO: validator.js
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}