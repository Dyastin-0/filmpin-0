const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keyup", (e) => {
    displayPins(searchInput.value);
});

function displayPins(target) {
    fetch("./json_files/films.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        container.innerHTML = "";
        for (var i = 0; i < data.length; i++) {
            if (String(data[i].name).includes(String(target))) {
                const image = document.createElement("img");
                image.src = data[i].imageURL;
                let newPin = new Pin(data[i].name, image, data[i].pinLength, "loaded-pin" + j);
                container.append(newPin.returnPin());
            }
        }
    })
    .catch(function (err) {
        console.log(err);
    });
}