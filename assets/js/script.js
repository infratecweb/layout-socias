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
$('.galley-banner').owlCarousel({
    dots: false,
    nav: false,
    items: 1,
    animateOut: 'fadeOut',
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
})

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

    console.log(movie.muted)

    if (movie.muted) {
        movie.muted = false
        iconMuted.classList.remove('hidden')
        iconSound.classList.add('hidden')
    } else {
        movie.muted = true
        iconMuted.classList.add('hidden')
        iconSound.classList.remove('hidden')
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
function goPage (page){
    return window.location.href = `${page}.html`
}

// VIEW PASSWORD
function viewPassword (id){
    const inputPassord = document.getElementById(`${id}`)

    inputPassord.type === 'password' ? inputPassord.type="text" : inputPassord.type="password"
}