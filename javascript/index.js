const post= document.getElementById("post");
post.addEventListener("click", function(){
    const commentBoxValue= document.getElementById("comment-box").value;
    const li = document.createElement("li");
    const text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("comments").appendChild(li);
});

const button = document.getElementById('likeButton'),
    count = 0;
    button.onClick = function() {
        count += 1;
        button.innerHTML = "Likes: " + count;
    };