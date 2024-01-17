

const textarea = document.getElementById("textarea")
const totalcounter = document.getElementById("totalcounter")
const remainingcounter = document.getElementById("remainingcounter")

textarea.addEventListener("keyup",function(){

    console.log("Key is pressed")

    updateCounter()
})


function updateCounter(){

    totalcounter.innerText = textarea.value.length;

    remainingcounter.innerText = textarea.getAttribute("maxlength") - textarea.value.length;
}