// Objects

const car ={
    mark: 'Land Rover',
    model: 'Range Rover',
    transmission: 'Automatic',
    type: 'Truck',
    color: {
        blue: 500
    },
};


const numbers = [1, 2, 3, 4, 5];
const birthdayDay = '32';
const birthdayMonth = 'December';

console.log(typeof birthdayDay)

console.log(new Date())
console.log(Math.random())
console.log( typeof Number(birthdayDay))

// Adding to object
car.motor = '200kw'


// Type Casting - Explicit and Implicit

// Basic Operators

/**
 * = on väärtuse andmine muutujale
 * == väärtused on võrdsed
 * === väärtused ja andemtüübid on võrdsed
 * != väärtused ei ole võrdsed
 * !== väärtused ning andmetüübid ei ole võrdsed
 * + liitmine (ühekaupa liitmise operaator ++ => 1++)
 * - lahutamine
 * / jagamine
 * * korrutamine
 * % (remainder) jääk
 * ** astendamine 
 */

// Data Structures - Map vs Set
const contacts = new Map();

contacts.set('Jessie', { phone: '5555555', aadress: 'Ametikool'})
contacts.has('Jessie');
contacts.get('Jessie');
contacts.set('Audi', {model: 'S8'});
console.log(contacts.size);
contacts.delete('Audi');

const mySet = new Set();

mySet.add('1');
mySet.add({ a: 1, b: 2});
mySet.add(true)

// JSON - Javascript Object Notation

const thisIsJSON = {
    'name': 'Mai Mardo'
}

// If statements and shorthand expressions

let year = prompt('Mis su sünniaasta on?');

// Long version

/*if (year === '2006') {
    alert('Õige vastus, tubli noormees.')
 }  else {
    alert('Puhta mööda.')
}
*/

//Shorthand version

/*
 !(year === '2006')
    ? alert('Pihtas, põhjas')
    : alert('Mööda')
*/

// Switch Statements

switch(year) {
    case '2006':
        alert('Pihtas, põhjas.')
        break;
    case '2016':
        alert('Peaaegu')
        break;
    default:
        alert('Mööda')
        throw new Error('Kõik olid valed vastused')
        break;
}