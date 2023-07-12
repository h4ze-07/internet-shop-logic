const categories = document.querySelector('.categories__list'),
    goods = document.querySelector('.goods'),
    goodsInfo = document.querySelector('.goods-info'),
    buyButton = document.querySelector('.btn-buy'),
    phoneItems = document.querySelector('.phones-list'),
    laptopItems = document.querySelector('.laptops-list'),
    pcsItems = document.querySelector('.pcs-list');
    phoneCgory = categories.children[0],
    laptopCgory = categories.children[1],
    pcCgory = categories.children[2],
    info = goodsInfo.firstElementChild;

goods.classList.add("hide");
goodsInfo.classList.add("hide");
categories.style.height = "400px";


phoneCgory.addEventListener("click", (e) => {
    goods.classList.remove("hide");
    phoneItems.style.display = "flex";

    laptopItems.style.display = "none";
    pcsItems.style.display = "none";
});

laptopCgory.addEventListener("click", (e) => {
    goods.classList.remove("hide");
    laptopItems.style.display = "flex";

    phoneItems.style.display = "none";
    pcsItems.style.display = "none";

});

pcCgory.addEventListener("click", (e) => {
    goods.classList.remove("hide");
    pcsItems.style.display = "flex";

    phoneItems.style.display = "none";
    laptopItems.style.display = "none";
});


let test;

for (let el of phoneItems.children) {
    el.addEventListener("click", (e) => {
        goodsInfo.classList.remove("hide");
        info.textContent = `${el.textContent}: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni molestias magnam doloribus soluta maxime voluptas.`
        test = el.textContent;
    }); 
};

for (let el of laptopItems.children) {
    el.addEventListener("click", (e) => {
        goodsInfo.classList.remove("hide");
        info.textContent = `${el.textContent}: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni molestias magnam doloribus soluta maxime voluptas.`
        test = el.textContent;
    }); 
};

for (let el of pcsItems.children) {
    el.addEventListener("click", (e) => {
        goodsInfo.classList.remove("hide");
        info.textContent = `${el.textContent}: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni molestias magnam doloribus soluta maxime voluptas.`
        test = el.textContent;
    }); 
};


buyButton.addEventListener("click", (e) => {
    alert(`${test} is buyed! Hope to see ya again :)`);
    goods.classList.add("hide");
    goodsInfo.classList.add("hide");
});