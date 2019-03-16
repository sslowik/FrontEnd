var patients = [
{
    id: 1, 
    firstName: "Jan",
    lastName: "Kowalski",
    yearOfBirth: 1977,
    birthdate: new Date (yearOfBirth, 06, 15), 
    sex: "M",
    isPregnant: false,
    isBrawler: false, 
    familyDoctor: "Jakub Sienkiewicz",
    chronicDiseases: ["astma", "nadciśnienie", "cukrzyca", "schizofrenia"]
},

{
    id: 2, 
    firstName: "Ewa",
    lastName: "Wiśniewska",
    yearOfBirth: 1983, 
    birthdate: new Date (yearOfBirth, 06, 03),    
    sex: "K",
    isPregnant: true,
    isBrawler: false, 
    familyDoctor: "Jakub Sienkiewicz",
    chronicDiseases: ["nadciśnienie"],
},

{
    id: 3, 
    firstName: "Magdalena",
    lastName: "Wiśniewska",
    yearOfBirth: 1990,
    birthdate: new Date (yearOfBirth + "/1/1"), 
    sex: "K",
    isPregnant: false,
    isBrawler: false, 
    familyDoctor: "Jakub Sienkiewicz",
    chronicDiseases: ["brak"],
}
];

console.log(patiients);

function addPatient(firstN, lastN, birthYear, birthMonth, birthDay, sexOf, pregnancy, chronicDis = []) {
    var newPatient = {
      id: patients.length,
      firstName: firstN,
      lastName: lastN,
      yearOfBirth: birthYear, 
      birthdate: new Date(birthYear, birthMonth, birthDay),
      sex: sexOf, 
      isPregnant: pregnancy,
      isBrawler: false,  
      chronicDiseases: chronicDis,
      };
    patients.push(newPatient);
    console.log("Successfully added patient: " + newPatient.firstName + " " + newPatient.lastName);
  }

addPatient("Bolesław", "Krzywousty", 1085, 12, 26, "M", false,["Krzywe usta", "Nie żyje"]); 

function getPatientNameById(id) {
    var patientWithId = patients.filter(function(patient) {
        return patient.id === id; 
    });
    return ( patientWithId[0].firstName + " " + patientWithId[0].lastName ); 
}

console.log(getPatientNameById(4)); 

function getPatientsWithDisease(disease) {
    return patients.filter(function(patient) {
return 
    });
}

function getBrawlers(){
    return patients.filter(function(patient) {
        return patient.isBrawler === true;
    });
}

getBrawlers(); 

//return patientDatabase.patient.isPregnant; 
//console.log("Uwaga! " + patientDatabase.patient.firstName + " " + patientDatabase.patient.firstName )
//}

function getPacjentsByLastname(lastName){    
    console.log("Pacjenci o nazwisku " + lastName);
    return output = patientDatabase.filter(patientDatabase.lastName === lastName);
}

console.log(patientDatabase); 

getPacjentsByLastname("Kowalski");