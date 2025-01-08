console.log("Hello world")

let a=1;
let b=3;
let c = a+b
console.log(c)
let d=[1,2,3,4,5];
console.log(d[1])
console.log(d)

let str = '';

for (let i = 0;i < 9; i++) {
    str += i;
    console.log(str);
}

// app.js
const alertButton = document.querySelector("#alert-button");

alertButton.addEventListener("click", () => {
    alert("안녕하세요! 버튼이 클릭되었습니다.");
});