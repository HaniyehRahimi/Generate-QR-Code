const inputBox = document.getElementById("input-box")
const generateButton = document.getElementById("generate-btn")
const imageBox = document.querySelector(".img-box")
const image = document.querySelector(".img-box img")

function generateQR() {
const qrValue = inputBox.value

if (qrValue) {
    const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    image.src = qrURL
    generateButton.innerText = 'Generating QR code...'
    inputBox.value = ""

    image.addEventListener("load",()=>{
     imageBox.classList.remove("hidden")
    generateButton.innerText = 'Generate QR code'
    })
    } else{
    inputBox.classList.add("error")
    setTimeout(() => {
    inputBox.classList.remove("error")
    }, 1000);
}}

generateButton.addEventListener('click',generateQR)



