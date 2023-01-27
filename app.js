const phoneList = [];

// creates person
const person = (firstName, lastName,phoneNumber, address) => {
  return {
    firstName,
    lastName,
    phoneNumber,
    address: address || null,

    set changeNumber(newPhoneNumber) {
      this.phoneNumber = newPhoneNumber;
    },

    set changeFirstName(newFirstName) {
      this.phoneNumber = newFirstName;
    },
  }
}

const p1 = person('John',null, '123456789');
const p2 = person('Bob','Doe', '123456789');

// adds new numbers to list
const addNumber = (arr, obj) => {
  return arr.push(obj);
}

// TODO --->
// add search phone func
// add display all numbers func
// add css
// create page and display
// render DOM

p2.changeNumber = '1122233654444'

addNumber(phoneList, p1);
addNumber(phoneList, p2)
console.log(phoneList)
