class Guerrier {

    constructor(nom, pv, attaque, precision) {
    this.nom = nom;
    this.pv = pv;
    this.attaque = attaque;
    this.precision = precision;
}


verificationPrecision() {

    return Math.random() < this.precision;
} 

attaquer(ennemie) {

    if (this.verificationPrecision()) {

        console.log(this.nom + ' attaque' + ennemie.nom + ' attaque réussie');
        ennemie.pv = ennemie.pv - this.attaque;

    } else {

        console.log(this.nom + ' attaque' + ennemie.nom + ' attaque échoue');
    }
}}

let Guerrier1 = new Guerrier(" Maximus", 100, 20, 0.7); let Guerrier2 = new Guerrier(" Comode", 100, 25, 0.5);


while (Guerrier1.pv > 0 && Guerrier2.pv > 0) {
    console.log('Nouveau Round');


    Guerrier1.attaquer(Guerrier2);
    if (Guerrier2.pv <= 0) {
        console.log(Guerrier2.nom + ' mort' + Guerrier1.nom + ' victoire');
        break;
    }


    Guerrier2.attaquer(Guerrier1);
    if (Guerrier1.pv <= 0) {
        console.log(Guerrier1.nom + ' mort' + Guerrier2.nom + ' victoire');
        break;
    }

    console.log(Guerrier1.nom + ' à ' + Guerrier1.pv + ' pv');

    console.log(Guerrier2.nom + ' à ' + Guerrier2.pv + ' pv');

    
}

