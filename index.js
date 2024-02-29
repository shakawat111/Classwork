// function allLetters(username){
//     const letters = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//     if(letters.test(username)){
//         alert("User name accepted");
//     }else{
//         alert("Please input alphabet only");
//     }
// }


// const form = document.querySelector("#form");

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     allLetters(e.target.username.value);
// })

const btn = document.querySelector(".btn");
const dis = document.getElementsByTagName("h2")[0];
const reset = document.querySelector(".reset");
const save = document.querySelector(".save");
let num = 0;


btn.addEventListener("click",()=>{
    num++;
    dis.innerText = num;
    if(num > 0){
        reset.style.display = "inline-block";
    }
})

reset.addEventListener("click",()=>{
    num=0;
    dis.innerHTML = num;
    reset.style.display = "none";
})

save.addEventListener("click",()=>{
    console.log("Your score is ",num);
    num=0;
    dis.innerHTML = num;
    reset.style.display = "none";
})