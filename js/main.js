//=============== variables ===============
const header = document.querySelector("#header")
const navegacion = document.querySelector(".navegacion__contenido")
const menuToggle = document.querySelector("#menu-toggle")
const closeToggle = document.querySelector("#close-toggle")
const scrollUp = document.querySelector("#scroll-up")

//=============== eventos ===============
menuToggle.addEventListener("click", () => navegacion.classList.add("active"))
closeToggle.addEventListener("click", () => navegacion.classList.remove("active"))
navegacion.addEventListener("click", (e) =>  e.target.classList.contains("navegacion__link") ?  navegacion.classList.remove("active"): "")

//=============== funciontes ===============

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY

    //=============== scroll header ===============
    if (scrollY >= 50) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }

    //=============== scroll up ===============
    if (scrollY >= 200) {
        scrollUp.classList.add("active")
    } else {
        scrollUp.classList.remove("active")
    }

    //=============== scroll secciones id ===============
    sections.forEach(seccion =>{
        const sectionHeight = seccion.offsetHeight
        const sectionTop = seccion.offsetTop - 50;
        id = seccion.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(`.navegacion__contenido a[href*=${id}]`).classList.add('active')
        }else{
            document.querySelector(`.navegacion__contenido a[href*=${id}]`).classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 1900,
    delay: 400,
    // reset: true
})

sr.reveal(`.inicio__contenido`,{delay: 600})
sr.reveal(`.inicio__titulo`,{delay: 700})
sr.reveal(`.inicio__img`,{delay: 900, origin: 'top'})

sr.reveal(`.imagenes, .productos__item, .footer, .footer__img, .footer__content, .footer__copy`,{origin: 'top', interval: 100})
sr.reveal(`.espeficicaciones__item, .decuento__contenido`,{origin: 'left', interval: 100})
sr.reveal(`.especificaciones__img, .descuento__img`,{origin: 'right'})
sr.reveal(`.case__img`,{origin: 'top'})
sr.reveal(`.case__datos`)