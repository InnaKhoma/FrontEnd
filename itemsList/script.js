const items = [
    {
        title: "IPhone 12",
        quantity: 2,
        price: 1000,
    },
    {
        title: "Magic Mouse",
        quantity: 3,
        price: 100,
    },
    {
        title: "MI Band 6",
        quantity: 4,
        price: 50,
    },
    {
        title: "Monitor ASUS",
        quantity: 1,
        price: 700,
    },
    {
        title: "USB Flash Drive",
        quantity: 5,
        price: 20,
    },
];

totalAmout(items);
avaragePriceOfOneProduct(items);
printSorted(items);

function totalAmout(products){
    let totalValue = 0;

    for (let i = 0; i < products.length; i += 1) {
        totalValue += products[i].quantity * products[i].price;
    }

    alert(`Общая стоимость вашего заказа: ${totalValue}$`);
}

function avaragePriceOfOneProduct(products) {
    let totalPrice = 0;

    for (let i = 0; i < products.length; i += 1) {
        totalPrice += products[i].price;
    }
    const averagePrice = totalPrice / products.length;

    alert(`Средняя цена 1 товара: ${averagePrice}$`);
}

function printSorted(products) {
    products.sort(function(a, b){return a.price - b.price});

    let parsed = "Список товаров в порядке возрастания цены:" + "\n";
    for (let i = 0; i < products.length; i += 1) {
        parsed += products[i].title + "\n";
    }
    alert(parsed);
}