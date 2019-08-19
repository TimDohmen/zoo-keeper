class Elephant {
  constructor(
    name = "",
    size = "",
    color = "",
    hasTusks = false,
    stomps = true,
    weight = 10000,
    gender = "",
    sound = ""

  ) {
    this.name = name;
    this.size = size;
    this.color = color;
    this.hasTusks = hasTusks;
    this.stomps = stomps;
    this.weight = weight;
    this.gender = gender;
    this.sound = sound;

  }
  speak() {
    alert(`${this.name} goes ${this.sound}`)
  }
}
export default Elephant