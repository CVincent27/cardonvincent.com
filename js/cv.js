document.getElementById('downloadLink').addEventListener('click', function () {
    var cvFilePath = 'Cardon_Vincent_CV.pdf';

    // créer un a temporaire
    var link = document.createElement('a');
    link.href = cvFilePath;

    // Déclencher le dl
    link.download = 'Cardon_Vincent_CV.pdf';

    // Ajoute un a tempo au DOM
    document.body.appendChild(link);

    // déclenche le dl au click
    link.click();

    // Suppr le a tempo du DOM
    document.body.removeChild(link);


});