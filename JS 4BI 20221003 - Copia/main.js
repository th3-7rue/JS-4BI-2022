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
const alertConferma = document.getElementById("conferma")
var riga = 0
// Funzioni
function ClearList() {
    let tdTags = myTable.getElementsByTagName("tr");
    console.log(tdTags);
    let tdTagsL = tdTags.length;
    for (var i = tdTagsL - 1; i >= 0; i--) {
        myTable.deleteRow(i);
    }
    riga = 0
}
function AddToList(text) {
    var row = myTable.insertRow(riga)
    let hToAdd = document.createElement("th")
    let dDataToAdd = document.createElement("td")
    let dDettToAdd = document.createElement("td")

    hToAdd.innerHTML = riga + 1
    row.appendChild(hToAdd);

    dDataToAdd.innerHTML = text
    row.appendChild(dDataToAdd);
    dDettToAdd.innerHTML = edtNota.value
    row.appendChild(dDettToAdd)
    riga += 1

}
//Eventi
btnAdd.onclick = function () {
    if (edtNota.value != "") {
        const data = new Date();
        const giorno = data.toLocaleDateString();
        const ora = data.toLocaleTimeString();
        AddToList(giorno + " " + ora + " ");
        edtNota.value = "";
        edtNota.focus();
        localStorage.setItem("Lista", myTable.innerHTML)
    }
}
btnClear.onclick = function () {
    alertConferma.hidden = "false"
    {
        ClearList();
        localStorage.clear();
    }
}
// Codice del main dell'avvio
ClearList();
myTable.innerHTML = localStorage.getItem("Lista");