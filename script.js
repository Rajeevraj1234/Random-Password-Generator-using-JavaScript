let genBtn = document.querySelector(".genBtn");
let outputBox = document.querySelector(".outputBox");
let copyIcon = document.querySelector(".copyIcon");
let allchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-+={}[]?/";
let arr = Array.from(allchar);
let length = 16;


genBtn.addEventListener("click",()=>{
    let pass = "";
    for(let i=0; i<length;i++){
        pass += arr[Math.floor(Math.random() * arr.length)];
    }
    outputBox.value = pass;
});


copyIcon.addEventListener("click",()=>{
    let copyText = outputBox.value
    navigator.clipboard.writeText(copyText);
    alert("Text Copied");
});