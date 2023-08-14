// Задача: Написать скрипт, который находит параграфы и четным параграфам меняет текст на 'Я четный', a нечетным на 'Я нечетный'.

// let paragraphs = document.querySelectorAll('p');
// for(let i = 0; i < paragraphs.length; i++){
//     if(i % 2 == 1){
//         paragraphs[i].innerText = ('Я четный');
//     }else{
//         paragraphs[i].innerText = ('Я нечетный');

//     }
// }

// Задача: Написать скрипт, который находит параграфы, которые находятся внутри div-ов и первым 2 параграфам текст меняет на указанные пользователем значения.

// let mainDiv = document.querySelector('.main');
// let paragraphs = mainDiv.querySelectorAll('p');
// for(let i = 0; i < 2; i++){
//         paragraphs[i].innerText = prompt('Enter your text');
// }

// Задача: Написать скрипт, который находит параграфы с классом 'p1' и выводит (console) общее содержимое параграфов.

// let paragraphs = document.querySelectorAll('.p1');
// let content = 0;
// for(let i = 0; i < paragraphs.length; i++){
//     content += paragraphs[i].textContent;
// }
// console.log(content);

// Задача: Написать скрипт, который находит параграфы и последним 2 четным параграфам меняет текст на указанные пользователем значения.

// let paragraphs = document.querySelectorAll("p");
// for (let i = paragraphs.length - 4; i <= paragraphs.length - 1; i++) {
//   if (i % 2 == 1) {
//     paragraphs[i].innerText = prompt("Enter your text");
//   }
// }

// Задача: Написать скрипт, который находит параграфы и выводит (console) текстовое содержимое начная с 3 параграфа до 6.

// let paragraphs = document.querySelectorAll('p');
// let content = 0;
// for(let i = 2; i < 6; i++){
//     content += paragraphs[i].textContent + ' ';
// }
// console.log(content);
