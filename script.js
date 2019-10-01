var table = document.createElement("table")
document.body.appendChild(table)




for (let i = 0; i < 10; i++) {
    var tr = document.createElement("tr")
    table.appendChild(tr)
    for (let j = 0; j < 10; j++) {
        var td = document.createElement("td")
        tr.appendChild(td)
        td.className = "td"

        if (i % 2 == j % 2) {
            td.style.backgroundColor = ("brown")
        }
        else {
            td.style.backgroundColor = ("black")
            var pion = document.createElement("div")
            td.appendChild(pion)
            pion.className = "div1"
            if (i < 4){
                pion.style.backgroundColor = ("red")
            }
            if (i > 5 ){
                pion.style.backgroundColor = ("brown")
            }
            
        }

    }
}

