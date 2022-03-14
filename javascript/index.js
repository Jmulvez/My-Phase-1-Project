const e = require("express");

const post= document.getElementById("post");

post.addEventListener("click", function(){
    const commentBoxValue= document.getElementById("comment-box").value;
    const li = document.createElement("li");
    const text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("comments").appendChild(li);
});

const likesDisplay = document.querySelector('.displayLikes');

const likesPlus = document.querySelector('.likesAdd');

let likes = 0;

updateDisplay();

likesPlus.addEventListener("click",()=>{
    likes++;
    updateDisplay();
}) ;

function updateDisplay(){
    likesDisplay.innerHTML = likes;
};


document.querySelector('comment-section').addEventListener('submit', handleSubmit)

function handleSubmit(e)
e.preventDefault()
let commentObject = {
    comment:e.target.comment.value
}
renderOneComment(commentObject)

function renderOneComment(comment) {

}