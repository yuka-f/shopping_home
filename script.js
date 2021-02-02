document.getElementById("c").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 
 document.getElementById("C").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 
 document.getElementById("c_zakka").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 
 document.getElementById("c_food").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 
 document.getElementById("c_drink").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 
 document.getElementById("c_zakka2").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 
 document.getElementById("c_food2").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 
 document.getElementById("c_drink2").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 


 document.getElementById("m").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 
 document.getElementById("M").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 
 document.getElementById("m_medicn").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 
 document.getElementById("m_food").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 
 document.getElementById("m_make").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 
 document.getElementById("m_supli").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 
 document.getElementById("m_seiri").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 
 document.getElementById("m_medicn2").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 
 document.getElementById("m_food2").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 
 document.getElementById("m_make2").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 
 document.getElementById("m_supli2").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 
 document.getElementById("m_seiri2").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 


 document.getElementById("all").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 
 document.getElementById("ALL").onclick = function () {
    open('https://yuka-f.github.io/shopping_home/');
 }; 




const targetElement = document.querySelectorAll(".s");
console.log("画面の高さ",window.innerHeight)
document.addEventListener("scroll",function() {
    for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].
        getBoundingClientRect().top + targetElement[i].clientHeight * .6
        if (window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("show");
        }
    }
})
