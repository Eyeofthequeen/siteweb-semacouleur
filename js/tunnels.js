function openTunnel(tagName, templatePath) {
    fetch(templatePath)
        .then(response => {
        return response.text()
    })
        .then(data => {
        document.querySelector(tagName).innerHTML = data
    })
}

const path = (fileName) => {
    return `./templates/${fileName}.html`
}

// openTunnel("modele-de-nom-balise", "./templates/nav_petits_ecrans.html")
openTunnel("full-screen-company-name", path("full-screen-compagny-name"))
openTunnel("navigation", path("navigation"))
openTunnel("about-us", path("about-us"))
openTunnel("footer", path("footer"))
openTunnel("dripping-with-font", path("dripping-with-font"))
openTunnel("contact", path("contact-form"))
