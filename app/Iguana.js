class Iguana {
  constructor(
    name = "",
    weight = 10,
    color = "",
    sound = "",
    food = "",
  ) {
    this.name = name;
    this.weight = weight;
    this.color = color;
    this.sound = sound;
    this.food = food;
  }
  feed() {
    console.log(`${this.name} loves snacking on ${this.food}`)
  }
  speak() {
    console.log(`${this.name} says ${this.sound}`)
  }
}
export default Iguana