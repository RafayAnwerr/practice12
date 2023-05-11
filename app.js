let para = document.getElementById("para");
para.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure perferendis, quis doloremque aliquid dicta quisquam alias obcaecati explicabo voluptatem fuga a debitis vero amet magnam esse magni ipsa harum nihil. Quaerat."  

// Toggle visibility ;

// para.style.backgroundColor = "#000";
// para.style.color = "#fff";
// setInterval(function (){
// if ( para.style.display === "none"){
//     para.style.display = "block";
// }else{
//     {
//         para.style.display = "none"
//     }
// }
// }, 500)

// playing with width ; 
para.style.backgroundColor = "#000";
para.style.color = "#fff";
para.style.width = "100%";
setInterval(function (){
    let width = para.style.width;
    if ( width === "100%"){
        para.style.width = "10%";
    }else{
        {
           width =  +width.replace("%", "");
           para.style.width = width + 10 + "%";
        }
    }
    }, 500)
    







