const addButton = document.getElementById("add-pin");
const floatingAdd = document.getElementById("floating-add");

addButton.addEventListener("click", () => {
    openModal();
});

floatingAdd.addEventListener("click", () => {
    openModal();
});

function openModal() {
    const modal = document.getElementById("add-modal");
    modal.classList.add("active");
    const overlay = document.getElementById("overlay")
    overlay.classList.add("active");
}

