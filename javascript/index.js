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

console.log(allComments)


function renderOneComment(comment) {
    console.log(comment)
    document.querySelector('form')
}

function initialize() {
    renderOneComment(allComments)
}
initialize()