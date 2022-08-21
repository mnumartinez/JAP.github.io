const url =  ("https://japceibal.github.io/emercado-api/cats_products/101.json");
let cont = document.getElementById("auto");

function interfaz (dataN){
    cont.innerHTML = `<div class="text-center p-4">
    <h2>Productos</h2>
    <p class="lead">Veras aquí todos los productos de la categoría ${dataN}</p>
    </div>`
}
function showData(dataN){
    for(let a of dataN){
        cont.innerHTML += `
        <div class="row">
            <div class="list-group">
                <div class="list-group-item list-group-item-action cursor-active">
                    <div class="row">
                        <div class="col-3">
                            <img class="img-thumbnail" src="${a.image}">
                        </div>
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
}
async function fetchdata(){
    let response = await fetch(url);
    let data = await response.json();
    interfaz(data.catName);
    showData(data.products);
}
fetchdata();
