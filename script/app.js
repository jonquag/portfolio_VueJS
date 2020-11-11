function upDate(previewPic) {
    var selector = document.getElementById('mainImage');
    selector.setAttribute("class", "active");
    selector.setAttribute("src", previewPic.src);
};