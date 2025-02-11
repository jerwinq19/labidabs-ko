const toggleBtn = document.getElementById("hide")
const heading = document.getElementById("heading")


toggleBtn.addEventListener('click',(e) => {
    heading.classList.toggle('.heading')
})