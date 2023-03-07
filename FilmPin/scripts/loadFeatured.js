const container = document.getElementById("all");
let j = 0;
fetch("./json_files/films.json")
.then(function (response) {
    return response.json();
})
.then(function (data) {
    for (var i = 0; i < data.length; i++) {
        console.log(i)
        const image = document.createElement("img");
        image.src = data[i].imageURL;
        let newPin = new Pin(data[i].name, image, data[i].pinLength, "loaded-pin" + j);
        j = j + 1;
        container.append(newPin.returnPin());
    }
})
.catch(function (err) {
    console.log(err);
});