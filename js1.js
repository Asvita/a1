alert("welcome");
var f=document.querySelector("#B");
var m=document.querySelector("#Email");
var n=document.querySelector("#Name");
var a=document.getElementById("A");
var c=document.querySelector("#C");
f.addEventListener('submit',function(e){
    e.preventDefault();
    
a.textContent = m.value;
c.textContent =  n.value;

})

