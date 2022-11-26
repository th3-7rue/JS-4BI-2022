//Riferimenti agli oggetti html
// 1. Alla pressione del bottone btnAdd inserire un nuovo <li>
// con data,ora e il testo della nota
// 2. Alla pressione del bottone btnClear cancellare la lista
// chiedendo conferma all'utente mediante la funzione 'confirm'
// 3. In apertura della finestra cancellare la lista predefinita
//alert("funziona")
let edtNota = document.getElementById("edtNota");
const btnAdd = document.getElementById("btnAdd");
const btnClear = document.getElementById("btnClear");
const myTable = document.getElementById("bodyTask");
const alertConferma = document.getElementById("my-modal-4")
const btnNo = document.getElementById("btnNo")
const btnYes = document.getElementById("btnYes")
const btnSelected = document.getElementById("btnSelected")
var riga
if (localStorage.getItem('riga') === null) {
    localStorage.setItem('riga', 0)
}
riga = parseInt(localStorage.getItem('riga'))
// Funzioni
function ClearList() {
    myTable.innerHTML = ""
    localStorage.setItem('riga', 0)
    riga = 0

}
function AddToList(text) {
    var row = myTable.insertRow(riga)
    let hToAdd = document.createElement("th")
    let dDataToAdd = document.createElement("td")
    let dDettToAdd = document.createElement("td")
    let dSelToAdd = document.createElement("td")

    hToAdd.innerHTML = riga + 1
    row.appendChild(hToAdd);
    dSelToAdd.innerHTML = '<input type="checkbox" class="checkbox" />'
    dDataToAdd.innerHTML = text
    row.appendChild(dDataToAdd);
    dDettToAdd.innerHTML = edtNota.value
    row.appendChild(dDettToAdd)
    row.appendChild(dSelToAdd)
    riga += 1
    localStorage.setItem('riga', riga);

}
//Eventi
edtNota.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btnAdd.click();
    }
})
btnAdd.onclick = function () {
    if (edtNota.value != "") {
        const data = new Date();
        const giorno = data.toLocaleDateString();
        const ora = data.toLocaleTimeString();
        AddToList(giorno + " " + ora);
        edtNota.value = "";
        edtNota.focus();
        localStorage.setItem("Lista", myTable.innerHTML)
    }
}
btnYes.onclick = function () {
    localStorage.setItem("Cestino",myTable.innerHTML)
    ClearList();
    localStorage.removeItem("Lista");
    localStorage.removeItem("Riga");

    alertConferma.checked = false
}
btnNo.onclick = function () {
    alertConferma.checked = false
}
btnSelected.onclick = function () {
    let rowsInput = myTable.getElementsByTagName('input')
    let rowsLength = rowsInput.length
    for (var i = rowsLength - 1; i >= 0; i--) {
        if (rowsInput[i].checked) {
            localStorage.setItem("Cestino",myTable.row[i].innerHTML)
            myTable.deleteRow(i)
            riga--
            localStorage.setItem('riga', riga);
            localStorage.setItem("Lista", myTable.innerHTML)

        }
    }
    let th = myTable.getElementsByTagName('th')
    var myRiga = 1
    for (let i = 0; i < rowsInput.length; i++) {
        th[i].innerHTML = myRiga
        myRiga++
        localStorage.setItem("Lista", myTable.innerHTML)
    }
    alertConferma.checked = false
}

// Codice del main dell'avvio
myTable.innerHTML = localStorage.getItem("Lista");
