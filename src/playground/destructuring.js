/*
const person = {
    name: 'Anastasia',
    age: 22,
    location: {
        city: 'Minsk',
        temp: 92
    }
};

const {name: firstName = 'Anonymous', age} = person
const {city, temp: temperature} = person.location


console.log(`It's ${temperature} in ${city}.`)*/

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '12435'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
