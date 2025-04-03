
var buttonchangename=document.getElementById("boton");
buttonchangename.addEventListener('click',function(){
    var h1=document.getElementById("nombre");
    var body=document.getElementById("body");
    var hval=h1.textContent;
    if (h1.style.color=='') {
        h1.style.color="blue";
    } else {
        body.style.backgroundColor="yellow";
    }
    h1.textContent="1º Dam LDM";
});

var buttonchangename=document.getElementById("boton1");
buttonchangename.addEventListener('click',function(){
    var h1=document.getElementById("nombre");
    var body=document.getElementById("body");
    h1.style.color="blue";
    body.style.backgroundColor="yellow";
    h1.textContent="Rosario Gonzalez";
});

