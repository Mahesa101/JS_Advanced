//cara membuat object yang paling efektif

function Users(name, energy, attack) {
  //dibalik layar
  //let this = object.create(Users.prototype);
  this.nama = name;
  this.stamina = energy;
  this.serang = attack;

  //return this
}

Users.prototype.actions = function (ac) {
  this.stamina -= this.serang * ac;
  console.log(`[Action] ${this.nama} menyerang! Sisa Stamina: ${this.stamina}`);
};

Users.prototype.sleeps = function (time) {
  this.stamina += time * 5;
  console.log(`[Sleep] ${this.nama} istirahat. Stamina: ${this.stamina}`);
};

let budi = new Users("budi", 50, 10);

//dibalik layar

//class
class Hero {
  constructor(name, energy, attack) {
    this.nama = name;
    this.stamina = energy;
    this.serang = attack;
  }

  actions(ac) {
    this.stamina -= this.serang * ac;
    console.log(
      `[Action] ${this.nama} menyerang! Sisa Stamina: ${this.stamina}`,
    );
  }

  sleeps(time) {
    this.stamina += time * 5;
    console.log(`[Sleep] ${this.nama} istirahat. Stamina: ${this.stamina}`);
  }
}

let nouw = new Hero("nouw", 5, 1);
console.log(nouw.actions());
