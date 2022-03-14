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

function handleFormSubmit(event) {
    event.preventDefault();
    
    const data = new formData(event.target);
    
    const formJSON = object.fromEntries(data.entries());

    const results = document.querySelector('.results pre');
  results.innerText = JSON.stringify(formJSON, null, 2);
}

const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);
