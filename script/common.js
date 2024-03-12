// header, lnbBg(lnb들 담고 있는 거), subAllBg(흰배경), gnb(글씨 색 바뀌어야됨)
const header = document.querySelector('header')
const lnbBg = document.querySelectorAll('.lnbBg')
const subAllBg = document.querySelector('.subAllBg')
const gnb = header.querySelectorAll('.gnb > li > a')
// 로고, 언어, 전체메뉴
const lang = document.querySelector('.lang')
const logoDefault = document.querySelector('.default')
const logoHvr = document.querySelector('.hvr')
const allMenuDefault = document.querySelector('.allMenuDefault')
const allMenuHvr = document.querySelector('.allMenuHvr')
const allMenuContainer = document.querySelector('.allMenuContainer')
const allMenuClose = document.querySelector('#allMenuClose')
const topBtn = document.querySelector('.topBtn')
const allMenuGnb = allMenuContainer.querySelectorAll('.gnb > li > a')
const allMenuGnbBg = allMenuContainer.querySelector('.allMenuWrap > .leftMenu')
const allMenuLnb = allMenuContainer.querySelectorAll('.allMenuWrap > .leftMenu > .gnb > li > .lnb ')
const currentPageNum = document.querySelector('.currentPageNum')

// 전체메뉴 - gnb에 마우스오버 시 lng 나타나기
const lnbHide = () => {for(let i of allMenuLnb){i.style.opacity = 0;}}
const allMenuGnbColor = () => {for(let i of allMenuGnb){i.style.color = '#707070';}}
const allMenuGnbDefault = () => {for(let i of allMenuGnb){i.style.color = '#fff';}}
const allMenuGnbDefault2 = () => {for(let i of allMenuGnb){i.style.transform = 'translateX(0)';}}
lnbHide();

allMenuGnb.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        lnbHide();
        allMenuGnbColor();
        allMenuGnbDefault2();
        allMenuGnb[i].style.color = '#fff'
        allMenuGnb[i].style.transform = 'translateX(50px)'
        allMenuLnb[i].style.opacity = 1
        allMenuLnb[i].style.transition = 'opacity 0.17s linear'
    })
    allMenuGnbBg.addEventListener('mouseleave',()=>{
        allMenuGnb[i].style.transform = 'translateX(0)'
        allMenuGnbDefault();
    })
})

// 전체메뉴 아이콘 클릭하면 나타나기
allMenuHvr.addEventListener('click',()=>{
    console.log('.')
    allMenuContainer.style.display = 'block'
})
allMenuClose.addEventListener('click',()=>{
    console.log('.')
    allMenuContainer.style.display = 'none'
})

// 헤더에 마우스 대면 나타나기
for(let l of lnbBg){l.style.height = '0';}
subAllBg.style.height = '0'
subAllBg.style.transition = 'height 0.3s'

header.addEventListener('mouseover',()=>{

    subAllBg.style.opacity = '1'
    subAllBg.style.height = '390px'
    subAllBg.style.transition = 'all 0.3s'

    for(let l of lnbBg){l.style.height = '300px';}
    for(let l of lnbBg){l.style.transition = 'height';}
})
header.addEventListener('mouseout',()=>{

    subAllBg.style.opacity = '0'
    subAllBg.style.height = '100px'
    subAllBg.style.transition = 'all 0.3s'
    
    for(let l of lnbBg){l.style.height = '0';}
    for(let l of lnbBg){l.style.transition = 'height';}
})