var stone = document.getElementsByClassName("stone");
var stone2 = document.getElementsByClassName("stone2");
var stone3 = document.getElementsByClassName("stone3");
var stone4 = document.getElementsByClassName("stone4");
var stone5 = document.getElementsByClassName("stone5");
var stone6 = document.getElementsByClassName("stone6");
var battlegrnd = document.getElementsByClassName("battle-grnd");
let sto1=[250,200,150,100,50,0]
let sto2=[200,150,100,50,0,-50]
let sto3=[150,100,50,0,-50,-100]
let sto4=[100,50,0,-50,-100,-150]
let sto5=[50,0,-50,-100,-150,-200]
let sto6=[0,-50,-100,-150,-200,-250]
let c;
function battle(c,stones){
// let c=
    let a =c+"px"
for (var i = 0; i < stones.length; i++) {
    
    stones[i].style.top=a
    if (!stones[i].classList.contains("animation")) {
        stones[i].classList.add("animation");
        
    }
    setTimeout(function(){
        stone2[0].classList.remove("animation");
        battle(sto2[Math.floor(Math.random() * 6)],stone2)
    },800)
    setTimeout(function(){
        stone3[0].classList.remove("animation");
        battle(sto3[Math.floor(Math.random() * 6)],stone3)
    },1600)
    setTimeout(function(){
        stone4[0].classList.remove("animation");
        battle(sto4[Math.floor(Math.random() * 6)],stone4)
    },2400)
    setTimeout(function(){
        stone5[0].classList.remove("animation");
        battle(sto5[Math.floor(Math.random() * 6)],stone5)
    },3000)
    setTimeout(function(){
        stone6[0].classList.remove("animation");
        battle(sto6[Math.floor(Math.random() * 6)],stone6)
    },3600)
    setTimeout(function(){
        stone[0].classList.remove("animation");
        battle(sto1[Math.floor(Math.random() * 6)],stone)
        
    },4000)
}
}

battle(sto1[Math.floor(Math.random() * 6)],stone)

