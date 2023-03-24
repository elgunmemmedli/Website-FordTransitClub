let mobile_icon = document.querySelector('.mobile-icon');
let only_mobile = document.querySelector('.only_mobile');
mobile_icon.addEventListener('click', (e)=>{
    only_mobile.classList.toggle('aktiv');
    mobile_icon.classList.toggle('aktiv');
})