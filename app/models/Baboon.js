class Baboon {
  constructor(data) {
    this.name = data.name || "Anon";
    this.color = data.color;
    this.gender = data.gender;
    this.weight = data.weight;
    this.vertical = data.vertical;
    this.hasTail = data.hasTail;
  }

}
export default Baboon