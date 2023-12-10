function ouvrir_tunnel(nom_balise_html, chemin_document) {
    fetch(chemin_document)
        .then(response => {
        return response.text()
    })
        .then(data => {
        document.querySelector(nom_balise_html).innerHTML = data
    })
}

// ouvrir_tunnel("modele-de-nom-balise", "./templates/nav_petits_ecrans.html")
