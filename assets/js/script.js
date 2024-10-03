// LOADING SECTION
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
        // Quando a página carregar completamente
        var loading = document.getElementById("loading");
        var content = document.getElementById("template-grid")

        // Esconde o elemento de carregamento
        loading.style.display = "none";

        // Exibe o conteúdo da página
        content.classList.remove('hidden');

        // Permite rolagem da página
        document.body.style.overflow = "auto";
    });
});

// FUNCTION TO RETURN THE CURRENT DATE
function currentDate () {
     const date = new Date().getFullYear()

     try {
        const elDate = document.getElementById('_current-date')

        if (elDate) {
            elDate.innerText = date
        } else {
            throw new Error('The id representing the current date field was not found.')
        }
     } catch (error) {
        console.error(error.message)
     }
}
currentDate()

// FUNCTION TO RETURN TO THE TOP OF THE PAGE
function goTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// GALLERY
$('.gallery-content').owlCarousel({
    margin: 32,
    dots: false,
    nav: false,
    autoWidth: true, 
    responsiveClass:true,
    loop:true,
    autoplay:true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
})

// GALLEY BANNER
$(document).ready(function() {
    var owl = $('.galley-banner');

    owl.owlCarousel({
        items: 1, // Mostra um slide por vez
        loop: true,
        dots: false,
        nav: false,
        autoWidth: true, 
        responsiveClass:true,
        autoplay: true,
        animateOut: 'fadeOut',
        autoplayTimeout: 5000, // Muda de slide a cada 5 segundos
        onTranslated: videoPlay,
        onTranslate: videoStop,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });

    function videoPlay(event) {
        var currentItem = $(event.target).find('.owl-item.active video');
        currentItem.get(0).play();
    }

    function videoStop(event) {
        var videos = $(event.target).find('video');
        videos.each(function() {
            this.pause();
            this.currentTime = 0; // Reinicia o vídeo
        });
    }
});

// FUNCTION SHOW/CLOSE MODAL
function showModal (id){
    document.getElementById(`${id}`).classList.remove('hidden')
    document.body.style.overflowY = 'hidden'
}

function closeModal (id){
    document.getElementById(`${id}`).classList.add('hidden')
    document.body.style.overflowY = 'auto'
}

// PLAY/PAUSE VIDEO PREVIEW
let timeoutId;

function playVideo (e){
    const video = e.querySelector('video');

    timeoutId = setTimeout(function() {
        video.play();
    }, 1000);
}

function pauseVideo (e){
    const video = e.querySelector('video');

    clearTimeout(timeoutId);
    video.pause();
    video.currentTime = 0;
    video.load()
}

// MUTED MOVIE
function mutedMovie (){
    const movie = document.getElementById('inner-movie')
    const iconMuted = document.querySelector('.muted')
    const iconSound = document.querySelector('.sound')

    if (movie.muted) {
        movie.muted = false
        iconMuted.classList.add('hidden')
        iconSound.classList.remove('hidden')
    } else {
        movie.muted = true
        iconMuted.classList.remove('hidden')
        iconSound.classList.add('hidden')
    }  
}

// WATCH NOW
function whatchNow (){
    const movie = document.getElementById('inner-movie')
    const innerBanner = document.querySelector('.inner-banner')
    const mask = document.querySelector('.inner-mask')
    const controlsBanner = document.querySelector('.controls-banner')

    movie.controls = true
    movie.play()
    innerBanner.classList.add('new-stage')
    mask.classList.add('hidden')
    controlsBanner.classList.add('hidden')
}

// GO PAGE
function goPage (page, event = 'null'){
    event.preventDefault()
    return window.location.href = `${page}.html`
}

// VIEW PASSWORD
function viewPassword (id){
    const inputPassord = document.getElementById(`${id}`)

    inputPassord.type === 'password' ? inputPassord.type="text" : inputPassord.type="password"
}

// OPEN FORM REGISTER
function openFormRegister (event){
    event.preventDefault()
    
    const formLogin = document.getElementById('frm-login')
    const formRegister = document.getElementById('frm-register')

    formLogin.classList.add('hidden')
    formRegister.classList.remove('hidden')
}

// OPEN PAYMENT STATUS TRUE
function showStatusPayment (status){
    try {
        const modal = document.getElementById('modal-payment-status')
        const elStatusTrue = document.getElementById('payment-status-true')
        const elStatusFalse = document.getElementById('payment-status-false')

        if (status) {
            modal.classList.remove('hidden')
            elStatusTrue.classList.remove('hidden')
        } else {
            modal.classList.remove('hidden')
            elStatusFalse.classList.remove('hidden')
        }
    } catch (error) {}
}

function actionModalParams (){
    const urlParams = new URLSearchParams(window.location.search);
    const resutParamns = urlParams.get('showModal')

    switch (resutParamns) {
        case "paymentTrue":
            showStatusPayment(true)
            break;
        case "paymentFalse":
            showStatusPayment(false)
            break;
        default:
            break;
    }
}

actionModalParams ()

const player = new Plyr('video', {captions: {active: true}});

// Expose player so it can be used from the console
window.player = player;