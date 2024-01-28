// lightGallery(document.querySelector('.laboratory__img-container'));
const galleries = document.querySelectorAll(".laboratory__img-container");

galleries.forEach(gallery => {
    lightGallery(gallery, {
        thumbnail:true,
        closable: false
    }); 
})



