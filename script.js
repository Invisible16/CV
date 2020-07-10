let goTop=document.getElementById('back-to-top')
goTop.addEventListener('click',gotoTop)
function gotoTop(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}