class Jackrabbit {
  constructor(
    name = "",
    color = "",
    food = "",
    sound = "",
    weight = 7.5,
    speed = ""
  ) {
    this.name = name;
    this.color = color;
    this.food = food;
    this.sound = sound;
    this.weight = weight;
    this.speed = speed;
  }
  feed() {
    console.log(`You feed ${this.name} some ${this.food} `)
  }
  speak() {
    console.log(`${this.name} says ${this.sound}`)
  }
}
export default Jackrabbit