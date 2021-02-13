
let boxes = document.querySelectorAll('.box');
let bodyArea = document.querySelector('.bodyArea');
let gameArea = document.querySelector('.gameArea');
function start(){
    let numberOfMoves = 0;
    let move = 1;
    let winner = "";
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i = 0; i < 9; i++){
        
        boxes[i].addEventListener('click',e=>{
            //console.log(`box ${i} was pressed`);
            move%2==0 ? boxes[i].innerText = "X" : boxes[i].innerText = "O";
            move++;
            numberOfMoves++;
            
            for(let k = 0; k<8;k++){
                //console.log(boxes[wins[k][0]].innerHTML);
                //console.log(k)
                if(
                    ((boxes[wins[k][0]].innerText == boxes[wins[k][1]].innerText)&&( boxes[wins[k][1]].innerText == boxes[wins[k][2]].innerText))&&(boxes[wins[k][0]].innerText != "")
                ){
                    winner = boxes[wins[k][0]].innerText;
                    
                    
                }
                if((numberOfMoves==9)&&(winner=="")){
                    winner = "friendship"
                }
                
                
                
            }
            if((winner == "O")||(winner=="X")||(winner=="friendship")){
                console.log(winner)
                let message = (`${winner} wins!`);
                for(let h = 0; h < 9; h++){
                    boxes[h].innerText = "";
                    //winner = ""
                    gameArea.classList.remove("gameArea");
                    gameArea.classList.add("winsWindow");
                    gameArea.innerText = message;
                }
                
                }
            }
        )
    }



}
start();