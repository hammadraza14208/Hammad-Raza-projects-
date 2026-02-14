let box = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let turn_o = true;
const winPatterns = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal
  [2, 4, 6]  // diagonal
];

box.forEach((Box) => {
  Box.addEventListener("click", () => {
    if (turn_o) {
      Box.innerText = "O";
      turn_o = false;
    }
    else{
        Box.innerText="X"
        turn_o=true;
    }
 Box.disabled = true;
checkwinn()
  });
});
const checkwinn=()=>{
    for(pat of winPatterns)
      console.log(pat[0],pat[2],pat[1])
        
}