const { v4: uuidv4 } = require('uuid');
const random_name = require('node-random-name');
const random_email = require('random-email');

let resultArray = [];

for (let i = 0; i < 100; i++) {
    let userObj = {};
    userObj.id = uuidv4();
    userObj.givenName = random_name({ random: Math.random, first: true });
    userObj.surname = random_name({ random: Math.random, last: true });
    userObj.email = random_email();
    resultArray.push(userObj);
}

console.log(resultArray);