
function changeHeaderImgSize() {
    var img = document.getElementById('main-img')
    img.style.marginTop = '0'
    
    if (window.pageYOffset < img.height - 60) {
        window.scroll(0, img.height - 60)
    }
}

changeHeaderImgSize()
