const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(item => {
    item.addEventListener("click", expand);

    function expand() {
        const h = this.parentNode.style.maxHeight;
        console.log(this.parentNode);
        if(h === "") {
            this.parentNode.style.maxHeight = "fit-content";
        } else {
            this.parentNode.style.maxHeight= "";
        }
    }
});