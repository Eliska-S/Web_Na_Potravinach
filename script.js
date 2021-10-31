let menu = document.querySelector('.hamburger-menu');
let navigace = document.querySelector('.navigace');

menu.addEventListener ('click', () => {
    menu.classList.toggle('open');
    navigace.classList.toggle("open");
});

let tlacitkoJidelniListek = document.querySelector('#jidelni-listek');
let tlacitkoNapojovyListek = document.querySelector('#napojovy-listek');
let vyskakovaciOkno = document.querySelector('.vyskakovaci-okno-wrapper');
let krizek = document.querySelector('.zavrit-okno');
let jidelniListek = document.querySelector('#jidelni-listek-img');
let napojovyListek = document.querySelector('#napojovy-listek-img');


tlacitkoJidelniListek.addEventListener('click', () => {
    vyskakovaciOkno.style.display = 'block';
    jidelniListek.style.display = 'block';
});

tlacitkoNapojovyListek.addEventListener('click', () => {
    vyskakovaciOkno.style.display = 'block';
    napojovyListek.style.display = 'block';
})

krizek.addEventListener('click', () => {
    vyskakovaciOkno.style.display = 'none';
    napojovyListek.style.display = 'none';
    jidelniListek.style.display = 'none';
})