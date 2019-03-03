var patientDatabase = [
{
    firstName: "Jan",
    lastName: "Kowalski",
    birthdate: new Date (1977, 06, 15), 
    sex: "M",
    isPregnant: false,
    isBrawler: false, 
    familyDoctor: "Jakub Sienkiewicz",
    chronicDiseases: ["astma", "nadciśnienie", "cukrzyca", "schizofrenia"]
},

{
    firstName: "Ewa",
    lastName: "Wiśniewska",
    birthdate: new Date (year: 1977 , 
    sex: "K",
    isPregnant: true,
    isBrawler: false, 
    familyDoctor: "Jakub Sienkiewicz",
    chronicDiseases: ["nadciśnienie"],
},

{
    firstName: "Magdalena",
    lastName: "Wiśniewska",
    birthdate: new Date (year: 1977 , 
    sex: "K",
    isPregnant: false,
    isBrawler: false, 
    familyDoctor: "Jakub Sienkiewicz",
    chronicDiseases: ["brak"],
}
];

console.log(patientDatabase);

function addPacjentIfNotExists(patient){
    // 
if patientDatabase.indexOf(patient) === -1 ? patientDatabase.push(patient) : console.log("This item already exists");
}

function czyJestWciąży(patient){
return patientDatabase.patient.isPregnant; 
console.log("Uwaga! " + patientDatabase.patient.firstName + " " + patientDatabase.patient.firstName )
}

function getPacjentsByLastname(lastName){    
    console.log("Pacjenci o nazwisku " + lastName);
    return output = patientDatabase.filter(patientDatabase.lastName === lastName);
}

console.log(patientDatabase); 

getPacjentsByLastname("Kowalski");