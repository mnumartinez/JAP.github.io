const url =  ("https://japceibal.github.io/emercado-api/cats_products/101.json");
let cont = document.getElementById("auto");
function showData(dataN){
    for(let a of dataN){
        cont.innerHTML += `<p class="mb-1">${a.name}</p>
        <p>${a.description}</p>
        <img src="${a.image}">
            `
    
 }
}

async function fetchdata(){
    let response = await fetch(url);
    let data = await response.json();
    showData(data.products);
}
fetchdata();
