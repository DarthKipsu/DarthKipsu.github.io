
function changeHeaderImgSize() {
    var img = document.getElementById('main-img')
    img.style.marginTop = '0'
    console.log(img.height)
    
    window.scroll(0, img.height - 60)
}

changeHeaderImgSize()
