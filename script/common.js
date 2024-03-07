// header, lnbBg(lnb들 담고 있는 거), subAllBg(흰배경), gnb(글씨 색 바뀌어야됨)
const header = document.querySelector('header')
const lnbBg = document.querySelectorAll('.lnbBg')
const subAllBg = document.querySelector('.subAllBg')
const gnb = document.querySelectorAll('.gnb > li > a')
// 로고, 언어, 전체메뉴
const lang = document.querySelectorAll('.lang')
const logoDefault = document.querySelector('.default')
const logoHvr = document.querySelector('.hvr')
const allMenuDefault = document.querySelector('.allMenuDefault')
const allMenuHvr = document.querySelector('.allMenuHvr')
const allMenuContainer = document.querySelector('.allMenuContainer')
const allMenuClose = document.querySelector('#allMenuClose')

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

logoDefault.style.display = 'block'
logoHvr.style.display = 'none'

allMenuDefault.style.display = 'block'
allMenuHvr.style.display = 'none'

header.addEventListener('mouseover',()=>{
    logoDefault.style.display = 'none'
    logoHvr.style.display = 'block'
    allMenuDefault.style.display = 'none'
    allMenuHvr.style.display = 'block'

    subAllBg.style.opacity = '1'
    subAllBg.style.height = '390px'
    subAllBg.style.transition = 'all 0.3s'

    // for(let l of lnbBg){l.style.display = 'block';}
    for(let l of lnbBg){l.style.height = '500px';}
    for(let l of lnbBg){l.style.transition = 'height';}
    for(let g of gnb){g.style.color = '#000';}
    for(let g of gnb){g.style.transition = 'color 0.3s';}
    for(let la of lang){la.style.color = '#000';}
    for(let la of lang){la.style.border = '1px solid #000';}
    for(let la of lang){la.style.transition = 'all 0.3s';}
})
header.addEventListener('mouseout',()=>{
    logoDefault.style.display = 'block'
    logoHvr.style.display = 'none'
    allMenuDefault.style.display = 'block'
    allMenuHvr.style.display = 'none'

    subAllBg.style.opacity = '0'
    subAllBg.style.height = '100px'
    subAllBg.style.transition = 'all 0.3s'
    
    // for(let l of lnbBg){l.style.display = 'none';}
    for(let l of lnbBg){l.style.height = '0';}
    for(let l of lnbBg){l.style.transition = 'height';}
    for(let g of gnb){g.style.color = '#fff';}
    for(let g of gnb){g.style.transition = 'color 0.3s';}
    for(let la of lang){la.style.color = '#fff';}
    for(let la of lang){la.style.border = '1px solid #fff';}
    for(let la of lang){la.style.transition = 'all 0.3s';}
})