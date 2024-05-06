function onMakeupJson(products) {
  console.log('JSON ricevuto');
  const library = document.querySelector('#library-view');
  library.innerHTML = '';
  let num_results = products.length;
  if(num_results > 10)
    num_results = 10;
  for(let i = 0; i < num_results; i++) {
    const product = products[i];
    const brand = product.brand;
    const name = product.name;
    const image_url = product.image_link;
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');
    const img = document.createElement('img');
    img.src = image_url;
    const caption = document.createElement('span');
    caption.textContent = `${brand}: ${name}`;
    productContainer.appendChild(img);
    productContainer.appendChild(caption);
    library.appendChild(productContainer);
  }
}

function onMakeupResponse(response) {
  console.log('Risposta ricevuta');
  return response.json();
}

function search(event) {
  event.preventDefault();
  const brandInput = document.querySelector('#brand');
  const brandValue = encodeURIComponent(brandInput.value);
  console.log('Eseguo ricerca: ' + brandValue);
  const restUrl = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandValue}`;
  console.log('URL: ' + restUrl);
  fetch(restUrl)
    .then(onMakeupResponse)
    .then(onMakeupJson)
    .catch(error => {
      console.error('Errore nella ricerca dei prodotti:', error);
    });
}

const form = document.querySelector('form');
form.addEventListener('submit', search);  
