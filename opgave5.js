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

// spillerliste[0].GivPoint(10);
// spillerliste[1].GivPoint(5);

spillerliste.forEach(function (spiller) {
  spiller.GivPoint(10);
  console.log(spiller.Profil());
})
