const items = [
    {
        category: 'Phones',
        name: 'phone 1',
        price: 500,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore, fuga saepe velit architecto cumque assumenda nobis unde qui mollitia odit sint dolorum consectetur iste facilis veritatis inventore! Explicabo, excepturi!'
    },
    {
        category: 'Phones',
        name: 'phone 2',
        price: 600,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore, fuga saepe velit architecto cumque assumenda nobis unde qui mollitia odit sint dolorum consectetur iste facilis veritatis inventore! Explicabo, excepturi!'
    },
    {
        category: 'Phones',
        name: 'phone 3',
        price: 700,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore, fuga saepe velit architecto cumque assumenda nobis unde qui mollitia odit sint dolorum consectetur iste facilis veritatis inventore! Explicabo, excepturi!'
    },
    {
        category: 'Phones',
        name: 'phone 4',
        price: 800,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore, fuga saepe velit architecto cumque assumenda nobis unde qui mollitia odit sint dolorum consectetur iste facilis veritatis inventore! Explicabo, excepturi!'
    },
    {
        category: 'Laptops',
        name: 'laptop 1',
        price: 1000,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore, fuga saepe velit architecto cumque assumenda nobis unde qui mollitia odit sint dolorum consectetur iste facilis veritatis inventore! Explicabo, excepturi!'
    },
    {
        category: 'Laptops',
        name: 'laptop 2',
        price: 1100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore, fuga saepe velit architecto cumque assumenda nobis unde qui mollitia odit sint dolorum consectetur iste facilis veritatis inventore! Explicabo, excepturi!'
    },
    {
        category: 'Laptops',
        name: 'laptop 3',
        price: 1200,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore, fuga saepe velit architecto cumque assumenda nobis unde qui mollitia odit sint dolorum consectetur iste facilis veritatis inventore! Explicabo, excepturi!'
    },
    {
        category: 'Laptops',
        name: 'laptop 4',
        price: 1300,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore, fuga saepe velit architecto cumque assumenda nobis unde qui mollitia odit sint dolorum consectetur iste facilis veritatis inventore! Explicabo, excepturi!'
    },
    {
        category: 'PCs',
        name: 'pc 1',
        price: 1500,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore, fuga saepe velit architecto cumque assumenda nobis unde qui mollitia odit sint dolorum consectetur iste facilis veritatis inventore! Explicabo, excepturi!'
    },
    {
        category: 'PCs',
        name: 'pc 2',
        price: 1600,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore, fuga saepe velit architecto cumque assumenda nobis unde qui mollitia odit sint dolorum consectetur iste facilis veritatis inventore! Explicabo, excepturi!'
    },
    {
        category: 'PCs',
        name: 'pc 3',
        price: 1700,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore, fuga saepe velit architecto cumque assumenda nobis unde qui mollitia odit sint dolorum consectetur iste facilis veritatis inventore! Explicabo, excepturi!'
    },
    {
        category: 'PCs',
        name: 'pc 4',
        price: 1800,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore, fuga saepe velit architecto cumque assumenda nobis unde qui mollitia odit sint dolorum consectetur iste facilis veritatis inventore! Explicabo, excepturi!'
    },
];

const orders = document.querySelector('.orders'),
    mainContainer = document.querySelector('.container'),
    categoriesContainer = document.querySelector('.categories'),
    categories =  document.querySelector('.categories__list'),
    goods = document.querySelector('.goods'),
    goodsInfo = document.querySelector('.goods-info'),
    phonesList = document.querySelectorAll('.phones-list__item'),
    laptopsList = document.querySelectorAll('.laptops-list__item'),
    pcsList = document.querySelectorAll('.pcs-list__item'),
    info = document.querySelector('.info'),
    buyButton = document.querySelector('.btn-buy'),
    phoneItems = document.querySelector('.phones-list'),
    laptopItems = document.querySelector('.laptops-list'),
    pcsItems = document.querySelector('.pcs-list'),
    phoneCgory = categories.children[0],
    laptopCgory = categories.children[1],
    pcCgory = categories.children[2];


goods.classList.add("hide");
goodsInfo.classList.add("hide");
categories.style.height = "400px";


phoneCgory.addEventListener("click", (e) => {
    goods.classList.remove("hide");
    phoneItems.style.display = "flex";
    info.textContent = '';

    laptopItems.style.display = "none";
    pcsItems.style.display = "none";
});

laptopCgory.addEventListener("click", (e) => {
    goods.classList.remove("hide");
    laptopItems.style.display = "flex";
    info.textContent = '';

    phoneItems.style.display = "none";
    pcsItems.style.display = "none";

});

pcCgory.addEventListener("click", (e) => {
    goods.classList.remove("hide");
    pcsItems.style.display = "flex";
    info.textContent = '';
    
    phoneItems.style.display = "none";
    laptopItems.style.display = "none";
});

