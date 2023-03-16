const bird = document.getElementById("bird") ;
const birdImg = document.getElementById("birdImg") ;
const block = document.getElementById("block") ;
const hole = document.getElementById("hole") ;
const over = document.getElementById("result") ;
const score = document.getElementById("score") ;
var scoreValue = 0 ;
let gameStart = false ;
let Jumping = false ;
block.classList.remove("move") ;
hole.classList.remove("move") ;

window.addEventListener("keydown" , (e)=>{
    if(e.code === "Space" && !gameStart){
        console.log("Game Started") ;
        block.classList.add("move") ;
        hole.classList.add("move") ;
        gameStart = true ;
        var fall = setInterval(function(){
            var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top")) ;
            var birdBottom = birdTop + 100 ;
            var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top")) ;
            var holeBottom = holeTop + 180 ;
            var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")) ;
            if(!Jumping){
                bird.style.top = (birdTop + 3) + "px" ; 
            }
            if(birdTop < 70 || birdBottom > 812 || (blockLeft < 491 && blockLeft > 325 && (birdBottom < holeTop + 812 || birdTop > holeBottom + 812 ))){
                over.style.display = "flex" ;
                bird.style.display = "none" ;
                block.style.display = "none" ;
                hole.style.display = "none" ;
                scoreValue = 0 ;
                gameStart = false ;
                }
            } , 10)
        }
    else if(e.code === "Space"){
        function Jump(){
        var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top")) ;
        bird.style.top = (birdTop - 100) + "px" ;  
        Jumping = true ;
        }
        Jump() ;
        setTimeout(function(){
            Jumping = false ;
        } , 100)
    }
})
hole.addEventListener("animationiteration" , holeEvent)
function holeEvent(){
    var random = -(Math.random()*(740-180) + 180) ;
    hole.style.top = random + "px" ;
    scoreValue++ ;
    score.innerHTML = "Score : " + scoreValue ;
}

