//Выбираем все вкладки
const filters = document.querySelectorAll("span[data-tab-id]"),
      categories = document.querySelectorAll("section[data-content-id]");
let curTab = document.querySelector(`section[data-content-id=${localStorage.getItem("lastTab")}]`);


window.addEventListener("scroll", () => {
    localStorage.setItem(`${curTab.dataset.contentId}Scroll`,document.documentElement.scrollTop );
    // console.log(`Saved scroll position for ${curTab.dataset.contentId} as ${document.documentElement.scrollTop }`);
});


//При клике на вкладку отображаем её контент
filters.forEach(f => {
    f.addEventListener("click", () => {
        categories.forEach(c => {
            c.classList.remove("active-tab");
        });
    
        document.querySelector(`section[data-content-id="${f.dataset.tabId}"`).classList.add("active-tab");
        const filter = f.dataset.tabId
        localStorage.setItem("lastTab", filter);
        curTab = filter;
        window.scrollTo(0,localStorage.getItem(curTab.dataset.contentId));
    });
})

//Выбираем все фильтры вкладок
const lis = document.querySelectorAll("li > span");

// При клике на фильтр выделяем его
lis.forEach(item => {
    item.addEventListener("click", makeItActive);

    function makeItActive() {
        if(item.dataset.dropdown) return;
        lis.forEach(item => item.classList.remove("active"));

        this.classList.add("active");
        localStorage.setItem("lastTabFilter",this.dataset.tabId);
    }
});

//Делаем так чтобы браузер помнил последнию вкладку и открывал её
window.addEventListener("load", chooseTab);
function chooseTab() {
    const tabFilter = localStorage.getItem("lastTabFilter"),
        //   aOp = document.querySelector(".active"),
          tab = localStorage.getItem("lastTab");

    // categories.forEach(item => item.classList.remove("active-tab"));
    categories[0].classList.remove("active-tab");
    document.querySelector(`section[data-content-id="${tab}"`).classList.add("active-tab");

    lis.forEach(item => item.classList.remove("active"));
    document.querySelector(`span[data-tab-id="${tabFilter}"`).classList.add("active");
    // aOp.style.setProperty("--a-op", 1);


}