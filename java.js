let carrier = document.getElementById("carrier");

let count = 0;

function incrementCount(){
   
}

function decrementCount(){
   carrier.innerHTML = count-=1;
}
// document.getElementById('nextBtn')
document.querySelector(".upBtn").addEventListener("click", function(e){
   e.preventDefault()
   carrier.innerHTML = count+=1;
})

document.querySelector("#downBtn").addEventListener("click", decrementCount)

    
   