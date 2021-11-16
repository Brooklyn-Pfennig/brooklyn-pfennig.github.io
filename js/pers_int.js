var showHide = document.getElementById("show-hide")
showHide.addEventListener("click", processShowHide, false)
function processShowHide() {
    showHide = document.getElementById("show-hide")
    essaySection = document.getElementById("essay-section")
    value = showHide.innerHTML
    if (value == '[hide]') {
        showHide.innerHTML = "[show]"
        essaySection.hidden = true
    } else if (value == "[show]") {
        showHide.innerHTML = "[hide]"
        essaySection.hidden = false
    }
}