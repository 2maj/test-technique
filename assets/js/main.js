function unactive(target, selector){
    for(let i=0; i<selector.length; i++){
        if(selector[i].classList.contains('active')){
            selector[i].classList.remove('active');
        }
    }
    target.className +='active';
}
function factory(id) {
    var b2b = document.getElementById('b2b');
    b2b.style.display = 'block';
    var factories = document.querySelectorAll('div#factory img');
    unactive(id, factories);
}
function b2b(id) {
    var moretext = document.getElementById('more');
    moretext.style.display = 'block';
    var b2b = document.querySelectorAll('div#b2b img');
    unactive(id, b2b);
}
function textarea(char) {
    char.style.backgroundColor = 'blue';
    var p = document.getElementById('count');
    p.textContent = '12548';
    var display = document.getElementById('display');
    display.textContent = char.textContent;
}
function caractere(car) {
    console.log(car);
}