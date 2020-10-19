/* Criar Objeto para travar o mapa da Localização do Orfanato*/
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollwheel: false,
    zoomControl: false,
} /* desabilita respectivamente arrastar, clicar (1 ou 2x), scroll(mouse) e zoom do mapa */

// Get values from HTML
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// create map
const map = L.map('mapid', options).setView([lat, lng], 16.5);

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Create and add marker
L
.marker([lat, lng], { icon })
.addTo(map)

/* image galery */

function selectImage(event) {
    const button = event.currentTarget

    // Remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    // Selecionar Imagem clicada
    const image = button .children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // Atualizar o container de Image
    imageContainer.src = image.src

    // Adicionar a classe .active para este botão
    button.classList.add('active');
}