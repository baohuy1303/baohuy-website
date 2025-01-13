
document.querySelectorAll('.slider').forEach((slider) => {
    let items = slider.querySelectorAll(".list .item"); 
    let next = slider.querySelector(".next"); 
    let prev = slider.querySelector(".prev");

    let countItem = items.length;
    let itemActive = 0;

    // Show active slide
    function showSlider() {
        let itemActiveOld = slider.querySelector(".list .item.active");
        if (itemActiveOld) {
            itemActiveOld.classList.remove("active");
        }

        items[itemActive].classList.add("active");

        // Reset auto slide
        clearInterval(refreshClick);
        refreshClick = setInterval(() => next.click(), 3500);
    }

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

    // Auto-slide every 3500ms
    let refreshClick = setInterval(() => next.click(), 3500);
});
