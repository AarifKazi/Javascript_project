let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let index = 0;

setInterval(() => {
    nextSlide();
}, 5000);

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[i].classList.add('active');
    dots[i].classList.add('active');
}

function nextSlide() {
    index++;
    if (index >= slides.length) index = 0;
    showSlide(index);
}

function prevSlide() {
    index--;
    if (index < 0) index = slides.length - 1;
    showSlide(index);
}

function goSlide(i) {
    index = i;
    showSlide(index);
}
