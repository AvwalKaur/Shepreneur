// let listItem=document.querySelectorAll(".list-item");
// const currMode="activeClass";
// listItem.forEach((item)=>{
//     item.addEventListener("mouseover",()=>{
//         // console.log("You have hovered!");
//         if(currMode==="activeClass"){
//             item.classList.add("active");
//         } 
//     });
// });

const rightBtn=document.querySelector(".right-btn");
rightBtn.addEventListener("click",function(event){
    const conet=document.querySelector(".slide-carousel");
    conet.scrollLeft+=1236;
     event.preventDefault();
});

const leftBtn=document.querySelector(".left-btn");
leftBtn.addEventListener("click",function(event){
    const conet=document.querySelector(".slide-carousel");
    conet.scrollLeft-=1236;
     event.preventDefault();
});