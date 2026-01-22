const clock=document.querySelector(".clock");



//just like setTimeout
setInterval(function(){
    let date=new Date();
clock.innerHTML=date.toLocaleTimeString();
},1000)