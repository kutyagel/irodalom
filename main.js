const array = [ // tomb letrehozasa
    { // tomb elso elemenek letrehozasa
        szerzo: "Szerző neve", // elso elem szerzo tulajdonsaganak erteke
        korszak: "Korszak",    // elso elem korszak tulajdonsaganak erteke
        szerelem1: "Szerelmek"       // elso elem szerelem1 tulajdonsaganak erteke
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
        szerelem1: 'Vajda Juliána'             // harmadik elem love tulajdonsaganak erteke
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


const menuContainer = document.createElement('div'); // div elem letrehozasa ami a tartalmazza a tablazatot
document.body.appendChild(menuContainer); // hozzafuzes a bodyhoz

function createForm() { // form letrehozasa fuggveny def
    const form = document.createElement('form'); // form elem letrehozasa
    form.id = 'form'; // form id
    form.action = '#'; // form action
    
    // kolto
    const koltoLabel = document.createElement('label'); // label elem
    koltoLabel.setAttribute('for', 'kolto_nev'); // for attributum 
    koltoLabel.textContent = 'Költő neve:'; // cimke szoveg 
    form.appendChild(koltoLabel); // label hozzaadasa a formhoz
    form.appendChild(document.createElement('br')); // sortores
    
    const koltoInput = document.createElement('input'); // input elem
    koltoInput.type = 'text'; // input tipus
    koltoInput.id = 'kolto_nev'; // input id
    koltoInput.name = 'kolto_nev'; // input name
    form.appendChild(koltoInput); // input hozzaadasa a formhoz
    form.appendChild(document.createElement('br')); // sortores
    form.appendChild(document.createElement('br')); // masodik sortores
    
    const koltoError = document.createElement('div'); // div elem a hibauzenethez
    koltoError.id = 'kolto_nev-error'; // id
    koltoError.className = 'error'; // osztaly
    form.appendChild(koltoError); // error div a formhoz
    form.appendChild(document.createElement('br')); // sortores
    
    // korszak
    const korszakLabel = document.createElement('label'); // label elem
    korszakLabel.setAttribute('for', 'korszak'); // for beallitasa
    korszakLabel.textContent = 'Korszak:'; // cimke szoveg
    form.appendChild(korszakLabel); // label hozzaadasa a formhoz
    form.appendChild(document.createElement('br')); // sortores
    
    const korszakInput = document.createElement('input'); // input elem
    korszakInput.type = 'text'; // input tipus
    korszakInput.id = 'korszak'; // input id
    korszakInput.name = 'korszak'; // input name
    form.appendChild(korszakInput); // input hozzaadasa a formhoz
    form.appendChild(document.createElement('br')); // sortores
    form.appendChild(document.createElement('br')); // masodik sortores
    
    const korszakError = document.createElement('div'); // div a hibauzenethez
    korszakError.id = 'korszak-error'; // id
    korszakError.className = 'error'; // osztaly
    form.appendChild(korszakError); // error div a formhoz
    form.appendChild(document.createElement('br')); // sortores
    
    // szerelem1
    const szerelem1Label = document.createElement('label'); // label elem
    szerelem1Label.setAttribute('for', 'szerelem1'); // for attributum
    szerelem1Label.textContent = 'Szerelme:'; // cimke szoveg
    form.appendChild(szerelem1Label); // label hozzaadasa a formhoz
    form.appendChild(document.createElement('br')); // sortores
    
    const szerelem1Input = document.createElement('input'); // input elem
    szerelem1Input.type = 'text'; // input tipus
    szerelem1Input.id = 'szerelem1'; // input id
    szerelem1Input.name = 'szerelem1'; // input name
    form.appendChild(szerelem1Input); // input hozzaadasa a formhoz
    form.appendChild(document.createElement('br')); // sortores
    form.appendChild(document.createElement('br')); // masodik sortores
    
    const szerelem1Error = document.createElement('div'); // div elem a hibauzenethez
    szerelem1Error.id = 'szerelem1-error'; // id
    szerelem1Error.className = 'error'; // osztaly
    form.appendChild(szerelem1Error); // error div a formhoz
    form.appendChild(document.createElement('br')); // sortores
    
    // checkbox
    const masodikLabel = document.createElement('label'); // label elem
    masodikLabel.setAttribute('for', 'masodik'); // for beallitasa
    masodikLabel.textContent = 'Volt másik szerelme?'; // cimke szoveg
    form.appendChild(masodikLabel); // label hozzaadasa a formhoz
    
    const masodikInput = document.createElement('input'); // checkbox elem
    masodikInput.type = 'checkbox'; // checkbox tipus
    masodikInput.id = 'masodik'; // checkbox id
    masodikInput.name = 'masodik'; // checkbox name
    form.appendChild(masodikInput); // checkbox hozzaadasa a formhoz
    form.appendChild(document.createElement('br')); // sortores
    form.appendChild(document.createElement('br')); // masodik sortores
    
    // szerlme2
    const szerelem2Label = document.createElement('label'); // label elem
    szerelem2Label.setAttribute('for', 'szerelem2'); // for beallitasa
    szerelem2Label.textContent = 'Szerelme:'; // cimke szoveg
    form.appendChild(szerelem2Label); // label hozzaadasa a formhoz
    form.appendChild(document.createElement('br')); // sortores
    
    const szerelem2Input = document.createElement('input'); // input elem
    szerelem2Input.type = 'text'; // input tipus
    szerelem2Input.id = 'szerelem2'; // input id
    szerelem2Input.name = 'szerelem2'; // input name
    form.appendChild(szerelem2Input); // input hozzaadasa a formhoz
    form.appendChild(document.createElement('br')); // sortores
    form.appendChild(document.createElement('br')); // masodik sortores
    
    const szerelem2Error = document.createElement('div'); // div a hibauzenethez
    szerelem2Error.id = 'szerelem2-error'; // id
    szerelem2Error.className = 'error'; // osztaly
    form.appendChild(szerelem2Error); // error div a formhoz
    form.appendChild(document.createElement('br')); // sortores
    
    // submit
    const submitBtn = document.createElement('button'); // gomb elem
    submitBtn.textContent = 'Hozzáadás'; // gomb szovege
    form.appendChild(submitBtn); // gomb hozzaadasa a formhoz
    
    return form; // form visszaadasa
}

function addFormToDOM() { // form domhoz adas
    const newForm = createForm(); // uj form
    document.body.insertBefore(newForm, menuContainer); // form beszurasa a menucontainer ele
    
    return newForm; // form visszaadasa
}

function renderTableHeader(table, adatok) {
    const fejlec = document.createElement('thead'); // thead letrehozasa a tablazat fejlecehez
    table.appendChild(fejlec); // fejlec hozzafuzese a tablazathoz
    
    const fejlecSor = document.createElement('tr'); // tr elem letrehozasa a fejlec sorahoz
    fejlec.appendChild(fejlecSor); // sor hozzafuzese a fejlechez
    
    const fejlecOszlopok = [ // fejlec oszlopok definialasa
        { nev: 'szerzo', szoveg: adatok[0].szerzo, oszlopSpan: 1 }, // elso oszlop definialasa
        { nev: 'korszak', szoveg: adatok[0].korszak || "Korszak", oszlopSpan: 1 }, // masodik oszlop definialasa
        { nev: 'szerelem1', szoveg: adatok[0].szerelem1, oszlopSpan: 2 } // harmadik oszlop definialasa
    ];
    
    for (const oszlop of fejlecOszlopok) { // vegigiteralas az oszlopokon
        const fejlecCella = document.createElement('th'); // th elem letrehozasa a fejlec cellahoz
        fejlecCella.innerHTML = oszlop.szoveg; // cella tartalmanak beallitasa
        
        if (oszlop.oszlopSpan > 1) { // ha az oszlop tobb cellat foglal el
            fejlecCella.colSpan = oszlop.oszlopSpan; // beallitjuk a colSpan erteket
        }
        
        fejlecSor.appendChild(fejlecCella); // cella hozzafuzese a fejlec sorhoz
    }
}

function renderMenu(adatok) { // renderMenu fuggveny definialasa
    const table = document.createElement('table'); // table elem letrehozasa
    menuContainer.appendChild(table); // hozzafuzes a menuContainer-hez
    
    renderTableHeader(table, adatok); // fejlec generalasa

    // torzs
    const torzs = document.createElement('tbody'); // tbody elem letrehozasa a tablazat torzsehez
    table.appendChild(torzs); // torzs hozzafuzese a tablazathoz

    // sorok
    for (let i = 1; i < adatok.length; i++) { // vegigiteralok az arrayen, az elso elemet kihagyva
        const currentElement = adatok[i]; // az aktualis elem elmentese

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
        sor.appendChild(cella3); // cella hozzafuzese a sorhoz

        if (!currentElement.szerelem2) { // ha masodik szerelem nincs akkor egybevonja a ket cellat
            cella3.colSpan = 2; // a ket cell osszevonasa
        } else { // kulon cellaba rakja ha van masodik szerelme
            const cella4 = document.createElement('td'); // td elem letrehozasa a negyedik cellahoz
            cella4.innerHTML = currentElement.szerelem2; // cella tartalma az aktualis elem szerelem2 tulajdonsaga
            sor.appendChild(cella4); // cella hozzafuzese a sorhoz
        }
    }
}

renderMenu(array); // kezdeti render atadva az arrayt

const form = addFormToDOM(); // form hozzaadasa a domhoz

function validateField(inputElem, errorId, errorMessage) { // validacios fuggveny definialasa
    let valid = true; // lokalis valid valtozo igaz ertekre allitasa
    if (inputElem.value === '') { // ha az input mezo ures
        const errorElement = document.getElementById(errorId); // hibauzenet elem kivalasztasa id alapjan
        if (errorElement) { // ha van ilyen hibauzenet elem 
            errorElement.innerHTML = errorMessage; // hibauzenet beallitasa
        }
        valid = false; // valid valtozo hamisra allitasa
    }
    return valid; // valid valtozo ertekenek visszaadasa
}

// sikeresen atmasoltam fuggvenybe az osszetett validaciot
function validateSzerelmek(szerelem1Elem, szerelem2Elem, masodikElem) { // osszetett validacios fuggveny definialasa
    let valid = true; // lokalis valid valtozo igaz ertekre allitasa
    
    // Ha a checkbox be van pipalva es valamelyik szerelem mezo ures
    if (masodikElem.checked && (szerelem1Elem.value === '' || szerelem2Elem.value === '')) { // ellenorzi hogy mindket csapattars allitott e be poziciot
        const szerelem1Error = document.getElementById('szerelem1-error'); // hibauzenet elem kivalasztasa / ignite vagy tp
        szerelem1Error.innerHTML = 'Ha bejelölted a checkboxot, akkor'; // hibauzenet beallitasa / ignite lett
        
        const szerelem2Error = document.getElementById('szerelem2-error'); // hibauzenet elem kivalasztasa / ignite vagy tp
        szerelem2Error.innerHTML = 'a költőnek kötelező megadni a szerelmeit!!!'; // hibauzenet beallitasa / ignite lett
        
        valid = false; // ha nem valid akkor a valid valtozo falsee
    }
    return valid; // valid valtozo ertekenek visszaadasa
}

form.addEventListener('submit', function(e) { // esemenykezeles a formra
    e.preventDefault(); // alapertelmezett esemeny megakadalyozasa

    const koltoNevElem = document.getElementById('kolto_nev'); // kolto_nev input elem lekerese
    const korszakElem = document.getElementById('korszak'); // korszak input elem lekerese
    const szerelem1Elem = document.getElementById('szerelem1'); // szerelem1 input elem lekerese
    const szerelem2Elem = document.getElementById('szerelem2'); // szerelem2 input elem lekerese
    const masodikElem = document.getElementById('masodik'); // masodik checkbox elem lekerese

    const thisForm = e.currentTarget; // az aktualis form elmentese lokalis valtozoba
    const errorHtmlElements = thisForm.querySelectorAll('.error'); // az osszes error osztalyu elem kivalasztasa a formbol
    
    for (const errorElement of errorHtmlElements) { // vegigmegy az osszes error elemen
        errorElement.innerHTML = ''; // az errorElement tartalmat uresre allitja
    }
    
    let valid = true; // valid valtozo kezdeti ertekenek beallitasa

    if (!validateField(koltoNevElem, 'kolto_nev-error', 'A költő nevének megadása kötelező')) { // kolto_nev validalasa
        valid = false; // ha nem valid akkor a valid valtozo false
    }
    
    if (!validateField(korszakElem, 'korszak-error', 'A korszak megadása kötelező')) { // korszak validalasa
        valid = false; // ha nem valid akkor a valid valtozo false
    }
    
    if (!validateField(szerelem1Elem, 'szerelem1-error', 'Az első szerelem megadása kötelező')) { // szerelem1 validalasa
        valid = false; // ha nem valid akkor a valid valtozo false
    }

    if (masodikElem.checked) { // ha a masodik szerelem checkbox be van pipalva
        if (!validateField(szerelem2Elem, 'szerelem2-error', 'A második szerelem megadása kötelező, ha be van jelölve')) { // szerelem2 validalasa
            valid = false; // ha nem valid akkor a valid valtozo false
        }
    }

    // osszetett validacio hivas
    if (!validateSzerelmek(szerelem1Elem, szerelem2Elem, masodikElem)) { // osszetett validacios fuggveny meghivasa
        valid = false; // ha nem valid akkor a valid valtozo false
    }
    
    if (valid) { // ha minden mezo helyesen van kitoltve

        const koltoNevValue = koltoNevElem.value; // kolto nev ertekenek kiolvasasa
        const korszakValue = korszakElem.value; // korszak ertekenek kiolvasasa
        const szerelem1Value = szerelem1Elem.value; // szerelem1 ertekenek kiolvasasa
        const szerelem2Value = masodikElem.checked ? szerelem2Elem.value : undefined; // szerelem2 ertekenek kiolvasasa ha be van pipalva

        const newElem = { // definialok egy uj elementet
            szerzo: koltoNevValue, // az uj objektum szerzo erteke a koltoNevValue lesz
            korszak: korszakValue, // az uj objektum korszak erteke a korszakValue lesz
            szerelem1: szerelem1Value, // az uj objektum szerelem1 erteke a szerelem1Value lesz
            szerelem2: szerelem2Value // az uj objektum szerelem2 erteke a szerelem2Value lesz
        };

        array.push(newElem); // uj elem hozzaadasa a tombhoz
        menuContainer.innerHTML = ''; // tablazat tartalmanak torlese 
        renderMenu(array); // tablazat ujrarajzolasa
        thisForm.reset(); // form reset
    }
});