const generateId = function () {
    const randomNumber = Math.random();
    return randomNumber.toString().slice(3);
}
// // console.log(generateId());

// CRUD
// create,
// read,
// update,
// delete

const shop = {
    name: 'Fruits Store',
    address: 'Kiev',
    items: [
        { id: 1, name: 'bananes', price: 25, amount: 200, category: 'fruits' },
        { id: 2, name: 'apples', price: 32, amount: 150, category: 'fruits' },
        { id: 3, name: 'tomato', price: 50, amount: 100, category: 'vegetables' },
        { id: 4, name: 'potato', price: 10, amount: 500, category: 'vegetables' },

    ],
    showItems() {
        for (const item of this.items) {
            const { id, name, price, amount, category } = item;
            console.log(`Id: ${id}, Name: ${name}, Price: ${price}, Amount: ${amount} Category: ${category}`);
        }
    },
    addItem(name, price, amount, category) {
        const item = {
            id: generateId(),
            name,
            price,
            amount,
            category,
        }
        this.items.push(item)
    },
    removeItem(productName) {
        // for (const item of this.items) {
        //     if (item.name === productName) {
        //         const index = this.items.indexOf(item);
        //         this.items.splice(index, 1)
        //     }
        // }
        let itemsLength = this.items.length;

        for (let i = 0; i < itemsLength; i += 1) {
            if (this.items[i].name === productName) {
                this.items.splice(i, 1);
            }
        }


    },
    updateItem(productName, newName) {
        let itemsLength = this.items.length;
        for (let i = 0; i < itemsLength; i += 1) {
            if (this.items[i].name === productName) {
                this.items[i].name = newName;
            }
        };
    },
    displayToPage() {
        // window.onload = function() {

        let html = `
            	<h1> ${this.name} </h1>
        <h2> ${this.address} </h2>
        <h3>Catalogue</h3>
        <div class="container">
            <ul class="list">
                <li class="list__item"></li>
                <li class="list__item"></li>
                <li class="list__item"></li>
                <li class="list__item"></li>
            </ul>
	    </div>
            `
        return document.body.innerHTML = html
        // }

    },
}


// // shop.showItems();
// // shop.addItem('strawberry', 200, 50, 'fruits');
// // // shop.showItems();
// shop.removeItem('potato')
// // shop.showItems();
// shop.updateItem('bananes', 'baby-bananes');
// shop.showItems();
// shop.displayToPage()
// document.body.innerHTML = 'Hello World!'




let arr = [
    'appel',
    'orange',
    'melon'
]



arr.forEach((elem, index, arr) => {

}
);
arr.map(() => {

}
);
arr.filter(() => {

}
);
arr.reduce(() => {

}
)
arr.find(() => {

}
)



let btn = document.querySelector('button')

btn.addEventListener('mouseover', (error, req, res, next) => {

})


let arr = ['appel', 'orange', 'melon', ['gog', ['pizza', ['gerytaerte']]]]

