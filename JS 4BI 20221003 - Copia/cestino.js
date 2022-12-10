const btnCNo = document.getElementById("btnCNo")
const btnCYes = document.getElementById("btnCYes")
const btnCSelected = document.getElementById("btnCSelected")

const btnRNo = document.getElementById("btnRNo")
const btnRYes = document.getElementById("btnRYes")
const btnRSelected = document.getElementById("btnRSelected")
const myTable = document.getElementById("bodyTask");
const alertConferma = document.getElementById("my-modal-4C")
const alertConfermaR = document.getElementById("my-modal-4R")

var riga
localStorage.setItem('riga', 0)

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
btnRYes.onclick = function () {
    localStorage.setItem("Lista", myTable.innerHTML)

    ClearList();
    localStorage.removeItem("Cestino");
    localStorage.removeItem("Riga");

    alertConfermaR.checked = false
}
btnRNo.onclick = function () {
    alertConfermaR.checked = false
}

myTable.innerHTML = localStorage.getItem("Cestino");
