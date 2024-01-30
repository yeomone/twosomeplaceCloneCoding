const menueWrap = document.querySelector('.menueWrap')
const menueWrapA = document.querySelector('.menueWrap > a')
const introducingMenu = document.querySelector('.introducingMenu')

menueWrap.addEventListener('click',()=>{
    introducingMenu.style.display = 'flex'
})