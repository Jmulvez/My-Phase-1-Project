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

const form = document.querySelector('form')  

form.addEventListener('submit', (e) => {  
  e.preventDefault()  
  const formData = new formData(e.target)  
  const json = JSON.stringify(object.fromEntries(formData));  
  console.log(json)  
})
