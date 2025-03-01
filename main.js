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

renderMenu(array, menuContainer); // kezdeti render atadva az arrayt
const form = addFormToDOM(menuContainer); // form hozzaadasa a domhoz

/**
 * esemenykezelo a submit gombra
 * 
 * @param {Event} e submit esemeny obj
 */
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
        renderMenu(array, menuContainer); // tablazat ujrarajzolasa
        thisForm.reset(); // form reset
    }
});