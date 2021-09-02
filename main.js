

// AND ARRAY OF OBJECT
const todos = [
    {
        id: 1,
        text: 'am in ameeting',
        isComplete: true
    }
];
const todosJSON = JSON.stringify(todos)
console.log(todosJSON);

const persons = [
    {
        firstName:'John',
        Age: 30,
        skinColor: 'chocolate'
    },
    {
        firstName: 'Moses',
        Age: 30,
        skinColor: 'Yellow'
    },
    {
        firstName: 'Joshua',
        Age: 24,
        skinColor: 'white'
    }
];
for(let person of persons){
    console.log(person.skinColor);
}

const x = 1;
const color = x >10 ? 'red': 'blue';
switch(color){
    case 'red':
        console.log('color is red');
        break;
        case 'blue':
            console.log('color is blue');
            break;
            default:
                console.log('color is NOT red or blue');
                break
}
// constructor fn
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob
}

// instantiate object

const person1 = new Person('Nicholas', 'Amodu', '10-02-1990')
const person2 = new Person('MaryJane', 'Idoko', '10-02-1998')
const person3 = new Person('Abie', 'Jan', '10-02-1991')
const person4 = new Person('Paul', 'Joe', '10-01-1990')
const person5 = new Person('Nan', 'Jane', '10-02-1993')

console.log(person5.dob);
console.log(person3);
