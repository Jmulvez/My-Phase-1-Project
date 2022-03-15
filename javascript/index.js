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

const main = document.querySelector("#container")
console.log(main)

const commentForm = document.querySelector("#comment-section")

const commentList = document.querySelector("#comments")

commentForm.addEventListener("submit", function(e) {
    e.preventDefault()
    const newComment = document.querySelector("#comment-box").value

    commentList.innerHTML += `
    <li> ${newComment}
    </li>`
})

