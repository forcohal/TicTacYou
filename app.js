let boxes = document.querySelectorAll(".box");
let rSet = document.querySelector(".reset");
let whoWin = document.querySelector(".over");
let run = 1;
let num = 0; 
let symbol = "X";
let winCase=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];


let disable = ()=>{
    boxes.forEach(element => {
        element.disabled = true;
        
    });
}

const start =()=>{
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        box.innerText = symbol;
        num+=1;
        if(num%2==0){
            symbol = "X";
            console.log(symbol);
            document.querySelector(".turnIsOf").textContent = "It is X's turn!";
            }else{
                symbol = "O";
                document.querySelector(".turnIsOf").textContent = "It is O's turn!";
                
            }
            box.disabled = true;
            checkWinner();
    });
})
}

const checkWinner = ()=>{
    for(let pattern of winCase){
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;
        if(
            posVal1!="",
            posVal2!="",
            posVal3!=""
        ){
            if(posVal1==posVal2 && posVal2==posVal3){
                if(
                    posVal1 === "X" && posVal2 === "X" && posVal3 === "X"
                )
                {
                    whoWin.innerText = "Congratulations! X won the match";
                }
                else if(
                    posVal1 === "O" && posVal2 === "O" && posVal3 === "O"
                ){
                    whoWin.innerText = "Congratulations! O won the match";
                }
                else
                {continue}
                disable();
            }
                
            
        }
        
    }
}

const reset = ()=>{
    rSet.addEventListener("click",()=>{
        console.log("clicked");
        whoWin.innerText = "";
        num === 0;

        for(let box of boxes){
            box.innerText="";
            box.disabled = false;
        }

    })

}
start();
 
reset();