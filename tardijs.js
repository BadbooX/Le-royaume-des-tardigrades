const parallax = document.getElementById('tardishoot');

window.addEventListener('scroll', () => {
    parallax.style.backgroundPositionY = -window.scrollY  + "px";
})