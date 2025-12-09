const clock=document.querySelector(".clock");
// const closck =document.getElementsByClassName("clock")  or


//just like setTimeout
setInterval(function(){
    let date=new Date();
// console.log(date.toLocaleTimeString());
clock.innerHTML=date.toLocaleTimeString();
},1000)