let UnitP = undefined;



function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}
function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}


function ItemCarrito(data) {
  for (const item of data.articles) {
    document.getElementById(`tableIMG`).innerHTML += `<img src="${item.image}" style="height:40px; width:60px">`
    document.getElementById(`tableN`).innerHTML += `<p>${item.name}</p>`
    document.getElementById(`costo`).innerHTML += `<p>${item.currency}${item.unitCost}</p>`
    document.getElementById(`cantidad`).value = item.count
    UnitP = item.unitCost;
    
  }
}
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://japceibal.github.io/emercado-api/user_cart/25801.json")
    .then(res => res.json())
    .then(data => {
      ItemCarrito(data)
    })
})

function incremento() {
  let C = document.getElementById("cantidad").value;
  let sub = C * UnitP;
  document.getElementById("subtotal").innerText = sub;
  document.getElementById("subT").innerText = `USD ${sub}`; // Parte 1

  let userChoice = shippSelected();
  var costo = (userChoice * sub) / 100;                             // Part 2
  document.getElementById("sendCost").innerText = `USD ${costo}`;
  
  let total = costo + sub                                           // Part 3
  document.getElementById("TotalCart").innerText = `USD ${total}`;
}

function validarB() {
  var calle = document.getElementById(`calle`).value
  var numero = document.getElementById(`numero`).value
  var esquina = document.getElementById(`esquina`).value
  if (calle === "" || numero === "" || esquina === "") {
    showAlertError();
  } else {
    showAlertSuccess();
  }
}

  //Part 2
function shippSelected() {
  if (document.getElementById("premium").checked) {
    return document.getElementById("premium").value;
  } else if (document.getElementById("express").checked) {
    return document.getElementById("express").value;

  } else if (document.getElementById("standard").checked) {
    return document.getElementById("standard").value;
  }
}
function modalStatus() {                         // 2 Part 1
  let c = document.querySelector("#creditCard");
  let d = document.querySelector("#bankTransfer");
  if (c.checked) {
    document.getElementById("accNumber").disabled = true;
    document.getElementById("cardNumber").disabled = false;
    document.getElementById("cardCode").disabled = false;
    document.getElementById("cardDate").disabled = false;
  } else if (d.checked) {
    document.getElementById("accNumber").disabled = false;
    document.getElementById("cardNumber").disabled = true;
    document.getElementById("cardCode").disabled = true;
    document.getElementById("cardDate").disabled = true;
  }
}
                                                   // 3 Style
function modalStatus2() {
  let c = document.querySelector("#creditCard");
  let d = document.querySelector("#bankTransfer");
  if (c.checked || d.checked) {
    document.querySelector('#prueba').style.color = "#0a58ca";
    document.querySelector("#alertPrueba").classList.remove("show");
  } else {
    document.querySelector('#prueba').style.color = "#ff0000";
    document.querySelector("#alertPrueba").classList.add("show");
  }
};

(function () {
  'use strict'

var forms = document.querySelectorAll('.needs-validation')
Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        modalStatus2()
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
          document.getElementById("succesAlert").classList.add("show");
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
