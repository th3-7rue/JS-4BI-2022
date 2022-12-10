const btnClear = document.getElementById("btnCClear");
const btnCNo = document.getElementById("btnCNo")
const btnCYes = document.getElementById("btnCYes")
const btnCSelected = document.getElementById("btnCSelected")

const btnRClear = document.getElementById("btnRClear");
const btnRNo = document.getElementById("btnRNo")
const btnRYes = document.getElementById("btnRYes")
const btnRSelected = document.getElementById("btnRSelected")
const myTable = document.getElementById("listaTask");
const alertConferma = document.getElementById("my-modal-4C")

var riga
if (localStorage.getItem('riga') === null) {
    localStorage.setItem('riga', 0)
}
riga = parseInt(localStorage.getItem('riga'))
function ClearList() {
    myTable.innerHTML = ""
    localStorage.setItem('riga', 0)
    riga = 0

}
btnCYes.onclick = function () {
    ClearList();
    localStorage.removeItem("Cestino");
    localStorage.removeItem("Riga");

    alertConferma.checked = false
}
btnCNo.onclick = function () {
    alertConferma.checked = false
}
btnCSelected.onclick = function () {
    let rowsInput = myTable.getElementsByTagName('input')
    let rowsLength = rowsInput.length
    for (var i = rowsLength - 1; i >= 0; i--) {
        if (rowsInput[i].checked) {
            myTable.deleteRow(i)
            riga--
            localStorage.setItem('riga', riga);
            localStorage.setItem("Cestino", myTable.innerHTML)

        }
    }
    let th = myTable.getElementsByTagName('th')
    var myRiga = 1
    for (let i = 0; i < rowsInput.length; i++) {
        th[i].innerHTML = myRiga
        myRiga++
        localStorage.setItem("Cestino", myTable.innerHTML)
    }
    alertConferma.checked = false
}
myTable.innerHTML = localStorage.getItem("Cestino");
