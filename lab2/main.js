var bazaPacjentów = [

{
    imię: "Jan",
    nazwisko: "Kowalski",
    wiek: 33, 
    płeć: "M",
    jestWCiąży: false,
    czyAwanturującySię: false, 
    lekarzPK: "Jakub Sienkiewicz",
    chorobyPrzewlekłe: ["astma", "nadciśnienie", "cukrzyca", "schizofrenia"]
},

{
    imię: "Ewa",
    nazwisko: "Wiśniewska",
    wiek: 44, 
    płeć: "K",
    jestWCiąży: true,
    czyAwanturującySię: false, 
    lekarzPK: "Jakub Sienkiewicz",
    chorobyPrzewlekłe: ["nadciśnienie"],
},

{
    imię: "Magdalena",
    nazwisko: "Bauer",
    wiek: 12, 
    płeć: "K",
    jestWCiąży: false,
    czyAwanturującySię: false, 
    lekarzPK: "Doktor Zosia",
    chorobyPrzewlekłe: ["brak"],
}
];

function addPacjentIfNotExists(pacjent){
bazaPacjentów.indexOf(pacjent) === -1 ? bazaPacjentów.push(pacjent) : console.log("This item already exists");
}

function czyJestWciąży(pacjent){
return bazaPacjentów.pacjent.jestWCiąży; 
console.log("Uwaga! " + bazaPacjentów.pacjent.imię + " " + bazaPacjentów.pacjent.imię )
}

function getPacjentsByLastname(lastName){    
    console
    return output = bazaPacjentów.filter(bazaPacjentw.nazwisko === lastName);
}

getPacjentsByLastname("Kowalski");