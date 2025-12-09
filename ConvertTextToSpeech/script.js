const textArea = document.querySelector(".text-area");
const speakBtn = document.querySelector("button");
const stopBtn = document.querySelector(".stop");


speakBtn.addEventListener('click',()=>{
    if(textArea.value ===""){
       alert("Please Enter Text");
       return;
    }
     const utterance = new SpeechSynthesisUtterance(textArea.value);
        speechSynthesis.speak(utterance);
});



stopBtn.addEventListener("click", () => {
    speechSynthesis.cancel();
});
