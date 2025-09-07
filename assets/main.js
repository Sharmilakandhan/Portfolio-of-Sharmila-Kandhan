// show menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// --------------------------add blur to header---------------
const blurheader = () =>{
    const blurheader = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurheader)

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// -----------------email js--------------------------

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

    const sendEmail = (e) =>{
        e.preventDefault()
        // service ID , template id , form , publickey
        emailjs.sendForm('service_bywo6q5', 'template_yn0jals' , '#contact-form', '-UCDxb6Rzulb1HFZK' )
        .then(() => {
            console.log('working')
            contactMessage.textContent ='Message send successfully ✅'
            // REMOVE MESSAGE
         setTimeout(()=>{
            contactMessage.textContent = ''
         }, 5000)
        //  clear input 
        contactForm.reset()
        }, () => {
            console.log('not working')

            contactMessage.textContent ='Message not send (server error) ❌'
             
        })
    }

contactForm.addEventListener('submit', sendEmail)

// -----------------show scroll up---------------

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


// ----------------animation-----------------

const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration:2000,
    delay:400,
    // reset:true
})

sr.reveal(`.home__data, .home__social , .contact__container, .footer__container, .certificate__container`)
sr.reveal(`.home__img`, {origin:'bottom'} )
sr.reveal(`.about__data , .skills__data` ,  {origin:'left'})
sr.reveal(`.about__img , .skills__content` , {origin:'right'})
sr.reveal(`.projects__card` , {interval:100})
















