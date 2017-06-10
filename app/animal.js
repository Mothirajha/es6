//Class
class Animal {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }

  hello(){
    console.log(`Hi I'am ${this.name} from Animal class`);
  }
}
// let king = new Animal("Tommy", "4.5");
// console.log(king);
// console.log(king.hello());
export default Animal;
