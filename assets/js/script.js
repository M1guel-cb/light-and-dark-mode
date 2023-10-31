const icon_sun = document.querySelector('i.fa-sun');
const icon_moon = document.querySelector('i.fa-moon');
const btn = document.querySelector('#btn');
const span = document.querySelector('#mode-span');
var tema_sitema = localStorage.getItem('themeSystem') || 'light';

btn.addEventListener('click', () => {
    let oldTema = localStorage.getItem('themeSystem') || 'light';
    let newTema = oldTema == 'light' ? 'dark' : 'light';
    localStorage.setItem('themeSystem', newTema)
    temaAtual(newTema);
})

function temaAtual(theme) {
    document.documentElement.setAttribute('data-theme', theme)
    if (theme == 'light') {
        icon_moon.style.display = 'none'
        icon_sun.style.display = 'block'
        span.innerHTML = 'Light';
    } else {
        icon_moon.style.display = 'block'
        icon_sun.style.display = 'none'
        span.innerHTML = 'Dark';
    }
}

temaAtual(tema_sitema)