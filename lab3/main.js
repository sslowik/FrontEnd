var patients = [
{
    id: 1, 
    firstName: "Jan",
    lastName: "Kowalski",
    yearOfBirth: 1977,
    birthdate: new Date ("1977-06-15"), 
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
    birthdate: new Date ("1983-06-03"),    
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
    birthdate: new Date (this.yearOfBirth + "-01-01"), 
    sex: "K",
    isPregnant: false,
    isBrawler: false, 
    familyDoctor: "Jakub Sienkiewicz",
    chronicDiseases: ["brak"],
}
];

console.log(patients);

function addPatient(firstN, lastN, birthYear, birthMonth, birthDay, sexOf, pregnancy, brawling, chronicDis = []) {
    var newPatient = {
      id: patients.length + 1,
      firstName: firstN,
      lastName: lastN,
      yearOfBirth: birthYear, 
      birthdate: new Date(birthYear, birthMonth, birthDay),
      sex: sexOf, 
      isPregnant: pregnancy,
      isBrawler: true,  
      chronicDiseases: chronicDis,
      };
    patients.push(newPatient);
    console.log("Successfully added patient: " + newPatient.firstName + " " + newPatient.lastName);
  }

addPatient("Bolesław", "Krzywousty", 1085, 12, 26, "M", false, true, ["Krzywe usta", "Nie żyje"]); 

function getPatientNameById(id) {
    var patientWithId = patients.filter(function(patient) {
        return patient.id === id; 
    });
    return ( 
        patientWithId[0].firstName + 
        " " + 
        patientWithId[0].lastName 
        ); 
}

console.log(getPatientNameById(3)); 

function getPatientsWithDisease(disease) {
    return patients.filter(function(patient) {
return 
    });
}

function getBrawlers(){
    var brawlers = patients.filter(function(patient) {
        return patient.isBrawler === true;
    });
    console.log("Pacjenci awanturujący się to: ")
    return brawlers;
    //( brawlers.forEach(element => { return element.firstName + " " + element.lastName }) );
}

function getPatientNameById(id) {
    var patientWithId = patients.filter(function(patient) {
        return patient.id === id; 
    });
    return ( 
        patientWithId[0].firstName + 
        " " + 
        patientWithId[0].lastName 
        ); 
}

console.log(getBrawlers()); 

function removePatientByIndex(index) {
    patients.splice(index, 1);
    console.log("Usunięto pacjenta o indeksie: " + index);
}

removePatientByIndex(4); 

//console.log(patients);

function getPregnantPatients() {
    console.log("Pacjenci w ciąży: "); 
    return patients.filter(function(patient) {
        return patient.isPregnant === true; 
    });
}
//return patientDatabase.patient.isPregnant; 
//console.log("Uwaga! " + patientDatabase.patient.firstName + " " + patientDatabase.patient.firstName )
//}

console.log(getPregnantPatients()); 

function getPacjentsByLastname(lastN) {    
    console.log("Pacjenci o nazwisku " + lastN);
    return patients.filter(function(patient) {
        return patient.lastName === lastN;
    });
} 
console.log(getPacjentsByLastname("Kowalski"));

function getPatientsOfFamilyDoctor(familyDoc) {
    console.log("Pacjenci Doktura: " + familyDoc);
    return patients.filter(function(patient) {
        return patient.familyDoctor === familyDoc;
    });
}

console.log(getPatientsOfFamilyDoctor("Jakub Sienkiewicz"));

var getAgeFromBirthdate = function(dateString) {
    var myDate = new Date(dateString), 
        now = new Date(),
        month_of_birth=myDate.getMonth(),
        day_of_birht=myDate.getDay(),
        year_of_birth=myDate.getYear(),
        now_month = now.getMonth(),
        now_day = now.getDay(),
        now_year = now.getYear(),
        age = now_year - year_of_birth;
    if (now_month < month_of_birth) {
        age--;
    } else if ((now_month == month_of_birth) && (now_day < day_of_birht)) {
        age--;
        if (age < 0) {
            age = 0;
        }
    }
    return age;
}

function getAgeOfPatient(id) {
    var patientWithId = patients.filter(function(patient) {
        return patient.id === id; 
    });
    console.log("Wiek pacjenta o id " + id + " to: " + getAgeFromBirthdate(patientWithId[0].birthdate) + " lat."); 
}

getAgeOfPatient(1);
getAgeOfPatient(2);