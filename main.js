const table = document.createElement('table'); // table elem letrehozasa
document.body.appendChild(table); // hozzafuzes a bodyhoz


const fejlec = document.createElement('thead'); // thead letrehozasa ami a tablazat fejlece lesz
table.appendChild(fejlec); // fejlec hozzafuzese a tablazathoz


const fejlecSor = document.createElement('tr'); // tr elem letrehozasa
fejlec.appendChild(fejlecSor); // a sor hozzafuzese a fejlechez


const fejlecCella1 = document.createElement('th'); // th elem letrehozasa a fejlec cellajahoz
fejlecCella1.innerHTML = 'Szerzo neve'; // cell tartalma
fejlecSor.appendChild(fejlecCella1); // cella hozzafuzese a fejlec sorhoz


const fejlecCella2 = document.createElement('th'); // megegy th elem letrehozasa fejlec masodik cellajahoz
fejlecCella2.innerHTML = 'Korszak'; // cella tartalma
fejlecSor.appendChild(fejlecCella2); // cella hozzafuzese a fejlec sorhoz


const fejlecCella3 = document.createElement('th'); // Letrehozok egy harmadik th elemet a fejlec harmadik cellajahoz
fejlecCella3.innerHTML = 'Szerelmek'; // cella tartalma
fejlecCella3.colSpan = '2'; // 2 oszlopot foglaljon
fejlecSor.appendChild(fejlecCella3); // cella hozzafuzese a fejlec sorhoz


const torzs = document.createElement('tbody'); // tbody elem letrehozasa a table torzsehez
table.appendChild(torzs); // torzs hozzafuzese a tablazathoz


const sor1 = document.createElement('tr'); // tr elem letrehozasa az elso sorhoz
torzs.appendChild(sor1); // az elso sort hozzafuzom a torzshoz


const sor1Cella1 = document.createElement('td'); // td elem letrehozasa elso sor elso cellajahoz
sor1Cella1.innerHTML = 'Balassi Balint'; // cella tartalma
sor1.appendChild(sor1Cella1); // cella hozzafuzese a sorhoz


const sor1Cella2 = document.createElement('td'); // td elem letrehozasa elso sor masodik cellajahoz
sor1Cella2.innerHTML = 'reformacio'; // cella tartalma
sor1.appendChild(sor1Cella2); // cella hozzafuzese a sorhoz


const sor1Cella3 = document.createElement('td'); // td elem letrehozasa elso sor harmadik cellajahoz
sor1Cella3.innerHTML = 'Losonczy Anna'; // cella tartalma
sor1.appendChild(sor1Cella3); // cella hozzafuzese a sorhoz


const sor1Cella4 = document.createElement('td'); // td elem letrehozasa elso sor negyedik cellajahoz
sor1Cella4.innerHTML = 'Dobo Krisztina'; // cella tartalma
sor1.appendChild(sor1Cella4); // cella hozzafuzese a sorhoz


const sor2 = document.createElement('tr'); // tr elem letrehozasa a masodik sorhoz
torzs.appendChild(sor2); // masodik sort hozzafuzom a torzshoz


const sor2Cella1 = document.createElement('td'); // td elem letrehoz masodik sor elso cellajahoz
sor2Cella1.innerHTML = 'Csokonai Vitez Mihaly'; // cella tartalma
sor2.appendChild(sor2Cella1); // cella hozzafuzese a torzshoz


const sor2Cella2 = document.createElement('td'); // Letrehozok egy td elemet a masodik sor masodik cellajahoz
sor2Cella2.innerHTML = 'felvilagosodas'; // cella tartalma
sor2.appendChild(sor2Cella2); // cella hozzafuzese a torzshoz


const sor2Cella3 = document.createElement('td'); // Letrehozok egy td elemet a masodik sor harmadik cellajahoz
sor2Cella3.innerHTML = 'Vajda Julianna'; // cella tartalma
sor2Cella3.colSpan = '2'; // 2 oszlopot foglaljon
sor2.appendChild(sor2Cella3); // cella hozzafuzese a torzshoz


const sor3 = document.createElement('tr'); // harmadik sorhou letrehozok egy tr elemet
torzs.appendChild(sor3); // harmadik sort hozzafuzom a torzshioz


const sor3Cella1 = document.createElement('td'); // td elem letrehozasa a harmadik sor elso cellahoz
sor3Cella1.innerHTML = 'Petofi Sandor'; // cella tartalma
sor3.appendChild(sor3Cella1); // cella hozzafuzese a sorhoz


const sor3Cella2 = document.createElement('td'); // td elem letrehozasa a harmadik sor masodik cellahoz
sor3Cella2.innerHTML = 'magyar romantika'; // cella tartalma
sor3.appendChild(sor3Cella2); // cella hozzafuzese a sorhoz


const sor3Cella3 = document.createElement('td'); // td elem letrehozasa a harmadik sor harmadik cellahoz
sor3Cella3.innerHTML = 'Mednyanszky Berta'; // cella tartalma
sor3.appendChild(sor3Cella3); // cella hozzafuzese a sorhoz


const sor3Cella4 = document.createElement('td'); // td elem letrehozasa a harmadik sor negyedik cellahoz
sor3Cella4.innerHTML = 'Szendrey Julia'; // cella tartalma
sor3.appendChild(sor3Cella4); // cella hozzafuzese a sorhoz


const sor4 = document.createElement('tr'); // tr elem letrehozasa a negyedik sorhoz
torzs.appendChild(sor4); // a negyedik sort hozzafuzom a torzshoz


const sor4Cella1 = document.createElement('td'); // td elem letrehozasa a negyedik sor elso cellahoz
sor4Cella1.innerHTML = 'Ady Endre'; // cella tartalma
sor4.appendChild(sor4Cella1); // cellat hozzafuzom a sorhoz


const sor4Cella2 = document.createElement('td'); // td elem letrehozasa a negyedik sor masodik cellahoz
sor4Cella2.innerHTML = '20. szazad'; //cella tartalma
sor4.appendChild(sor4Cella2); // cellat hozzafuzom a sorhoz


const sor4Cella3 = document.createElement('td'); // td elem letrehozasa a negyedik sor harmadik cellahoz
sor4Cella3.innerHTML = 'Leda'; // cella tartalma
sor4.appendChild(sor4Cella3); // cellat hozzafuzom a sorhoz


const sor4Cella4 = document.createElement('td'); // td elem letrehozasa a negyedik sor negyedik cellahoz
sor4Cella4.innerHTML = 'Csinszka'; // cella tartalma
sor4.appendChild(sor4Cella4); // cellat hozzafuzom a sorhoz