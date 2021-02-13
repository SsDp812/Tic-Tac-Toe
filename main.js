let boxes = document.querySelectorAll('.box');
let move = 1;
for(let i = 0; i < 9; i++){
    
    boxes[i].addEventListener('click',e=>{
        console.log(`box ${i} was pressed`);
        move%2==0 ? boxes[i].innerHTML = "X" : boxes[i].innerHTML = "O";
        move++;
        winner = check(boxes);
        if(winner != "null"){
            alert(`${winner} wins!`);
            for(box in boxes){
                box.innerHTML = "";
            }
            move=1;
            i=0;
        }
    })
}



function check(boxes){
    let winner = "";
    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i = 0; wins.length;i++){
        console.log(boxes[wins[i][0]].innerHTML);
        if(
            (boxes[wins[i][0]].innerHTML === boxes[wins[i][1]].innerHTML === boxes[wins[i][2]].innerHTML)&&(boxes[wins[i][0]] !== "")
        ){
            winner = boxes[wins[i][0]].innerHTML;
            break;
        }
        else{
            winner = "null"
        }
        
        
    }

    return winner;
}