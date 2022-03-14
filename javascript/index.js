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

document.querySelector('#commentSection').addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    let commentObject = {
        comment:e.target.comment.value
    }
}
renderOneComment(commentObject)

function renderOneComment(comment) {
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = ''

document.querySelector('#comment-section').appendChild(card)
}

function getAllComments() {
    fetch('http://localhost3000/comments')
    .then(res => res.json())
    .then(comment => console.log(data))
}

function initialize() {
    getAllComments()
    console.log()
}
initialize()