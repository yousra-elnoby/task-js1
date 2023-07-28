var allproducts = document.querySelectorAll(".lis li")
var content = document.querySelector("#content")
var btn = document.querySelector(".btn")
var totprice = document.querySelector("#totprice")
var totalprice = 0

allproducts.forEach(function(item){
    item.onclick = function(){
        totalprice += +(item.getAttribute("price"))
        content.innerHTML += item.textContent + "<br>"
        if(content.innerHTML != "" ){
            btn.style.display = "block";
        }
    }
}
)
btn.onclick = function (){
    console.log(totalprice)
    document.getElementById("totprice").innerHTML = totalprice;
}
