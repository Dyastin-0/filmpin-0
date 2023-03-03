class Pin {
    constructor(pinTitle, pinImage, size, id) {
        this.pinTitle = pinTitle;
        this.pinImage = pinImage;
        this.id = id;
        this.size = size;
    }

    returnPin() {
        const pinElement = document.createElement("div");
        pinElement.classList.add("pin");
        pinElement.classList.add(this.size);
        pinElement.id = this.id;
        pinElement.title = this.pinTitle;

        const pinTitleElement = document.createElement("label");
        pinTitleElement.id = "new-pin-label" + i;
        pinTitleElement.classList.add("pin-label");
        pinTitleElement.textContent = this.pinTitle;
        
        const modal = document.getElementById("modal");
        const modalClone = modal.content.cloneNode(true);

        pinElement.append(modalClone);
        pinElement.appendChild(pinTitleElement);
        pinElement.appendChild(this.pinImage);
        
        titleToset = pinTitleElement.id;
        pinTitle = pinElement.id;
        return pinElement;
    }
}