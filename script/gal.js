let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let arrowRight = document.getElementById("arrow-right");
let arrowLeft = document.getElementById("arrow-left");
let mainImg = document.getElementById("mainImg");
let imgPosition = 0;
let imgArray = [
    "img/image00.jpg",
    "img/image01.jpg",
    "img/image02.jpg",
    "img/image03.jpg"
]

let changeRight = () => {
    if (imgPosition === 3) {
        imgPosition = imgPosition - 3;
        mainImg.setAttribute("src", imgArray[imgPosition]);
        
    }
    else {
        imgPosition++
        mainImg.setAttribute("src", imgArray[imgPosition]);
 
    }
};

let changeLeft = () => {
    if (imgPosition === 0) {
        imgPosition = imgPosition + 3;
        mainImg.setAttribute("src", imgArray[imgPosition]);
     
    }
    else {
        imgPosition--
        mainImg.setAttribute("src", imgArray[imgPosition]);
 
    }
};

const showImg1 = () => {
    mainImg.setAttribute("src", "img/image00.jpg");
    imgPosition = 0;
};
const showImg2 = () => {
    mainImg.setAttribute("src", "img/image01.jpg");
    imgPosition = 1;
};
const showImg3 = () => {
    mainImg.setAttribute("src", "img/image02.jpg");
    imgPosition = 2;
};
const showImg4 = () => {
    mainImg.setAttribute("src", "img/image03.jpg");
    imgPosition = 3;
};

img1.onclick = showImg1;
img2.onclick = showImg2;
img3.onclick = showImg3;
img4.onclick = showImg4;
arrowRight.onclick = changeRight;
arrowLeft.onclick = changeLeft;