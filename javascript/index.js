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

function renderOneComment(comment) {
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = ''

document.querySelector('#comment-section').appendChild(card)
}

function getAllComments() {
    fetch('http://localhost3000/comments')
}

function initialize() {

}
initialize()