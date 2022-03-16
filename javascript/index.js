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

document.querySelector('#comment-section').addEventListener('submit', handleSubmit)

function handleSubmit(e) {
e.preventDefault()

let commentText = {
    comment:e.target.commentBox.value
}

fetch('http://localhost:3000/comments')

renderOneComment(commentText)
}

function renderOneComment(comment) {
    let card = document.createElement('li')
    card.innerText = comment.comment
    document.querySelector('#comments').appendChild(card)
}

function getAllComments() {
    fetch('http://localhost:3000/comments')
    .then(res => res.json())
    .then(commentText => commentText.forEach(comment => renderOneComment(comment)))
}

function initialize() {
    getAllComments()
}

initialize()

document.addEventListener('DOMContentLoaded', (event) => )