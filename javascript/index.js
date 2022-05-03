const likesDisplay = document.querySelector('.displayLikes');

const likesPlus = document.querySelector('.likesAdd');

let likes;

fetch('http://localhost:3000/likes')
.then(res => res.json())
.then(likesObj => {
    likes = likesObj.likesCount    
    updateDisplay()
})
.catch(err => console.log(err))

likesPlus.addEventListener("click", () => {
    likes++;
    updateDisplay();
    fetch('http://localhost:3000/likes', {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({likesCount: likes})
    })
});


function updateDisplay() {
    likesDisplay.innerHTML = likes;
};

document.querySelector('#comment-section').addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    let commentText = {
        comment:e.target.commentBox.value
    }
    renderOneComment(commentText)
}

function renderOneComment({id, comment}) {
    let card = document.createElement('div')
    let cardLi = document.createElement('li')
    cardLi.innerText = comment
    const deleteButton = document.createElement('button')
    deleteButton.addEventListener('click', () => {
        handleDelete(id)
        card.remove()
    })
    deleteButton.innerText = "X"
    card.append(cardLi, deleteButton)
    document.querySelector('#comments').appendChild(card)
}

function getAllComments() {
    fetch('http://localhost:3000/comments')
    .then(res => res.json())
    .then(commentText => {
        console.log(commentText)
        commentText.forEach(comment => renderOneComment(comment))
    }) 
    .catch(err => console.log(err))
}

function handleDelete(commentId) {
    fetch(`http://localhost:3000/comments/${commentId}`, {
        method: 'DELETE',
        header: {
            'content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}  

function initialize() {
    getAllComments()
}

initialize()

const button = document.getElementById("post"); 

function alertButton() {
    alert('Bark Bark! Thank you!');
}
    button.addEventListener("click", alertButton);

const newButton = document.querySelector('#newButton')
newButton.addEventListener('click', () => {
  const li = document.createElement('li')
  newButton.appendChild(li)
})