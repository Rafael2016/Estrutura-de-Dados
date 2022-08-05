
const formatDataUSA = (data) => {
    return data.split('/').reverse().join('-')
}

var dados = [{
    "item": "diaria",
    "vlrItem": "155",
    "qtdItem": "1",
    "dtConsumo": "21/06/2022"
}, {
    "item": "diaria",
    "vlrItem": "155",
    "qtdItem": "1",
    "dtConsumo": "22/06/2022"
}, {
    "item": "diaria",
    "vlrItem": "155",
    "qtdItem": "1",
    "dtConsumo": "24/06/2022"
}, {
    "item": "diaria",
    "vlrItem": "155",
    "qtdItem": "1",
    "dtConsumo": "25/06/2022"
},
{
    "item": "Refeição ",
    "vlrItem": "40",
    "qtdItem": "1",
    "dtConsumo": "03/06/2022"
}, {
    "item": "Refeição ",
    "vlrItem": "40",
    "qtdItem": "1",
    "dtConsumo": "04/06/2022"
}, {
    "item": "Refeição ",
    "vlrItem": "40",
    "qtdItem": "1",
    "dtConsumo": "05/06/2022"
},
{
    "item": "Refeição",
    "vlrItem": "40",
    "qtdItem": "1",
    "dtConsumo": "07/06/2022"
}

]



var solicMap = new Map()
let cont     = 0 

dados.map((elem, i, itens) => {


    if (elem.item == 'Lavanderia') {
        solicMap.set('lavanderia', { ...elem })
        return false;
    } else if (elem.item == 'Água') {
        solicMap.set('agua', { ...elem })
        return false;
    }

    let ic = i + 1
    let dataCorrente = elem.dtConsumo.includes('-') ? formatDataUSA(elem.dtConsumo.split(" - ")[0]) : formatDataUSA(elem.dtConsumo);
    let dataProx = itens[ic]?.dtConsumo ?? '01/01/1970';
    dataProx = formatDataUSA(dataProx)


    dateCorrenteF = new Date(dataCorrente).setHours(+48)
    dateCorrenteF = new Date(dateCorrenteF).toLocaleDateString('en-CA')
    dataProxF = new Date(dataProx).getTime()

    if (i == 0 || nextIsSenquencia) {

        let pk = `${cont}.${new Date(dataCorrente).toLocaleDateString('en-CA')}`
        solicMap.set(pk, { ...elem })

    } else {

        cont++
        let pk = `${cont}.${new Date(dataCorrente).toLocaleDateString('en-CA')}`
        solicMap.set(pk, { ...elem })

    }

    if (dateCorrenteF === dataProx) {
        nextIsSenquencia = true;
    } else {
        nextIsSenquencia = false;
    }

})

console.log(solicMap)

 

