categories.forEach(section => {
    if (section.innerHTML.trim() === "") {
        section.innerHTML = "<h1>Пустота...</h1>"
    }
});