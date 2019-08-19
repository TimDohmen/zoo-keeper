class Falcon {
  constructor(
    name = "",
    feathers = true,
    color = "",
    sound = "",
    weight = 10,

  ) {
    this.name = name;
    this.feathers = feathers;
    this.color = color;
    this.sound = sound;
    this.weight = weight;
  }
  speak() {
    console.log(`${this.name} goes ${this.sound}`)
  }

}
export default Falcon