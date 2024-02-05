const imgs = document.querySelectorAll("img[loading=lazy]");

imgs.forEach(img => {
    const container = img.closest(".laboratory__img-container")

    container.addEventListener('load', () => {
        img.style.width = img.naturalWidth + 'px';
        img.style.height = img.naturalHeight + 'px';
    });
})