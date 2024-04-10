const btn=document.querySelector("#cartBtn");
const dosaBtn=document.querySelector(".dosaBtn");
const chaapBtn=document.querySelector(".chaapBtn");
const momosBtn=document.querySelector(".momosBtn");
let bodyBtn=document.querySelector(".main-cont");
// const text=document.querySelector(".text");
let ul=document.querySelector("ul");
//  let buttons=documetn.querySelectorAll(".btn");
dosaBtn.addEventListener('click',function(){
    let  li = document.createElement('li');
    li.innerText="Dosa added";
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    li.appendChild(delbtn);
    ul.appendChild(li);
    // console.dir(li.innerText);
})
chaapBtn.addEventListener('click',function(){
    let  li = document.createElement('li');
    li.innerText="Chaap added";
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    li.appendChild(delbtn);
    ul.appendChild(li);
    // console.dir(li.innerText);
})
momosBtn.addEventListener('click',function(){
    let  li = document.createElement('li');
    li.innerText="Momos added";
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    li.appendChild(delbtn);
    ul.appendChild(li);
    // console.dir(li.innerText);
})

btn.addEventListener('click',function(){
    bodyBtn.className="hide";
    ul.classList.remove("hide");
})

ul.addEventListener("click", function(event){
    if(event.target.nodeName=='BUTTON'){
        let li=event.target.parentElement;
        li.remove();
    }
})


