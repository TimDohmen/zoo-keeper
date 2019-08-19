import Alligator from "./models/Alligator.js";
import Baboon from "./models/Baboon.js"
import Chicken from "./Chicken.js"
import Dog from "./dog.js";
import Elephant from "./Elephant.js"
import Falcon from "./Falcon.js"
import Goat from "./Goat.js"
import Iguana from "./Iguana.js"
import Jackrabbit from "./Jackrabbit.js"
import Kangaroo from "./Kangaroo.js"
import Lion from "./Lion.js"


let ally = new Alligator("Ally", "Green", "F", 200, 60, "big");
console.log(ally)

// let booboo = new Baboon("Booboo", "Brown", "M", 75, 30, true);
let booboo = new Baboon({ name: "Booboo", color: "Brown", gender: "M", weight: 75, vertical: 30, hasTail: true });
console.log(booboo)

let clucker = new Chicken("Chicken", "White", "F", 5, true, "Cluck Cluck")
console.log(clucker)
console.log(clucker.eat("seed"))

let Doug = new Dog("Doug Dog", "Spotty", "Bork Bork", 3, 50, "M")
console.log(Doug)
console.log(Doug.speak())

let hopper = new Dog("Hopper Dog", "Gold", "Woof", 5, 75, "M")
console.log(hopper)
console.log(hopper.speak())

let bigDude = new Elephant("Big Dude", "Very Large", "Gray", true, true, 50000, "M", "AWOOOOOO")
console.log(bigDude)
console.log(bigDude.speak())

let flyBoy = new Falcon("Fly Boy", true, "spotted", "Caw Caw", 15)
console.log(flyBoy)
console.log(flyBoy.speak())

let guru = new Goat("Guru", "Speckled", "Baaaa", 5, 125, "M", "Everything")
console.log(guru)
console.log(guru.feed())
console.log(guru.speak())

let Iggy = new Iguana("Iggy", 5, "Rainbow", "purr purr", "crickets")
console.log(Iggy)
console.log(Iggy.feed())
console.log(Iggy.speak())

let James = new Jackrabbit("James", "White", "Grass", "thump thump", 5.5, "30 MPH")
console.log(James)
console.log(James.feed())
console.log(James.speak())

let Jack = new Kangaroo("Jack", "Brown", "People", "Punch Punch", "500")
console.log(Jack)
console.log(Jack.feed())
console.log(Jack.speak())

let Leo = new Lion("Leo", 550, true, "Raw Meat", "Roar", "Golden Brown")
console.log(Leo)
console.log(Leo.feed())
console.log(Leo.speak())


