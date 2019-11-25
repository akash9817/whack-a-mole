var x =  document.querySelectorAll(".mole")
var e;
var touched = false;
var m = 0
function startGame(){
    if(touched){
        clearInterval(e)
        touched = false
        m = m + 1
        document.querySelector(".StartButton").innerHTML = "Start"
    }else{
        document.querySelector(".StartButton").innerHTML = "Stop"
    touched = true
    if(m == 0){
    var timer =  document.getElementById("clock").innerHTML
    timer = 11
    }else{
        var timer =  document.getElementById("clock").innerHTML
    }
    e =  setInterval(() =>{
        if(timer == 0){
            clearInterval(e)
            var total = document.querySelector(".score").innerHTML
            if(total > 3){

                document.getElementById("winPopup").style.display = "block"
                document.getElementById("winScore").innerHTML = total
            }else{
                document.getElementById("losePopup").style.display = "block"
                document.getElementById("loseScore").innerHTML = total

            }
            return
        }
        var y = x[Math.floor(Math.random() * 6)]
        y.onclick = function(){
           var main =  document.querySelector(".score")
           var s = main.innerHTML
           s++
           main.innerHTML = s
        }
        y.style.top = "0%"
       timer = timer - 1
       document.getElementById("clock").innerHTML = timer 
       setTimeout(() =>{
           y.style.top = "100%"
       },(Math.floor(Math.random() *(12- 9 + 1)) + 9) * 100) 
       

    },1000)
}
}
function reset(event){
    event.target.parentElement.style.display = "none"
    document.querySelector(".score").innerHTML = "0"
    document.getElementById("clock").innerHTML = "Timer"
    m = 0
    touched = false
    document.querySelector(".StartButton").innerHTML = "Start"  
}