const phoneNames = arrFilter(items, 'Phones');
const laptopNames = arrFilter(items, 'Laptops');
const pcNames = arrFilter(items, 'PCs');



addNames(phonesList, phoneNames);
addNames(laptopsList, laptopNames);
addNames(pcsList, pcNames);


function addNames(list, names) {
    list.forEach((item, index) => {
        item.textContent = names[index];
    });
}

function arrFilter(arr, category) {
    return arr.filter(i => i.category === category).map(i => i.name);
}


addListeners(phonesList);
addListeners(laptopsList);
addListeners(pcsList);


function addListeners(list) {
    for (let el of list) {
        el.addEventListener("click", (e) => {;
            for (let i of items) {
                if (i.name === el.textContent) {
                    goodsInfo.classList.remove("hide");
                    info.innerHTML = 
                        `<p>Good name: ${i.name}</p>
                        <p>Price: ${i.price}</p>
                        <p>Description: ${i.description}</p>`
                    purchase.good = i.name;
                    purchase.price = i.price;
                } 
            }
        })
    }
}

let purchase = {};

buyButton.addEventListener("click", (e) => {
    formContainer.classList.remove("hide");
});

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

        const purchaseOrder = {...purchase}

        let today = new Date();

        purchaseOrder.pib = pib.value;
        purchaseOrder.quantity = quantity.value;
        purchaseOrder.city = city.value;
        purchaseOrder.delivery = delivery.value;
        purchaseOrder.payment = payment.value;
        purchaseOrder.time = today.toLocaleString();
        

        setTimeout(() => {
            alert(`Шановний ${purchaseOrder.pib}!\nВи замовили товар ${purchaseOrder.good} у кількості: ${purchaseOrder.quantity}.\n ${purchaseOrder.good} прямує у місто ${purchaseOrder.city} до відділеня Нової пошти №${purchaseOrder.delivery}`)
        }, 0);

        const ordersFromStorage = JSON.parse(localStorage.getItem('order')) || [];
        ordersFromStorage.push(purchaseOrder);
        localStorage.setItem('order', JSON.stringify(ordersFromStorage));

        formContainer.classList.add("hide");
        goods.classList.add("hide");
        goodsInfo.classList.add("hide");
    }
}

const orderField = document.querySelector('.order-list');

orders.addEventListener('click', () => {

    let orderFromStorage = JSON.parse(localStorage.getItem('order'));
    orderField.innerHTML = '';

    if (orderFromStorage === null || orderFromStorage.length === 0) {
        orderField.insertAdjacentHTML(
            'beforeend',
            `<p class='empty-list'>Order list is empty :( </p>`
        );
    } else {
        for (let i = 0; i < orderFromStorage.length; i++) {
            const el = orderFromStorage[i];
            orderField.insertAdjacentHTML(
                'beforeend',
                `<div class='order-list-item'>
                    <p>Price: ${el.price * el.quantity}</p>
                    <p>Date: ${el.time}</p>
                    <div class="full-info hide">
                        <h3>Full info:</h3>
                        <p>Full name: ${el.pib}</p>
                        <p>Post office: ${el.delivery}</p>
                        <p>City: ${el.city}</p>
                        <p>Payment: ${el.payment}</p>
                    </div>
                    <button class="btnDeleteOrder" data-index="${i}">Delete order</button>
                </div>`
            );
        }
    }

    orderField.classList.toggle('hide');
    categories.classList.toggle('hide');

    const orderListItems = document.querySelectorAll('.order-list-item');
    for (let el = 0; el < orderListItems.length; el++) {
        const orderListItemInfo = orderListItems[el].children[2];
        const deleteOrder = orderListItems[el].children[3];
        orderListItems[el].addEventListener('click', (e) => {
            orderListItemInfo.classList.toggle('hide');
        });

        deleteOrder.addEventListener('click', (e) => {
            e.stopPropagation();
            const orderFromStorage = JSON.parse(localStorage.getItem('order'));

            if (orderFromStorage !== null || orderFromStorage.length > 0) {
                const indexToDelete = parseInt(deleteOrder.getAttribute('data-index'));
                orderFromStorage.splice(indexToDelete, 1);
                localStorage.setItem('order', JSON.stringify(orderFromStorage));


                orderField.innerHTML = '';
                for (let i = 0; i < orderFromStorage.length; i++) {
                    const el = orderFromStorage[i];
                    orderField.insertAdjacentHTML(
                        'beforeend',
                        `<div class='order-list-item'>
                            <p>Price: ${el.price * el.quantity}</p>
                            <p>Date: ${el.time}</p>
                            <div class="full-info hide">
                                <h3>Full info:</h3>
                                <p>Full name: ${el.pib}</p>
                                <p>Post office: ${el.delivery}</p>
                                <p>City: ${el.city}</p>
                                <p>Payment: ${el.payment}</p>
                            </div>
                            <button class="btnDeleteOrder" data-index="${i}">Delete order</button>
                        </div>`
                    );
                }
            }
        });
    }
});