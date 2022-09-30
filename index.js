


//1.rectangle class


class rectangle {

    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calcArea() {


        return this.height * this.width
    }


}
let rect = new rectangle(4, 5, 'red')
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());



///////////////////////////////////////////////////////
//2.person
class Person {

    constructor(firstName, lastName, age, email) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email



    }

    tostring() {

        return ` ${this.firstName} ${this.lastName} (age: ${this.age}, email:${this.email})`


    }


}
let p1 = new Person('Maria', 'Petterson', 22, 'mp@gmail.com');
console.log(p1.tostring());


/////////////////////////////////////////
//3.Get Persons


let p2 = new Person('lexicon');
let p3 = new Person('Stefan', 'Petterson', 22, '');
let p4 = new Person('Petre', 'Petterson', 22, 'mp@gmail.com');
const arr = [p1, p2, p3, p4];
const personArr = (p) => {


    const result = arr.map(pers => {
        return pers.firstName
    })


    return result


}
console.log(personArr(arr))



//////////////////////////////////////////////
//4.Circle
class Circle {
    constructor(radius) {
        this.radius = radius;
        var diameter;

    }
    getDiameter() {

        return this.diameter
    }

    setDiameter(radius) {
        
 this.radius*2
        this.radius= diameter;

    }


   

    area() {
        return Math.PI * this.radius * this.radius
    }



}



let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);


/////////////////////////////////////////////////////
//5.Point Distance

class Point {
    constructor(x, y) {

        this.x = x
        this.y = y


    }

    static distance(w, z) {

        var a = z.x - w.x;
        var b = z.y - w.y
        return Math.sqrt(a * a + b * b)
    }




}

let po1 = new Point(5, 5);
let po2 = new Point(9, 8);
console.log(Point.distance(po1, po2));


//////////////////////////////


