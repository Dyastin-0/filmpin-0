const closeButton = document.getElementById("close-add-modal");
const overlay = document.getElementById("overlay");

closeButton.onclick = function() {
    closeAddModal();
    clearForm();
}

overlay.onclick = function() {
    closeAddModal()
    clearForm()
}

function closeAddModal() {
    const modal = document.getElementById("add-modal");
    modal.classList.remove("active");
    const overlay = document.getElementById("overlay")
    overlay.classList.remove("active");
}

function clearForm() {
    const container = document.getElementById("pin-preview");
    if (container.childElementCount > 0) {
        container.firstChild.remove();
    }
    const input = document.getElementById("title-input");
        input.value = "";
}