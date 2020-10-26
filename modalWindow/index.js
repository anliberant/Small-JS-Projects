'use strict';
let fruits = [
    {
        id: 1,
        title: 'Apple',
        price: 20,
        img:
            'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 2,
        title: 'Banana',
        price: 15,
        img:
            'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 3,
        title: 'Mango',
        price: 50,
        img:
            'https://images.pexels.com/photos/4023132/pexels-photo-4023132.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
];

const toHtml = (fruit) =>
    `
            <div class="col">
                <div class="card">
                    <img style="height: 300px;"
                        src="${fruit.img}" 
                        alt="${fruit.title}" 
                        class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${fruit.title}</h5>
                        <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Check price</a>
                        <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Remove</a>
                    </div>
                </div>
            </div>
    `;
function render() {
    const html = fruits.map((fruit) => toHtml(fruit)).join('');
    document.querySelector('#fruits').innerHTML = html;
}
render();
const priceModal = $.modal({
    title: 'Price',
    closable: true,
    width: '400px',

    footerButtons: [
        {
            text: 'Close',
            type: 'primary',
            handler() {
                priceModal.close();
            },
        },
    ],
});

document.addEventListener('click', (event) => {
    event.preventDefault();
    const btnType = event.target.dataset.btn;
    const id = +event.target.dataset.id;
    const fruit = fruits.find((f) => f.id === id);
    if (btnType === 'price') {
        priceModal.setContent(`
        <p>Price for <strong>${fruit.title}: ${fruit.price}₪</strong></p>
        `);
        priceModal.open();
    } else if (btnType === 'remove') {
        $.confirm({
            title: 'Are you sure?',
            content: `<p>You want to delete: <strong>${fruit.title}</strong></p>`,
        })
            .then(() => {
                console.log('Remove');
                fruits = fruits.filter((f) => f.id !== id);
                render();
            })
            .catch(() => {
                console.log('Cancel');
            });
    }
});
