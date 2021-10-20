import { cimetiere } from "../main.js";

export class Patient {
    constructor(nom,maladie,argent,poche,etatSante,traitement,goTo,paye){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.traitement = traitement;
        this.goTo = goTo;
        this.paye = paye;
        this.goTo = () => {
            console.log(`${this.nom} est allé à la pharmacie`);
        };
        
        this.takeCare = () => {
            if (this.argent >= 100) {
                console.log(`${this.nom} est soigné`);
            } else {
                cimetiere.push(this.nom);
                console.log(`${this.nom} n'as pas assez d'argent pour le traitement.`);
            }
        };
        this.paye = (doctor) => {
            this.argent -= doctor.tarif;
        }
    }
}


