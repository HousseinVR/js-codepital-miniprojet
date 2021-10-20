export let doctor = {
    nom : "le docteur",
    tarif : 50,
    cabinet : [],
    diagnostique(patients){

    },
    patientIn(patients){
        this.cabinet.push(patients.nom)
        
    },
    patientOut(patients){
        this.cabinet.splice(patients.nom)

    }
}






