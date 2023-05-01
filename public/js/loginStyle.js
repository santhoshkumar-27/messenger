const carousel = [...document.querySelectorAll('.carousel-item')];

let carouselImageIndex = 0;

const changeCarousel = () => {
    carousel[carouselImageIndex].classList.toggle('active');
    
    if(carouselImageIndex >= carousel.length - 1){
        carouselImageIndex = 0;
    } else{
        carouselImageIndex++;
    }
    
    carousel[carouselImageIndex].classList.toggle('active');
}

setInterval(() => {changeCarousel();}, 7000);