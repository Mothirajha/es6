import Animal from './animal';
class Dog extends Animal {
  constructor(name, height, color) {
    super(name, height);
    this.color  = color;
  }
  hello(){
    console.log(`Hi I'am ${this.name} from Dog class with coloer ${this.color}`);
  }
}

export default Dog;
