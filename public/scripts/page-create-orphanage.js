// tipos de dados:
// string ""
// Number 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
// Object {}
// Boolean true false
// Array []

// create map
const map = L.map("mapid").setView([-23.5818554, -46.6388614], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

// inicia variavel marker vazia. Pode mudar valor a qualquer hora.
let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  // save current marker position
  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon if already have one marker
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// Add photos field
function addPhotoField() {
  // Pegar container de fotos #images
  const container = document.querySelector("#images")
  // Pegar container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload")
  // realizar o clone da ultuma imagem adicionada
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
  // Verificar se o campo está vazio, se sim, não add no container de imagens
  const input = newFieldContainer.children[0]

  if (input.value == "") {
    return;
  }
  // Limpar o campo antes de adicionar ao container de imagens
  input.value = ""
  
  //adicionar o clone ao container de imagens
  container.appendChild(newFieldContainer)
}

function deleteField(event) {
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    // Limpar valor do campo
    span.parentNode.children[0].value = ""   
    return;
  }
  // deletar o campo 
  span.parentNode.remove()
}

// Select Yes or No
function toggleSelect(event) {
    // Retirar a classe Active dos botões
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove('active')
    })
    // Colocar a classe Active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')
    // Atualizar input hidden com o valor selecionados
    const input = document.querySelector('[name="open_on_weekends"]')
    // Verificar se Yes ou No
    input.value = button.dataset.value
}

function validate(event) {
  const mapa = document.querySelector('[name="lat"]')
  if(mapa.value == "") {
    // Validar se lat e lng estão preenchidos
    event.preventDefault()
    alert('Selecione um ponto no mapa')
  }
}