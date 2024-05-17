let form = document.getElementById("form")
form.addEventListener("mousemove",function(){
    form.style.boxShadow="0 0 20px 2px black";
})

form.addEventListener("mouseout",function(){
    form.style.boxShadow="none";
})