class Goat {
  constructor(
    name = "",
    color = "",
    sound = "",
    legs = 4,
    weight = 100,
    gender = "",
    food = ""
  ) {
    this.name = name;
    this.color = color;
    this.sound = sound;
    this.legs = legs;
    this.weight = weight;
    this.gender = gender;
    this.food = food;

  }
  speak() {
    console.log(`${this.name} says ${this.sound}`)
  }
  feed() {
    console.log(`${this.name} chomps away at ${this.food}`)
  }
}
export default Goat