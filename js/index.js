let teslaX = {};
teslaX.made = 'Tesla';
teslaX.model = 'X';
teslaX.price = '90000';

console.log(teslaX.price);

teslaX.beep = function() {
    console.log('Tesla X beep-beep!');
}

teslaX.beep = beep;

teslaX.beep();

let volkswagenAtlas = {
    make: 'Volkswagen',
    model: 'Atlas',
    price: 35000,
    beep: function(){
        console.log('Volswagen Atlas beep-beep');
    }
}
volkswagenAtlas.beep();


function beep() {
    console.log(this.model + ' ' + this.model + 'beep-beep!')
}

function Car(make, model, price) {
    this.make = make;
    this.model = model;
    this.price = price;
//  this.beep = beep;
    return this;
}

//Car.protorype.beep=beep;

//let audiQ8 = new Car('Audi', 'Q8', 70000);
//audiQ8.beep();

class SuperCar {
    constructor(make, model, price){
    this.make = make;
    this.model = model;
    this.price = price;
    }
    beep() {
        console.log(this.make + ' ' + this.model + ' beep-beep!');
    }
}

let buggattiVeron = new SuperCar('Bugatti', 'Veron', 999999);
buggattiVeron.beep();
let buggattiChiron = Object.create(buggattiVeron);
console.dir(JSON.stringify(buggattiChiron));
buggattiChiron.model = 'Chiron';
console.dir(JSON.stringify(buggattiChiron));
buggattiChiron.beep();


let zazSensJaon = {
  "make": "ZAZ",
  "model": "Sens",
  "price": 10000
  };

  let zazSens = JSON.parse(zazSensJson);
  zazSens.beep = beep;
  zazSens.beep();
  
