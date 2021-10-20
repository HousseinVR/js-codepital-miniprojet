import { Patient } from "./modules/patient.js";
import { doctor } from "./modules/doctor.js";
import { Pharmacie } from "./modules/lieux.js";



let patient1 = new Patient('Marcus', 'mal indenté', 100, 'vide', 'malade');
let patient2 = new Patient ('Optimus', 'unsave', 200, 'vide', 'malade')
let patient3 = new Patient  ('Sangoku', '404', 80, 'vide', 'malade')
let patient4 = new Patient ('DarthVader', 'azmatique', 110, 'vide', 'malade')
let patient5 = new Patient ('Semicolon', 'syntaxError', 60, 'vide', 'malade')
let patients = [patient1,patient2,patient3,patient4,patient5]

export let cimetiere = [];



let traitement1 = new Pharmacie('ctrl+maj+f', 60)
let traitement2 = new Pharmacie('saveOnFocusChange', 100) 
let traitement3 = new Pharmacie('CheckLinkRelation', 35)
let traitement4 = new Pharmacie('Ventoline', 40)
let traitement5 = new Pharmacie('f12+doc', 20)

let traitements = [traitement1,traitement2,traitement3,traitement4,traitement5]


let salleAttente = {
    nom : "salle d'attente",
    patient : [patient1,patient2,patient3,patient4,patient5],
}



let chat = {
        contenue : [0],
        miauler() {
            setTimeout(()=> {
                if (this.contenue[0] == 0) {
                    console.log('miaou');
                }
            }, 2000)
        }
    }
    chat.miauler()


    // condition
    for (let index = 0; index<salleAttente.patient.length && index<traitements.length && index<patients.length; index++) {
        console.log(`Dans la salle d'attente il y a ${salleAttente.patient.length} personnes`);
        doctor.patientIn(patients[index])
        console.log(`${patients[index].nom} est entré au cabinet`);
        doctor.diagnostique(patients[index])
        console.log(`la maladie de ${patients[index].nom} est ${patients[index].maladie}`);
        console.log(`le traitement de ${patients[index].nom} est ${traitements[index].traitement}`);
        console.log(`${patients[index].nom} a payé ${doctor.nom}`);
        patient1.paye(doctor)
        console.log(`${patients[index].nom} a ${patients[index].argent}€ actuellement`);
        
        doctor.patientOut(patients[index])
        console.log(`${patients[index].nom} a quitté le cabinet`);

        patient1.goTo()
        console.log(`le traitement de ${patients[index].nom} coûte ${traitements[index].prix} euros`);
        patient1.takeCare()
        console.log(`${patients[index].nom} est mort donc il est au cimetiere`);

        salleAttente.patient.splice(salleAttente.patient.indexOf(patients[index]), 1);
        console.log("*******");
    }

    
    console.log(`Dans la salle d'attente il y a ${salleAttente.patient.length} personnes`);
    console.log(`${patient4.nom} est entré au cabinet`);
    doctor.diagnostique(patient4)
    doctor.diagnostique(patient4)
    console.log(`la maladie de ${patient4.nom} est ${patient4.maladie}`);
    console.log(`le traitement de ${patient4.nom} est ${traitement4.traitement}`);
    console.log(`${patient4.nom} a payé ${doctor.nom}`);
    patient1.paye(doctor)
    console.log(`${patient4.nom} a ${patient4.argent}€ actuellement`);
    
    doctor.patientOut(patient4)
    console.log(`${patient4.nom} a quitté le cabinet`);
    // console.log(doctor.cabinet.length);
    patient1.goTo()
    console.log(`le traitement de ${patient4.nom} coûte ${traitement4.prix} euros`);
    patient1.takeCare()
    console.log(`${patient4.nom} est mort donc il est au cimetiere`);


console.log("____________________________________________________________________");

console.log(`Dans la salle d'attente il y a ${salleAttente.patient.length} personnes`);
doctor.patientIn(patient5)
    console.log(`${patient5.nom} est entré au cabinet`);
    doctor.diagnostique(patient5)
    console.log(`la maladie de ${patient5.nom} est ${patient5.maladie}`);
    console.log(`le traitement de ${patient5.nom} est ${traitement5.traitement}`);
    console.log(`${patient5.nom} a payé ${doctor.nom}`);
    patient1.paye(doctor)
    console.log(`${patient5.nom} a ${patient5.argent}€ actuellement`);
    
    doctor.patientOut(patient5)
    console.log(`${patient5.nom} a quitté le cabinet`);
    patient1.goTo()
    console.log(`le traitement de ${patient5.nom} coûte ${traitement5.prix} euros`);
    patient1.takeCare()
    console.log(`${patient5.nom} est mort donc il est au cimetiere`);


console.log("____________________________________________________________________");


    
