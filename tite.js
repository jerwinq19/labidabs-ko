const yes = document.getElementById("yes")
const no = document.getElementById("no")
const next = document.getElementById('nextBtn')
const myImg = document.getElementById("myimg")
const title = document.getElementById("heading")
const computedStyle = window.getComputedStyle(yes)
const normal = window.getComputedStyle(no)
let size = parseInt(computedStyle.width)

let char = 0
let myTxt = "Mahal, sa bawat araw na dumadaan, mas lalo kitang minamahal. Hindi lang dahil sa mga matatamis mong ngiti o sa kung paano mo ako pinapasaya, kundi dahil sa kung sino ka talaga—ang taong nagpaparamdam sa akin ng tunay na kahulugan ng pagmamahal. Kahit anong pagsubok ang dumating, hindi kita bibitawan. Pangako, ikaw lang at wala nang iba. Ikaw ang pahinga ko, ang saya ko, at ang dahilan kung bakit gusto kong maging mas mabuting tao araw-araw. Mahal na mahal kita, higit pa sa kaya kong ipaliwanag."
let txtSpeed = 40

function type(callback) {
    if (char < myTxt.length) {
        document.getElementById("msg").innerHTML += myTxt.charAt(char)
        char++
        setTimeout(() => type(callback), txtSpeed)
    } else if (callback) {
        callback()
    }
}


let call = [
    "mahal mo pa ba?",
    "luh hindi na talaga?",
    "ang sakit mo na boss",
    "haist hindi mo na pala ako mahal"
]


let imgs = [
    './images/cat1.gif',
    './images/cat2.gif',
    './images/cry-crying.gif',
    './images/cat4.gif',
]

let count = 0

yes.addEventListener('click', () => {
    myImg.src = "./images/cat-happy.gif"
    title.textContent = "diba sabi na eh mahal mo ako haist"
    size = parseInt(normal.width)
    height = parseInt(normal.height)

    yes.style.width = `${size}px`;
    yes.style.height = `${height}px`;
    
    no.style.width = `${size}px`;
    no.style.height = `${height}px`;

    no.disabled = true;

    type(() => {
        next.style.display = "block"
    })
    
})

no.addEventListener('click', () => {
    console.log(size)
    size += 5
    yes.style.width = `${size}px`
    yes.style.height = `${size}px`

    title.textContent = call[count]
    myImg.src = imgs[count]

    count = (count + 1) % call.length;
})

next.addEventListener("click", () => {
    open('test.html')
})