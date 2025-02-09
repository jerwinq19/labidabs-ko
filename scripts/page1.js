const dateCont = document.getElementById("date")
const nextBtn = document.getElementById("next")

function countdown(targetDate) {
    const currentDate = new Date();
    const diff = currentDate - targetDate;



    const days = Math.floor(diff / (1000 * 60 * 60 * 24)); // Calculate days
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calculate hours
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // Calculate minutes
    const seconds = Math.floor((diff % (1000 * 60)) / 1000); // Calculate seconds

    dateCont.innerHTML = `${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`
}


const targetDate = new Date('2024-10-11T00:00:00');


setInterval(() => countdown(targetDate), 1000); 


nextBtn.addEventListener("click", () => {
    open("../html/page-2.html")
})

