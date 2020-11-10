const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function generateHTML([h, v]) {
    return`
    <div class="box h${h} v${v}">
        <img src="assets/imgs/galleryImage${randomNumber(15)}.jpg">
        <div class="img__overlay">
            <button>View →</button>
        </div>
    </div>
    `
}
function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}
function handleClick(event) {
    const src = event.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    overlay.classList.add('open');
}

function close() {
    overlay.classList.remove('open');
}

const digits = Array.from({ length: 25 }, () =>
    [randomNumber(4), randomNumber(4)]).concat([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]);

const html = digits.map(generateHTML).join('');
console.log(html);
gallery.innerHTML = html;

const items = document.querySelectorAll('.box');
items.forEach(item => item.addEventListener('click', handleClick));

overlayClose.addEventListener('click', close);