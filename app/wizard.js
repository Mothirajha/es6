// Prototypes - Example
function Wizard(name, house, pet) {
  this.name = name;
  this.house = house;
  this.pet = pet;

  this.greet = () => `I'am ${this.name} from ${this.house}`;
}
export default Wizard;
