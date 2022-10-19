const urlINFO = ("https://japceibal.github.io/emercado-api/products/"+localStorage.getItem("Iden")+".json");
const products_comments = ("https://japceibal.github.io/emercado-api/products_comments/"+localStorage.getItem("Iden")+".json");
let comments = [];
let cont = document.getElementById("productIden");
let comm = document.getElementById("comments");


// Mostrar imagenes//
function showImg(data){
    for (const p of data) {
cont.innerHTML+=`
    <div class="col-2">
<img class="img-fluid" alt="Responsive image"  src="${p}">
</div>
`
}
}
// Fetch a la informacion de cada producto + mostrar datos//
function takeINFO(){
    fetch(urlINFO)
    .then(res => res.json())
    .then(data => {
    showData(data)
    showImg(data.images)})
       }
    const showData = (a) =>{
        cont.innerHTML = ""
            cont.innerHTML += `
                <div class="row">
                    <div class="list-group">
                        <div class="list-group-item list-group-item-action cursor-active" onclick=productIden(${a.id})>
                            <div class="row">
                                <div class="col">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h4 class="mb-1">${a.name} -${a.currency} ${a.cost}</h4>
                                        <small class="text-muted">${a.soldCount}</small>
                                    </div>
                                    <p class="mb-1">${a.description}</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>     
        `
        }
takeINFO()
fetch_comments()
// Comentarios + estrellas//
function showComments(data){
    for (const a of data) {
comm.innerHTML+=`
        <div class="list-group-item">
        <div class="l-flex justify-content-between flex-column flex-md-row ">
            <div class="l-flex">
                ${a.user}
            -${a.dateTime} 
        </div>
          ${buildStars(a.score)}
        
        ${a.description}
</div>
`
}
}
// Solicitud necesaria para obtener lista de comentarios//
function fetch_comments(){
    fetch(products_comments)
    .then(res => res.json())
    .then (data => {
    showComments(data)
    });
   
}
//Estrellas//
function buildStars(score){
 let stars = "";
 for (i = 1; i<= score; i++){
    stars+= `<span class="fa fa-star checked"></span>`
    }
for (i = score; i<5; i++){
    stars+= `<span class="fa fa-star"></span>`
}
return stars;
}


//Productos relacionados//
function related(data){
    for (const item of data){
        document.getElementById("relatedP").innerHTML +=
        `   
        <div class="card text-center" style="width: 18rem;" onclick="relatedID(${item.id})">
            <img class="card-img-top" src="${item.image}" alt="Card image cap">
                <div class="card-body">
                    <h6 class="card-title">${item.name}</h6>
            </div>
        </div>
     `
        
    }
}
document.addEventListener('DOMContentLoaded', ()=>{
    fetch(urlINFO)
        .then(response => response.json())
        .then(data => {
        related(data.relatedProducts)
            });
   
});
// Mostrar el producto relacionado al pulsar//
function relatedID(id) {
    localStorage.setItem("Iden", id);
    location = "product-info.html"
  }
