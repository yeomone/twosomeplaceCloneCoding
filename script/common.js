const header = document.querySelector('header')
const lnbBg = document.querySelectorAll('.lnbBg')
const subAllBg = document.querySelector('.subAllBg')
const gnb = document.querySelectorAll('.gnb > li > a')
const lang = document.querySelectorAll('.lang')
const logoDefault = document.querySelector('.default')
const logoHvr = document.querySelector('.hvr')
const allMenuDefault = document.querySelector('.allMenuDefault')
const allMenuHvr = document.querySelector('.allMenuHvr')
// allMenuDefault
// allMenuHvr
// default
// hvr

for(let l of lnbBg){l.style.display = 'none';}
subAllBg.style.height = '0'
subAllBg.style.transition = 'height 0.3s'

logoDefault.style.display = 'block'
logoHvr.style.display = 'none'

allMenuDefault.style.display = 'block'
allMenuHvr.style.display = 'none'

/* for(let h of header){
    for(let l of subAllBg){
        header.addEventListener('mouseover',()=>{
            l.style.height = '500px'
        })
    }
} */

header.addEventListener('mouseover',()=>{
    logoDefault.style.display = 'none'
    logoHvr.style.display = 'block'
    allMenuDefault.style.display = 'none'
    allMenuHvr.style.display = 'block'

    subAllBg.style.opacity = '1'
    subAllBg.style.height = '390px'
    subAllBg.style.transition = 'all 0.3s'

    for(let l of lnbBg){l.style.display = 'block';}
    for(let g of gnb){g.style.color = '#000';}
    for(let la of lang){la.style.color = '#000';}
    for(let la of lang){la.style.border = '1px solid #000';}
    for(let g of gnb){g.style.transition = 'color 0.3s';}
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

    for(let l of lnbBg){l.style.display = 'none';}
    for(let g of gnb){g.style.color = '#fff';}
    for(let g of gnb){g.style.transition = 'color 0.3s';}
    for(let la of lang){la.style.color = '#fff';}
    for(let la of lang){la.style.border = '1px solid #fff';}
    for(let la of lang){la.style.transition = 'all 0.3s';}
})