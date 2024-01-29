// Используем библеотеку
const galleries = document.querySelectorAll(".laboratory__container");

galleries.forEach(gallery => {
    lightGallery(gallery, {
        thumbnail:true,
        closable: false,
        selector: ".laboratory__img",
        selectWithin: `section[data-content-id=${gallery.parentNode.dataset.contentId}]`
    }); 
})



