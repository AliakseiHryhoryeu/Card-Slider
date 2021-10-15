function SlidersPlugin(activeSlider = 2){
    const slides = document.querySelectorAll('.slide')

    slides[activeSlider].classList.add('active')
    slides[activeSlider].classList.remove('notactive')

    for(const slide of slides){
    slide.addEventListener('click',() => {
        clearActiveClasses()
        slide.classList.add('active')
        slide.classList.remove('notactive')
        })
    }
    
    function clearActiveClasses(){
        slides.forEach((slide) => {
            slide.classList.remove('active')
            slide.classList.add('notactive')
        })
    }
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  SlidersPlugin(getRandomInt(0, 4))




