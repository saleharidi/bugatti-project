//Preloader

const preloader = document.getElementById('preloader')

window.addEventListener('load', hidePreloader)

function hidePreloader() {
    preloader.style.display = 'none'
}


//Audio and Button animation

const audioStartBtn = document.querySelectorAll('.section-button')
const audio = document.querySelectorAll('.bugatti-audio')
const engines = document.querySelectorAll('.button-img')

for (let i = 0; i < audioStartBtn.length; i++) {
    audioStartBtn[i].addEventListener('click', () => {

        if (!audio[i].paused) {
            audio[i].pause()
            audio[i].currentTime = 0
            engines[i].classList.remove('vibrate')
        } else {
            audio[i].play()
            engines[i].classList.add('vibrate')
        }

    })
    audio[i].onended = () => {
        engines[i].classList.remove('vibrate');
    };
}

//Hero Section Animation

const heroImg = document.querySelector('.hero-js')
window.addEventListener('load', () => {
    heroImg.classList.add('normal-size')
})

const heroTitles = document.querySelectorAll('.hero-title-js')
const heroTitleDelay = 1500

heroTitles.forEach((heroTitle) => {
    setTimeout(() => {
        heroTitle.classList.add('active')
    }, heroTitleDelay)
})


//Entry of content

document.addEventListener('DOMContentLoaded', () => {

    const animated = document.querySelectorAll('.js-animation')

    function observerCallback(entries, observer) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                const object = entry.target

                object.classList.add('visible')


                observer.unobserve(object)
            }
        })
    }

    const observer = new IntersectionObserver(observerCallback, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    })

    animated.forEach(object => {
        observer.observe(object)
    })

})

// number animation 


document.addEventListener('DOMContentLoaded', () => {

    const numbers = document.querySelectorAll('.number-js')


    function observerCallback(entries, observer) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                const object = entry.target

                const numberValue = parseInt(object.getAttribute('value'))

                let count = 1000

                const countInterval = setInterval(startCount, 1)

                function startCount() {
                    if (count == numberValue) {
                        clearInterval(countInterval)
                    } else {
                        count++
                        object.innerText = count
                    }
                }

                observer.unobserve(object)
            }
        })
    }

    const observer = new IntersectionObserver(observerCallback, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    })

    numbers.forEach(object => {
        observer.observe(object)
    })

})


//LIght Dark Mode

const lightIcon = document.getElementById('light-icon')
const darkIcon = document.getElementById('dark-icon')
const navBar = document.getElementById('nav-bar')
const navLinks = document.querySelectorAll('.nav-link-mv')
const navLogo = document.getElementById('bugatti-logo')
const body = document.body
const specSections = document.querySelectorAll('.specs-section')
const footer = document.querySelector('footer')

lightIcon.addEventListener('click', () => {
    lightIcon.style.display = 'none'
    darkIcon.style.display = 'inline'
    navBar.style.backgroundColor = 'white'
    navLogo.setAttribute('src', '/asset/bugatti-logo.png')
    navBar.classList.remove('navbar-dark')
    navBar.classList.add('navbar-light')
    navBar.style.transition = 'all 1s'
    navLinks.forEach((navLink) => {
        navLink.style.color = 'black'
        navLink.style.backgroundColor = 'white'
    })
    
    body.style.backgroundColor = '#b2b2b2ee'
    body.style.color = 'black'
    body.style.transition = 'all 1s'
    engines.forEach((engine) => {
        engine.setAttribute('src', '/asset/black-engine-icon.png')
    })
    specSections.forEach((specSection) => {
        specSection.style.backgroundImage = 'linear-gradient(to bottom , rgb(220, 220, 220) , rgb(206, 206, 206), rgb(186, 186, 186), rgb(177, 177, 177), rgb(162, 162, 162))'
    })
    footer.style.backgroundColor = 'black'
    footer.style.color = 'white'

})

darkIcon.addEventListener('click', () => {
    lightIcon.style.display = 'inline'
    darkIcon.style.display = 'none'
    navBar.style.backgroundColor = 'black'
    navLogo.setAttribute('src', '/asset/bugatti-logo-2.png')
    navLinks.forEach((navLink) => {
        navLink.style.color = 'white'
        navLink.style.backgroundColor = 'black'
    })
    navBar.classList.remove('navbar-light')
    navBar.classList.add('navbar-dark')
    
    body.style.backgroundColor = 'rgb(0,0,0)'
    body.style.color = '#EEEEEE'
    engines.forEach((engine) => {
        engine.setAttribute('src', '/asset/engine-icon.png')
    })
    specSections.forEach((specSection) => {
        specSection.style.backgroundImage = 'linear-gradient(to top , black , rgb(17, 17, 17), rgb(29, 29, 29), rgb(40, 40, 40), rgb(50, 50, 50))'
    })
    footer.style.backgroundColor = '#EEEEEE'
    footer.style.color = 'black'

})