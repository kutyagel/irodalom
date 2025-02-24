const headerSzoveg = {
    szerzo: "Szerző neve", // a szerzo nevet tartalmazo header szovege
    korszak: "Korszak",    // a korszakot tartalmazo header szovege
    szerelem: "Szerelmek", // a szerelmeket tartalmazo header szovege
};

const firstRow = {
    szerzo: "Balassi Bálint",      // az elso sor elso cellajanak szovege
    korszak: "reformáció",         // az elso sor masodik cellajanak szovege
    szerelem1: "Losonczy Anna",    // az elso sor harmadik cellajanak szovege
    szerelem2: "Dobó Krisztina",   // az elso sor negyedik cellajanak szovege
};

const secondRow = {
    szerzo: "Csokonai Vitéz Mihály", // a masodik sor elso cellajanak szovege
    korszak: "felvilágosodás",       // a masodik sor masodik cellajanak szovege
    szerelem: "Vajda Juliána",      // a masodik sor harmadik cellajanak szovege
};

const thirdRow = {
    szerzo: "Petőfi Sándor",        // a harmadik sor elso cellajanak szovege
    korszak: "magyar romantika",    // a harmadik sor masodik cellajanak szovege
    szerelem1: "Mednyánszky Berta", // a harmadik sor harmadik cellajanak szovege
    szerelem2: "Szendrey Júlia",    // a harmadik sor negyedik cellajanak szovege
};

const fourthRow = {
    szerzo: "Ady Endre",            // a negyedik sor elso cellajanak szovege
    korszak: "20. század",          // a negyedik sor masodik cellajanak szovege
    szerelem1: "Léda",              // a negyedik sor harmadik cellajanak szovege
    szerelem2: "Csinszka",          // a negyedik sor negyedik cellajanak szovege
};


const table = document.createElement('table'); // table elem letrehozasa
document.body.appendChild(table); // hozzafuzes a bodyhoz


const fejlec = document.createElement('thead'); // thead letrehozasa ami a tablazat fejlece lesz
table.appendChild(fejlec); // fejlec hozzafuzese a tablazathoz


const fejlecSor = document.createElement('tr'); // tr elem letrehozasa
fejlec.appendChild(fejlecSor); // a sor hozzafuzese a fejlechez


const fejlecCella1 = document.createElement('th'); // th elem letrehozasa a fejlec cellajahoz
fejlecCella1.innerHTML = headerSzoveg.szerzo; // cell tartalma const
fejlecSor.appendChild(fejlecCella1); // cella hozzafuzese a fejlec sorhoz


const fejlecCella2 = document.createElement('th'); // megegy th elem letrehozasa fejlec masodik cellajahoz
fejlecCella2.innerHTML = headerSzoveg.korszak; // cella tartalma const
fejlecSor.appendChild(fejlecCella2); // cella hozzafuzese a fejlec sorhoz


const fejlecCella3 = document.createElement('th'); // Letrehozok egy harmadik th elemet a fejlec harmadik cellajahoz
fejlecCella3.innerHTML = headerSzoveg.szerelem; // cella tartalma const
fejlecCella3.colSpan = '2'; // 2 oszlopot foglaljon
fejlecSor.appendChild(fejlecCella3); // cella hozzafuzese a fejlec sorhoz


const torzs = document.createElement('tbody'); // tbody elem letrehozasa a table torzsehez
table.appendChild(torzs); // torzs hozzafuzese a tablazathoz


const sor1 = document.createElement('tr'); // tr elem letrehozasa az elso sorhoz
torzs.appendChild(sor1); // az elso sort hozzafuzom a torzshoz


const sor1Cella1 = document.createElement('td'); // td elem letrehozasa elso sor elso cellajahoz
sor1Cella1.innerHTML = firstRow.szerzo; // cella tartalma const
sor1.appendChild(sor1Cella1); // cella hozzafuzese a sorhoz


const sor1Cella2 = document.createElement('td'); // td elem letrehozasa elso sor masodik cellajahoz
sor1Cella2.innerHTML = firstRow.korszak; // cella tartalma const
sor1.appendChild(sor1Cella2); // cella hozzafuzese a sorhoz


