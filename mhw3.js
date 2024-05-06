

/*immagine principale slider*/
const precButton = document.querySelector('#section_image button:first-of-type');
const succButton = document.querySelector('#section_image button:last-of-type');

precButton.addEventListener('click', prec);
succButton.addEventListener('click', succ);

var n_img = 4;
var corrente = 1;

function succ(){
    corrente++;
    if(corrente > n_img){
        corrente = 1;
    }
    for(var i = n_img; i > 0; i--){
    document.querySelector("#section_img img:nth-child(" + i + ")").style.display ="none";
    }
    document.querySelector("#section_img img:nth-child(" + corrente + ")").style.display ="block";
}

function prec(){
    corrente--;
    if(corrente == 0){
        corrente = n_img;
    }
    for(var i = n_img; i > 0; i--){
    document.querySelector("#section_img img:nth-child(" + i + ")").style.display ="none";
    }
    document.querySelector("#section_img img:nth-child(" + corrente + ")").style.display ="block";
}

setInterval(succ, 3000);


/*modale*/
function createImage(src) {
    const ima = document.createElement('img');
    ima.src = src;
    return ima;
  }
  
  function onThumbnailClick(event) {
    const ima = createImage(event.currentTarget.src);
    modalView.appendChild(ima);
    modalView.classList.remove('hidden');
  }
  
  function onModalClick() {
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
  }
  
  // Main
  
  const albumView = document.querySelector('#album-view');
  for (let i = 0; i < PHOTO_LIST.length; i++) {
    const photoSrc = PHOTO_LIST[i];
    const ima = createImage(photoSrc);
    ima.addEventListener('click', onThumbnailClick);
    albumView.appendChild(ima);
  }
  
  const modalView = document.querySelector('#modal-view');
  modalView.addEventListener('click', onModalClick);
  


/* classList */
    function togglePreferito(elemento) {
    
     if (elemento.classList.contains('preferito')) {
        elemento.classList.remove('preferito');
     } else {
        elemento.classList.add('preferito');
    }
    }



/* modifica img*/
function onClick1()
{
  document.querySelector("#imgbooster").src = "https://cdn-azure.notinoimg.com/blog/gallery/skin_booster_foto_714x516.jpg";
}

const img = document.querySelector("#imgbooster")
img.addEventListener("click", onClick1);

function onClick2()
{
  document.querySelector("#imgdetox").src = "https://mymatra.com/wp-content/uploads/2022/02/hair-detox-1.jpg";
}

const immagine = document.querySelector("#imgdetox")
immagine.addEventListener("click", onClick2);

function onClick3()
{
  document.querySelector("#imgmakeup").src = "https://truccosposamilano.it/wp-content/uploads/2019/03/trucco_occhi_marroni4.jpg";
}

const image = document.querySelector("#imgmakeup")
image.addEventListener("click", onClick3);
