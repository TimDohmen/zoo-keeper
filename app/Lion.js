class Lion {
  constructor(
    name = "",
    weight = 500,
    hasMane = false,
    food = "",
    sound = "",
    color = ""
  ) {
    this.name = name;
    this.weight = weight;
    this.hasMane = hasMane;
    this.food = food;
    this.sound = sound;
    this.color = color
  }
  feed() {
    console.log(`You feed ${this.name} some ${this.food}`)
  }
  speak() {
    console.log(`${this.name} likes to say ${this.sound}`)
  }
}
export default Lion