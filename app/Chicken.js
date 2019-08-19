class Chicken {
  constructor(
    name = "",
    color = "",
    gender = "",
    weight = 0,
    laysEggs = false,
    sound = ""
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.laysEggs = laysEggs;
    this.sound = sound
  }
  eat(food) {
    console.log(`Peck peck the ${food}.`)
  }
}

export default Chicken