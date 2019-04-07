var lib = {};

lib.patientsDB = (function () {
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
            console.log("Successfully added patient: " + newPatient.firstName + " " + newPatient.lastName + " with ID: " + newPatient.id);
          }
        
        addPatient("Bolesław", "Krzywousty", 1085, 12, 26, "M", false, true, ["Krzywe usta", "Nie żyje", EChronicDiseases.astma]); 
        
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
       
        function removePatientByIndex(index) {
            patients.splice(index, 1);
            console.log("Usunięto pacjenta o indeksie: " + index);
        }
        
        function getPregnantPatients() {
            console.log("Pacjenci w ciąży: "); 
            return patients.filter(function(patient) {
                return patient.isPregnant === true; 
            });
        }
        
        function getPacjentsByLastname(lastN) {    
            console.log("Pacjenci o nazwisku " + lastN);
            return patients.filter(function(patient) {
                return patient.lastName === lastN;
            });
        } 
        
        function getPatientsOfFamilyDoctor(familyDoc) {
            console.log("Pacjenci Doktura: " + familyDoc);
            return patients.filter(function(patient) {
                return patient.familyDoctor === familyDoc;
            });
        }
        
        function getAgeOfPatient(id) {
            var patientWithId = patients.filter(function(patient) {
                return patient.id === id; 
            });
            console.log("Wiek pacjenta o id " + id + " to: " + _getAgeFromBirthdate(patientWithId[0].birthdate) + " lat."); 
        }
        
        function addChronicDisease(id, disease) {
            var patientToAddCd = patients.filter(function(patient) {
                return patient.id === id; 
            })
            patientToAddCd[0].chronicDiseases.push(disease);
            console.log("Succesfully added chronic disease: " + disease + ".");
        }

        var _getAgeFromBirthdate = function(dateString) {
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

        return {
        addPatient : addPatient,
        addChronicDisease : addChronicDisease,
        getBrawlers : getBrawlers,
        getPatientsOfFamilyDoctor: getPatientsOfFamilyDoctor,
        getPregnantPatients : getPregnantPatients,
        getPacjentsByLastname : getPacjentsByLastname,
        getAgeOfPatient: getAgeOfPatient, 
        getPatientNameById : getPatientNameById,
        getPatientsOfFamilyDoctor : getPatientsOfFamilyDoctor,
        removePatientByIndex : removePatientByIndex,
        }
})();


//zad 2 - dziedziczenie
