const gebenAlter = document.getElementById("gebenAlter")
const num = document.getElementById("num")
const alter = document.getElementById("alter")
const antwort = document.getElementById("antwort")
document.getElementById("alter").addEventListener("click", function (event) {
    event.preventDefault()
})
function greaterThen() {
    if (num.value < 18) {
        antwort.innerHTML = "Nein,du darfst keine Shisher rauchen."
    } else {
        antwort.innerHTML = "Ja,du kannst Shisher rauchen."
    }
}