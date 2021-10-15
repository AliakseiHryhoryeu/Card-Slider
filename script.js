function SlidersCardsPlugin(activeSlider = 2){
    // Description Card Slides
    const slides = document.querySelectorAll('.slide')

    slides[activeSlider].classList.add('active')
    slides[activeSlider].classList.remove('notactive')

    let tmpcounter = 0
    for(const slide of slides){

    slide.addEventListener('click',() => {
        clearActiveClasses()
        slide.classList.add('active')
        })
    }
    
    function clearActiveClasses(){
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const slide = document.getElementsByClassName('slide');
  for (let i = 0; i < slide.length; i++) {
    slide[i].classList.add('slide-'+[i]);
}
//   let counter = getRandomInt(0, slide.length)
  let counter = 0
SlidersCardsPlugin(counter)

    // Description Arrors
let myFunction = function(temp) {

};

function ChangeSlide(temp){
    
    const slides = document.querySelectorAll('.slide')
    function clearActiveSlide(){
        slides.forEach((temp1) => {
            temp1.classList.remove('active')
        })
    }
    if(counter+temp<0){
        const neededSlide = document.getElementsByClassName('slide-'+ 0)
        clearActiveSlide()
        neededSlide[0].classList.add('active')
        counter=0
    }else if(Number(counter)+Number(temp)>Number(slide.length-1)){
        const neededSlide = document.getElementsByClassName('slide-'+ slide.length)
        console.log("counter+temp= " + counter+temp + " slide.length= "+slide.length )
        clearActiveSlide()
        neededSlide[0].classList.add('active')
        counter=slide.length-2
    }else{
        const neededSlide = document.getElementsByClassName('slide-'+ (counter+temp))
        clearActiveSlide()
        neededSlide[0].classList.add('active')
        counter=counter+temp
    }
}

  // тут описать действия при клике на иконку стрелки




