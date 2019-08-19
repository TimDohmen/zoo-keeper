class Kangaroo {
  constructor(
    name = "",
    color = "",
    food = "",
    sound = "",
    weight = "",

  ) {
    this.name = name;
    this.color = color;
    this.food = food;
    this.sound = sound;
    this.weight = weight;
  }
  feed() {
    console.log(`You feed ${this.name} some ${this.food} `)
  }
  speak() {
    console.log(`${this.name} says ${this.sound}`)
  }
}
export default Kangaroo