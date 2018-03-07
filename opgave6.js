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

  static hentSpillerListe(){
    let liste = [];
    liste.push(new spiller("Palle", "Olsen"));
    liste.push(new spiller("Jonas", "Jensen"));
    liste.push(new spiller("Jonas", "Jensen2"));
    return liste;
  }
}

let spillerliste = spiller.hentSpillerListe();

spillerliste.forEach(function (spiller) {
  spiller.GivPoint(10);
  console.log(spiller.Profil());
})
