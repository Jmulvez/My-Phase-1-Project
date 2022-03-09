document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        buildComment(e.target.new-comment.value)
        form.reset()
    })
})

const input = document.getElementById('submit');

function clickAlert() {
    alert('Thank you!');
}

input.addEventListener('click', clickAlert);