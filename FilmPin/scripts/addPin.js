const pins = new Map();
const addPinButton = document.getElementById("add-film-pin");
const previewContainer = document.getElementById("pin-preview");
const all = document.getElementById("recent");

function addPin(pin) {
    pins.set(pin[1], pin);
}

addPinButton.onclick = function() {
    const pin = document.getElementById("new-pin" + i);
    pin.title = titleInput.value;
    let pinInfo = [pin, pin.id];
    addPin(pinInfo);
    all.append(pins.get(pinTitle)[0]);
    i = i + 1;
    closeAddModal();
    clearForm();
    titleToset = "";
    pinTitle = "";
}