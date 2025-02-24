const array = [ // tomb letrehozasa
    { // tomb elso elemenek letrehozasa
        szerzo: "Szerző neve", // elso elem szerzo tulajdonsaganak erteke
        korszak: "Korszak",    // elso elem korszak tulajdonsaganak erteke
        szerelem: "Szerelmek"       // elso elem szerelem tulajdonsaganak erteke
    },
    { // tomb masodik elemenek letrehozasa
        szerzo: 'Balassi Bálint', // masodik elem szerzo tulajdonsaganak erteke
        korszak: 'reformáció',       // masodik elem korszak tulajdonsaganak erteke
        szerelem1: 'Losonczy Anna',    // masodik elem szerelem1 tulajdonsaganak erteke
        szerelem2: 'Dobó Krisztina'    // masodik elem szerelem2 tulajdonsaganak erteke
    },
    { // tomb harmadik elemenek letrehozasa
        szerzo: 'Csokonai Vitéz Mihály', // harmadik elem szerzo tulajdonsaganak erteke
        korszak: 'felvilágosodás',         // harmadik elem korszak tulajdonsaganak erteke
        szerelem: 'Vajda Juliána'             // harmadik elem love tulajdonsaganak erteke
    },
    { // tomb negyedik elemenek letrehozasa
        szerzo: 'Petőfi Sándor',        // negyedik elem szerzo tulajdonsaganak erteke
        korszak: 'magyar romantika',       // negyedik elem korszak tulajdonsaganak erteke
        szerelem1: 'Mednyánszky Berta',      // negyedik elem szerelem1 tulajdonsaganak erteke
        szerelem2: 'Szendrey Júlia'          // negyedik elem szerelem2 tulajdonsaganak erteke
    },
    { // tomb otodik elemenek letrehozasa
        szerzo: 'Ady Endre',            // otodik elem szerzo tulajdonsaganak erteke
        korszak: '20. század',             // otodik elem korszak tulajdonsaganak erteke
        szerelem1: 'Léda',                    // otodik elem szerelem1 tulajdonsaganak erteke
        szerelem2: 'Csinszka'                 // otodik elem szerelem2 tulajdonsaganak erteke
    }
];

for (let i = 1; i < array.length; i++) { // vegigiteralok az arrayen, az elso elemet kihagyva
    const currentElement = array[i]; // az aktualis elem elmentese

    const sor = document.createElement('tr'); // tr elem letrehozasa az uj sorhoz
    torzs.appendChild(sor); // sor hozzafuzese a torzshoz

    const cella1 = document.createElement('td'); // td elem letrehozasa az elso cellahoz
    cella1.innerHTML = currentElement.szerzo; // cella tartalma az aktualis elem szerzo tulajdonsaga
    sor.appendChild(cella1); // cella hozzafuzese a sorhoz

    const cella2 = document.createElement('td'); // td elem letrehozasa a masodik cellahoz
    cella2.innerHTML = currentElement.korszak; // cella tartalma az aktualis elem korszak tulajdonsaga
    sor.appendChild(cella2); // cella hozzafuzese a sorhoz

    const cella3 = document.createElement('td'); // td elem letrehozasa a harmadik cellahoz
    cella3.innerHTML = currentElement.szerelem1; // cella tartalma az aktualis elem szerelem1 tulajdonsaga
    
    if (currentElement.szerelem2 === undefined){ // ha masodik szerelem nincs akkor egybevonja a ket cellat
        cella3.colSpan = 2; // a ket cell osszevonasa
    }

    if(array.szerelem2 !== undefined){ // kulon cellaba rakja ha van masodik szerelme
        const cella4 = document.createElement('td'); // td elem letrehozasa a negyedik cellabam
        cella4.innerHTML = currentElement.szerelem2; // cella tartalma az aktualis elem szerelem2 tubajdonsaga
        sor.appendChild(cella4); // cella hozzafuzevese a sorhoz
    }
}

const table = document.createElement('table'); // table elem letrehozasa
document.body.appendChild(table); // hozzafuzes a bodyhoz

const fejlec = document.createElement('thead'); // thead letrehozasa a tablazat fejlecehez
table.appendChild(fejlec); // fejlec hozzafuzese a tablazathoz

const fejlecSor = document.createElement('tr'); // tr elem letrehozasa a fejlec sorahoz
fejlec.appendChild(fejlecSor); // sor hozzafuzese a fejlechez

const fejlecCella1 = document.createElement('th'); // th elem letrehozasa az elso fejlec cellahoz
fejlecCella1.innerHTML = array[0].szerzo; // cella tartalma az elso elem szerzo tulajdonsaga
fejlecSor.appendChild(fejlecCella1); // cella hozzafuzese a fejlec sorhoz

const fejlecCella2 = document.createElement('th'); // th elem letrehozasa a masodik fejlec cellahoz
fejlecCella2.innerHTML = array[0].korszak; // cella tartalma az elso elem korszak tulajdonsaga
fejlecSor.appendChild(fejlecCella2); // cella hozzafuzese a fejlec sorhoz

const fejlecCella3 = document.createElement('th'); // th elem letrehozasa a harmadik fejlec cellahoz
fejlecCella3.innerHTML = array[0].szerelem; // cella tartalma az elso elem szerelem tulajdonsaga
fejlecSor.appendChild(fejlecCella3); // cella hozzafuzese a fejlec sorhoz

const torzs = document.createElement('tbody'); // tbody elem letrehozasa a tablazat torzsehez
table.appendChild(torzs); // torzs hozzafuzese a tablazathoz