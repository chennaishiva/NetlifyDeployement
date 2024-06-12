const title = document.querySelector('.title');

document.addEventListener('scroll', function(){
    const value = window.scrollY
    console.log(value)
    title.style.marginTop = value * 1.5 + 'px'
})