const  mainContainer = document.querySelector('.container'),
    categories = document.querySelector('.categories__list'),
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

const formContainer = document.querySelector('.form-container'),
    mainForm = document.querySelector('.form'),
    mainFormInputs = document.querySelectorAll('.js-input'),
    pib = mainForm.pib,
    city = mainForm.city,
    delivery = mainForm.delivery,
    payment = mainForm.payment,
    quantity = mainForm.quantity,
    comment = mainForm.comment,
    submitFormBtn = document.querySelector('.submit-btn');

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
    formContainer.classList.remove("hide");
    mainContainer.classList.add("semi-hidden");
});





function validateName(el) {
    let re = /[a-zA-Zа-яА-Я]{2,}\s[a-zA-Zа-яА-Я]{2,}\s[a-zA-Zа-яА-Я]{2,}/gm;
    return re.test(el);
}

function validatePostOfficeNumber(el) {
    let re = /[0-9]{1,5}/;
    return re.test(el);
}


mainForm.onsubmit = function() {

    event.preventDefault();

    let pibVal = pib.value;
    let postOfficeNum = delivery.value;

    let emptyInputs = Array.from(mainFormInputs).filter(function(input) {
        return input.value === "";
    });
    

    mainFormInputs.forEach((el) => {
        if (el.value === '') {
            el.classList.add("error")
        } else {
            el.classList.remove("error")
            el.classList.add("valid")
        }
    })

    if (!validateName(pibVal)) {
        pib.classList.remove("valid")
        pib.classList.add("error")
        return false;
    } else {
        pib.classList.remove("error")
        pib.classList.add("valid")
    }


    if (!validatePostOfficeNumber(postOfficeNum)) {
        delivery.classList.remove("valid")
        delivery.classList.add("error")
        return false;
    } else {
        delivery.classList.remove("error")
        delivery.classList.add("valid")
    } 

    if (emptyInputs.length !== 0) {
        return false;
    } else {
        setTimeout(() => {
            alert(`Шановний ${pib.value}!\nВи замовили товар ${test} у кількості: ${quantity.value}.\n ${test} прямує у місто ${city.value} до відділеня Нової пошти №${delivery.value}`)
        }, 0);
        formContainer.classList.add("hide");
        goods.classList.add("hide");
        goodsInfo.classList.add("hide");
        mainContainer.classList.remove("semi-hidden");
    }
}