const sor1Cella3 = document.createElement('td'); // td elem letrehozasa elso sor harmadik cellajahoz
sor1Cella3.innerHTML = firstRow.szerelem1; // cella tartalma const 
sor1.appendChild(sor1Cella3); // cella hozzafuzese a sorhoz


const sor1Cella4 = document.createElement('td'); // td elem letrehozasa elso sor negyedik cellajahoz
sor1Cella4.innerHTML = firstRow.szerelem2; // cella tartalma const
sor1.appendChild(sor1Cella4); // cella hozzafuzese a sorhoz


const sor2 = document.createElement('tr'); // tr elem letrehozasa a masodik sorhoz
torzs.appendChild(sor2); // masodik sort hozzafuzom a torzshoz


const sor2Cella1 = document.createElement('td'); // td elem letrehoz masodik sor elso cellajahoz
sor2Cella1.innerHTML = secondRow.szerzo; // cella tartalma const
sor2.appendChild(sor2Cella1); // cella hozzafuzese a torzshoz


const sor2Cella2 = document.createElement('td'); // Letrehozok egy td elemet a masodik sor masodik cellajahoz
sor2Cella2.innerHTML = secondRow.korszak; // cella tartalma const
sor2.appendChild(sor2Cella2); // cella hozzafuzese a torzshoz


const sor2Cella3 = document.createElement('td'); // Letrehozok egy td elemet a masodik sor harmadik cellajahoz
sor2Cella3.innerHTML = secondRow.szerelem; // cella tartalma const
sor2Cella3.colSpan = '2'; // 2 oszlopot foglaljon
sor2.appendChild(sor2Cella3); // cella hozzafuzese a torzshoz


const sor3 = document.createElement('tr'); // harmadik sorhou letrehozok egy tr elemet
torzs.appendChild(sor3); // harmadik sort hozzafuzom a torzshioz


const sor3Cella1 = document.createElement('td'); // td elem letrehozasa a harmadik sor elso cellahoz
sor3Cella1.innerHTML = thirdRow.szerzo; // cella tartalma const
sor3.appendChild(sor3Cella1); // cella hozzafuzese a sorhoz


const sor3Cella2 = document.createElement('td'); // td elem letrehozasa a harmadik sor masodik cellahoz
sor3Cella2.innerHTML = thirdRow.korszak; // cella tartalma const
sor3.appendChild(sor3Cella2); // cella hozzafuzese a sorhoz


const sor3Cella3 = document.createElement('td'); // td elem letrehozasa a harmadik sor harmadik cellahoz
sor3Cella3.innerHTML = thirdRow.szerelem1; // cella tartalma const
sor3.appendChild(sor3Cella3); // cella hozzafuzese a sorhoz


const sor3Cella4 = document.createElement('td'); // td elem letrehozasa a harmadik sor negyedik cellahoz
sor3Cella4.innerHTML = thirdRow.szerelem2; // cella tartalma const
sor3.appendChild(sor3Cella4); // cella hozzafuzese a sorhoz


const sor4 = document.createElement('tr'); // tr elem letrehozasa a negyedik sorhoz
torzs.appendChild(sor4); // a negyedik sort hozzafuzom a torzshoz


const sor4Cella1 = document.createElement('td'); // td elem letrehozasa a negyedik sor elso cellahoz
sor4Cella1.innerHTML = fourthRow.szerzo; // cella tartalma const
sor4.appendChild(sor4Cella1); // cellat hozzafuzom a sorhoz


const sor4Cella2 = document.createElement('td'); // td elem letrehozasa a negyedik sor masodik cellahoz
sor4Cella2.innerHTML = fourthRow.korszak; //cella tartalma const
sor4.appendChild(sor4Cella2); // cellat hozzafuzom a sorhoz


const sor4Cella3 = document.createElement('td'); // td elem letrehozasa a negyedik sor harmadik cellahoz
sor4Cella3.innerHTML = fourthRow.szerelem1; // cella tartalma const
sor4.appendChild(sor4Cella3); // cellat hozzafuzom a sorhoz


const sor4Cella4 = document.createElement('td'); // td elem letrehozasa a negyedik sor negyedik cellahoz
sor4Cella4.innerHTML = fourthRow.szerelem2; // cella tartalma const
sor4.appendChild(sor4Cella4); // cellat hozzafuzom a sorhoz