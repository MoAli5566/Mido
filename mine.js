let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mido = document.querySelector('.mido');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value *3 + 'px';
    mountains3.style.top = value *2 + 'px';
    mountains4.style.top = value *1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value *3 + 'px';
    mido.style.fontSize = value + 'px';
    if (scrollY >= 70){
        mido.style.fontSize = 70 + 'px'
        mido.style.position = 'fixed'
        if(scrollY >= 477){
            mido.style.display = 'none'
        }
        else{
            mido.style.display = 'block'
        }
        if(scrollY >= 127){
            document.querySelector('main').style.background = ('linear-gradient(#2b869b,#1760ce);')
        }else{
            document.querySelector('main').style.background = ('linear-gradient(to top,#200016,transparent);')
        }
    } 
}