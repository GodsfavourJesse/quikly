document.getElementById('openMenu').addEventListener('click', ()=>{
    let menuList = document.querySelector('.menuList');
    menuList.classList.toggle('open');
})
document.getElementById('closeMenu').addEventListener('click', ()=>{
    let menuList = document.querySelector('.menuList');
    menuList.classList.toggle('close');
})

let langMenu = document.querySelector('.langMenu');
function openLangMenu(){
    langMenu.style.display = 'flex';
}

document.getElementById('openDropDown').addEventListener('click', ()=>{
    let dropDown = document.querySelector('.dropDown');
    dropDown.style.display = 'flex';
})

document.getElementById('searchInput').addEventListener('click', ()=>{
    const click = document.getElementById('searchInput');
    click.classList.toggle('active')
})