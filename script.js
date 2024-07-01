let all = document.querySelectorAll(".all");
let computer = document.querySelectorAll(".computer");
let user=document.querySelector(".user");
let oppo=document.querySelector(".oppo");
let declare=document.querySelector(".declare");
let pulse = document.querySelector(".pulse");
let gradient=document.querySelector("#gradient")
console.log(computer);
let random = Math.floor(Math.random()*3);
let triangle=document.querySelector(".triangle");
let score=JSON.parse(localStorage.getItem("sc"));
let comter=JSON.parse(localStorage.getItem("ct"));
let scoreEle=document.getElementById("mescore");
let scoreCom=document.getElementById("coscore");
let rulebox=document.querySelector(".rule-box");
let close=document.querySelector(".rule-close");
let hurray=document.querySelector(".hurray");
let hurrayrestart=document.querySelector(".hurray-restart");
let next=document.querySelector(".btn-next");
let rule=document.querySelector(".btn-rule"); 
let hurrayrule=document.querySelector(".hurray-rule");
let scoreboard=document.querySelector(".scoreboard");
let gamebox=document.querySelector(".gamebox");
let ruleclose=document.querySelector(".rule-close");
let cumcore=document.querySelector(".compscore");

if(score){
    scoreEle.innerText=score;
}
else (comter)=>{
    scoreCom.innerText=comter;
}
let count1=0;
let count2=0;
let result=document.querySelector(".result");
all.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        user.style.opacity="1";
        triangle.style.display="none";
        all.forEach(item=> {
            item.style.display="none";
        })
        element.style.display="block";
        element.classList.add("show");
        setTimeout(()=> {
            oppo.style.opacity="1";
            setTimeout(()=> {
                computer[random].style.display="block";
                computer[random].classList.add("comselect");
            },100);
            setTimeout(()=>{
                if(random==index){
                    result.style.display="flex";
                    declare.innerText="TIE UP";
                }else if(index===0 && random==2 || index==1 && random==0 || index==2 && random==1){
                    result.style.display="flex";
                    declare.innerText="YOU WIN";
                    pulse.style.display="block";
                    next.style.display="block";
                    count1=score;
                    count1++;
                    scoreEle.innerText=count1;
                    localStorage.setItem("sc",JSON.stringify(count1));
                }else{
                    result.style.display="flex";
                    declare.innerText="YOU lOST";
                    count2=comter;
                    count2++;
                    scoreCom.innerText=count2;
                    localStorage.setItem("ct",JSON.stringify(count2));
                }
            })
        },100);

    })
})  
result.addEventListener("click",()=>{
    window.location.reload();
})

rule.addEventListener("click",()=>{
    rulebox.style.display="block";
})

next.addEventListener("click",()=>{
    hurray.style.display="block";
    result.style.display="none";
    scoreboard.style.display="none";
    gamebox.style.display="none";
    next.style.display="none";
    rule.style.display="none";
})

hurrayrestart.addEventListener("click",()=>{
    hurray.style.display="none";
    result.style.display="flex";
    scoreboard.style.display="flex";
    gamebox.style.display="flex";
    next.style.display="block";
    rule.style.display="block";
})

hurrayrule.addEventListener("click",()=>{
    rulebox.style.display="block";
})

ruleclose.addEventListener("click",()=>{
    rulebox.style.display="none";
})



