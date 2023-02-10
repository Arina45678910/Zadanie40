/*const body = document.body;
console.log(body.childNodes);
for (let i = 0; i < body.childNodes.length; i++) {
    console.log(body.childNodes[i]);

for (node of body.childNodes) {
    if (node.nodeType === 3) {
        console.log(node, 'текстовый узел');
    } else if (node.nodeType === 1) {
        console.log(node, 'узел элемент');
    }
}
for (let node of body.children) {
    console.log(body.lastElementChild.nextElementSibling);
}

const city = document.querySelector('#city');
console.log(city.parentNode);
console.log(cityElement.closest('.inner'));
console.log(city.contains('.inner'));*/


//1
const elem = document.querySelector('#elem')
elem.firstElementChild.style.color = "red";
//2
elem.lastElementChild.style.color = "red";

//3
for (let i = 0; i < elem.children.length; i++) {
    elem.children[i].innerHTML += '!'
};
//4 
elem.parentNode.style.border = "solid red 2px"
//5
const elem4 = document.querySelector('#elem4')
let parent1 = elem4.closest('div')
console.log(parent1);
//6
const elem1 = document.querySelector('#elem1')
let parent = elem1.closest('.www');
console.log(parent);
//7
const elem2 = document.querySelector('#elem2')
elem2.previousElementSibling.innerHTML += '!';
//8
elem2.nextElementSibling.innerHTML += '!';
//9
elem2.nextElementSibling.nextElementSibling.innerHTML += '!';
//10
const elem3 = document.querySelector('#elem3')
