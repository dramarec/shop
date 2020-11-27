// <!-- <a href="https://google.com/" targe="_blank">Google</a> -->
// 1. Создать
// 2. Повесить атрибуты
// 3. Повесить текст
// 4. Привязать в DOM

// 1. Создать
let newLink = document.createElement('a');

// 2. Повесить атрибуты
newLink.href = 'https://www.php.net/manual/ru/langref.php'
newLink.target = "_blank"
// 3. Повесить текст
newLink.textContent = 'php.net'

// 4. Привязать в DOM
let linkWraper = document.querySelector('.link-wraper');
linkWraper.append(newLink)
// linkWraper.prepend(newLink)
// linkWraper.before(newLink)
// linkWraper.after(newLink)




