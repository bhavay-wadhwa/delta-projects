let btn=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;
    ul.appendChild(item);

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("del");
    item.appendChild(delBtn);


    input.value="";
})

ul.addEventListener("click",function(event){      // bubbling of events
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");

    }
})
// let deleteBtns=document.querySelectorAll(".del");
// for(deleteBtn of deleteBtns){
//     deleteBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }