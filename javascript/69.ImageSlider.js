// IMAGE SLIDER

const images = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initializeSlider();

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(images.length > 0){
        images[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}
function showSlide(index){

    if(index >= images.length){
        slideIndex = 0;
    }
    if(index < 0){
        slideIndex = images.length - 1;
    }

    images.forEach(image => {
        image.classList.remove("displaySlide");
    });
    images[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    clearInterval(intervalId);
    initializeSlider();
    slideIndex++;
    showSlide(slideIndex);
}