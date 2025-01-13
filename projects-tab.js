let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".thumbnail .item");

let countItem = items.length;
let itemActive = 0;


// Click to move to another item
next.onclick = function(){
    itemActive += 1;
    if(itemActive >= countItem){
        itemActive = 0
    }

    showSlider()
}

prev.onclick = function(){
    itemActive -= 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

// Auto-slide every 150000ms
let refreshClick = setInterval(function(){next.click();}, 15000)


// Show active slide
function showSlider(){
    let itemActiveOld = document.querySelector(".slider .list .item.active");
    let thumbnailOld = document.querySelector(".thumbnail .item.active");
    itemActiveOld.classList.remove("active");
    thumbnailOld.classList.remove("active");

    items[itemActive].classList.add("active");
    thumbnails[itemActive].classList.add("active")

    // Reset auto slide
    clearInterval(refreshClick);
    refreshClick = setInterval(function(){next.click();}, 15000)
}

// Click thumbnail (small boxes bottom of page) to move slide
thumbnails.forEach((thumbnail , index) => {
    thumbnail.addEventListener("click", () => {
        itemActive = index;
        showSlider();
    })
})