function unactive(selector){
    for(let i=0; i<selector.length; i++){
        if(selector[i].classList.contains('active')){
            selector[i].classList.remove('active');
        }
    }
}
/***** Process on factory type ****/
function factoryB2B(id) {
    document.getElementById('b2c').style.display = 'none'; //hide b2c block
    document.getElementById('more').style.display = 'none'; //hide more block
    //unactive(document.querySelectorAll('div#b2c img'));
    unactive(document.querySelectorAll('.factoryB2C'));
    var b2b = document.getElementById('b2b');
    b2b.style.display = 'block';
    var factories = document.querySelectorAll('div#factory img');
    console.log(factories);
    unactive(factories);
    id.className +=' active ';
}
function factoryB2C(id) {
    document.getElementById('b2b').style.display = 'none'; //hide b2b block
    document.getElementById('more').style.display = 'none';//hide more block
    unactive(document.querySelectorAll('.factoryB2B'));
    var b2c = document.getElementById('b2c');
    b2c.style.display = 'block';
    var factories = document.querySelectorAll('div#factory img');
    unactive(factories);
    id.className +=' active ';
}
/****** Process on business type ****/
function b2b(id) {
    var moretext = document.getElementById('more');
    moretext.style.display = 'block';
    var b2b = document.querySelectorAll('div#b2b img');
    unactive(b2b);
    id.className +=' active ';
}
function b2c(id) {
    var moretext = document.getElementById('more');
    moretext.style.display = 'block';
    var b2c = document.querySelectorAll('div#b2c img');
    unactive(b2c);
    id.className +=' active ';
}

/***** Process on textarea *****/

var count = document.getElementById('count');
var N = parseInt(count.textContent.split(' ')[0]);
var texte =document.querySelector('#texte');
texte.addEventListener('keyup', function (e) {
    let nb=parseInt(count.textContent.split(' ')[0]);
    if((nb <N) && e.key === 'Backspace'){
        nb +=1;
        count.textContent = nb + " mot(s)";
    }
    if(nb > 0){
        texte.style.backgroundColor = null;
    }else{
        texte.style.backgroundColor = 'red';
    }
});
texte.addEventListener('keypress', function (e) {
    let nb=parseInt(count.textContent.split(' ')[0]);
    if(nb >0 &&((e.key.charCodeAt()>31 && e.key.charCodeAt()<127))){
        nb -=1;
        count.textContent = nb +" mot(s)";
    }
    if(nb > 0){
        texte.style.backgroundColor = null;
    }else{
        texte.style.backgroundColor = 'red';
    }

});