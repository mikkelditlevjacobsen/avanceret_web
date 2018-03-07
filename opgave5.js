class spiller {
  constructor (fornavn, efternavn) {
    this.Fornavn = fornavn;
    this.Efternavn = efternavn;
    this.Aktiv = false;
    this.Point = 0;
  }

  SkiftAktiv () {
    this.Aktiv = !this.Aktiv;
  }

  GivPoint (antal) {
    this.Point += antal;
  }

  Profil () {
    return `${this.Fornavn} ${this.Efternavn} har ${this.Point} point ${this.Aktiv ? "(aktiv)" : "(ikke aktiv)"}`;
  }
}

let spillerliste = [];
spillerliste.push(new spiller("Palle", "Olsen"))
spillerliste.push(new spiller("Jonas", "Jensen"))

// spiller_1.SkiftAktiv();
// spiller_1.GivPoint(10);

// spiller_2.SkiftAktiv();
// spiller_2.GivPoint(15);

spillerliste.forEach(item => {
  console.log(item);
})
