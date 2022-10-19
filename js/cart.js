let UnitP = undefined;

function ItemCarrito(data){
    for(const item of data.articles){
      document.getElementById(`tableIMG`).innerHTML += `<img src="${item.image}" style="height:40px; width:60px">`
      document.getElementById(`tableN`).innerHTML += `<p>${item.name}</p>`
      document.getElementById(`costo`).innerHTML += `<p>${item.currency}${item.unitCost}</p>`
      document.getElementById(`cantidad`).value = item.count
      UnitP = item.unitCost;
      
    }
  }
  document.addEventListener("DOMContentLoaded" , () =>{
    fetch("https://japceibal.github.io/emercado-api/user_cart/25801.json")
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      ItemCarrito(data)
    })  
  })

function incremento(){
 let C = document.getElementById("cantidad").value;
let sub = C*UnitP;
document.getElementById("subtotal").innerText = sub;
}
