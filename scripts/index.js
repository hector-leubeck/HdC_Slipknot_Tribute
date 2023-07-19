function showText(id) {
    let checkState = document.getElementById(id);
    if (checkState.style.display === none) {
        checkState.style.display = "block"
    } else {
        checkState.style.display = "none"
    }
}