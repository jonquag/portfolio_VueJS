function upDate(previewPic) {
    var selector = document.getElementById('mainImage');
    console.log(selector);
    selector.setAttribute("class", "active");
    selector.setAttribute("src", previewPic.src);
    console.log(previewPic);  
};