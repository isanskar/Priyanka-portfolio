const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const goToTop = document.querySelector('#go-to-top');
const cardWidth = document.querySelector('.project-cards').offsetWidth/2;
const cardList = document.querySelector('.project-cards');

prev.addEventListener('click',()=>{
    cardList.scrollLeft -= cardWidth;
})

next.addEventListener('click',()=>{
    cardList.scrollLeft += cardWidth;
})


window.onscroll = ()=>{
    if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 800){
        goToTop.style.display = "block";
    } else {
        goToTop.style.display = "none";
    }
};