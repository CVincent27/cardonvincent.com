const username = 'CVincent27';
const apiUrl = `https://api.github.com/users/${username}`;

// Fonction pour récupérer les données du profil GitHub
async function getGitHubProfile() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Appel d'une fonction pour afficher les informations
        displayGitHubProfile(data);
    } catch (error) {
        console.error('Erreur lors de la récupération des données du profil GitHub:', error);
    }
}

// Fonction pour afficher les informations du profil GitHub
function displayGitHubProfile(data) {
    const profileElement = document.getElementById('github-profile');

    // Afficher les élements
    profileElement.innerHTML = `
        <div style="display: flex; gap:12px">
        <img src="${data.avatar_url}" style="width: 80px;" alt="GitHub Avatar">
        <h2 style="display: flex; align-items: center;">${data.name}</h2>
        </div>
        <p>${data.bio}</p>
        <p><a href="${data.html_url}" target="_blank">Voir le profil GitHub</a></p>
    `;
}

// Appel de la fonction pour récupérer les données du profil GitHub
getGitHubProfile();