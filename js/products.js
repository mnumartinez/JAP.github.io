let URL_datos = "https://japceibal.github.io/emercado-api/cats_products/101.json"
fetch (URL_datos)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))
