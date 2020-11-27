const invoice = 100;
const stock = 100;
let message = '';

if (invoice <= stock) {
    message = 'Заказ оформлен, с вами свяжется менеджер';
    console.log(message);
} else {
    message = 'На складе недостаточно товаров!';
    console.log(message);
}