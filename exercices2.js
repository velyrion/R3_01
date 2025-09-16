// Exercice 1
class Person {
    prenom;
    nom;
    age;
    ville;

    constructor(prenom, nom, age, ville) {
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
        this.ville = ville;
    }

    toString() {
        return "Prénom: " + this.prenom + ", Nom: " + this.nom + ", Age: " + this.age + ", Ville: " + this.ville;
    }
}

persone = new Person("Victor", "Paris Lemperrière", 19, "Caen");
console.log(persone);

// Exercice 2
let personnes = [
    new Person("John", "Doe", 25, "Rouen"),
    new Person("Jane", "Doe", 30, "Paris"),
    new Person("Jim", "Doe", 35, "Caen")
];

personnes.forEach(person => {
    console.log(person);
});

// Exercice 3
personnes.push(new Person("Marc", "Doe", 32, "Marseille"));

console.log(personnes);

// Exercice 4
personnes[0].prenom = "Jean";
personnes.splice(1, 1);
console.log(personnes);

// Exercice 5
let tab = [];
for (let i = 1; i <= 10; i++) {
    tab.push(i);
}
console.log(tab[0]);
console.log(tab[tab.length-1]);
console.log(tab.length);

// Exercice 6
let tab2 = [];
for (let i=10;i<=100;i+=10) {
    tab2.push(i);
}
console.log(tab2);
tab2.reverse();
console.log(tab2);

// Exercice 7
let numbers = [ 2, 5, 1, 9, 0, 3, 7, 4, 6, 8 ];
console.log(numbers);
numbers.sort();
console.log(numbers);

// Exercice 8
numbers.push(11);
console.log(numbers);
numbers.unshift(0);
console.log(numbers);
numbers.pop();
console.log(numbers);
