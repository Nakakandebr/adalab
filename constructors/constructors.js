function Person(name,age,height){
      this.name=name;
      this.age=age;
      this.height=height
      this.greet=function(){
          console.log('hello');
      }

};
let adam=new Person('Adam',25,'7ft');
console.log({adam});
adam.weight=60;
console.log({adam});
let eve=new Person('Eve',20,'5ft')
console.log({eve});
console.log(`hello ${this.name}`)

console.log(Person.prototype);
Person.prototype.race='black';
Person.prototype.nationality='Uganadan'
console.log(adam.race);
console.log(eve.race);
console.log({adam});
console.log(adam.nationality);
Person.prototype.yearOfBirth=function(){
    let year=new Date().getFullYear();
    let birth=year-this.age;
    console.log({birth});
}
adam.yearOfBirth()
eve.nationality='Kenya'
console.log({even});
