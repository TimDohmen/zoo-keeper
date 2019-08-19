class Dog {
  constructor(
    name = "",
    color = "",
    sound = "",
    legs = 4,
    weight = 100,
    gender = "",
  ) {
    this.name = name;
    this.color = color;
    this.sound = sound;
    this.legs = legs;
    this.weight = weight;
    this.gender = gender;

  }
  speak() {
    alert(`${this.name} says ${this.sound}`)
  }
}



export default Dog