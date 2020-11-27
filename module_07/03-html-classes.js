
{/* <h1 id='main-header' class='header'>Main page</h1> */}

let h1 = document.getElementById('main-header');

// Check clases
console.log(h1.classList.length);
// Add class
h1.classList.add('super-heading', 'big-text');
// Temove
h1.classList.remove('super-heading')
// Toggle
h1.classList.toggle('green');
// Contains
console.log(h1.classList.contains('big-text'))
console.log(h1.classList.contains('pizza'))

if (!h1.classList.contains('pizza')) {
    h1.classList.add('pizza')
}

console.log(h1)