const image = document.querySelector('.thirteen img');

const container = document.querySelector('.blockchain');

window.addEventListener('scroll', () => {
    const scrollHeight = container.offsetHeight - window.innerHeight;
    const scrollPosition = window.scrollY;

    const opacity = 1 - (scrollPosition / scrollHeight);

    image.style.opacity = opacity;
});






