
let div = document.getElementById('collapse')
let btnS = document.getElementById('show')
let btnH = document.getElementById('hide')

function toggleBtnShow() {
    div.classList.toggle("other");
    btnH.style.display = "inline-block"
    btnS.style.display = "none"
}

function toggleBtnHide() {
    div.classList.toggle("other");
    btnH.style.display = "none"
    btnS.style.display = "inline-block"
}
