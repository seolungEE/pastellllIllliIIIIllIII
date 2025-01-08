let i = 0;
const alertButton = document.querySelector("#alert-button");

alertButton.addEventListener("click", () => {
    alert("안녕하세요! 버튼이 클릭되었습니다.");
});

const colorchange = document.querySelector("#CC");

setInterval(() => {
    i++;
    const colors = ["#ffdddd", "#ffe5dd", "#ffeedd", "#fff6dd", "#ffffdd","#f6ffdd","#eeffdd","#e5ffdd","#ddffdd","#ddffe5","#ddffee","#ddfff6","#ddffff","#ddf6ff","#ddeeff","#dde5ff","#ddddff","#e5ddff","#eeddff","#f6ddff","#ffddff","#ffddf6","#ffddee","#ffdde5"];
    console.log(colors[i%colors.length]);
    document.body.style.backgroundColor = colors[i%colors.length];
  }, 100);

// app.js
const commentInput = document.querySelector("#comment-input");
const commentButton = document.querySelector("#comment-button");
const commentList = document.querySelector("#comment-list");

commentButton.addEventListener("click", () => {
    const commentText = commentInput.value.trim();
    if (commentText !== "") {
        const li = document.createElement("li");
        li.textContent = commentText;
        commentList.appendChild(li);
        commentInput.value = "";
    }
});

