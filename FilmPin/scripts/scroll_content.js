const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenSections = document.querySelectorAll(".hide");
console.log(hiddenSections)
hiddenSections.forEach((element) => scrollObserver.observe(element));