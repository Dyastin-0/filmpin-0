const pinContainer = document.getElementById("pin-preview");
const input = document.getElementById("file-input");
const titleInput = document.getElementById("title-input");
const size = document.getElementById("size-input");
let i = 0;
let pinTitle = "";
let titleToset = "";

input.addEventListener("change", (evt) => {
    if (pinContainer.childElementCount > 0) {
        clearForm();
    } 
    let newPin = new Pin(titleInput.value, getImage(), size.value,  "new-pin" + i);
    pinContainer.appendChild(newPin.returnPin());
    evt.target.value = "";
});

titleInput.addEventListener('keyup', () => {
    const title = document.getElementById(titleToset);
    if (titleToset !== "" && pinContainer.childElementCount > 0) {
        title.textContent = titleInput.value;
    }
});

function getImage() {
    const imageElement = document.createElement("img");
    const file = input.files;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        imageElement.src = reader.result;
    });
    reader.readAsDataURL(file[0]);
    return imageElement;
}