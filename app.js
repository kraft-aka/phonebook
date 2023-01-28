const phoneList = [];

// creates person
const person = (firstName, lastName, phoneNumber, address) => {
  return {
    firstName,
    lastName,
    phoneNumber,
    address: address || null,

    set changeNumber(newPhoneNumber) {
      this.phoneNumber = newPhoneNumber;
    },

    set changeFirstName(newFirstName) {
      this.firstName = newFirstName;
    },

    set changeLastName(newLastName) {
      this.lastNamer = newLastName;
    },

    set changeAddress(newAddress) {
      this.address = newAddress;
    },
  };
};

const p1 = person("John", null, "123456789");
const p2 = person("Bob", "Doe", "123456789");
const p3 = person("David", "Bann", "+49-13213214");

// adds new numbers to list
const addNumber = (arr, obj) => {
  return arr.push(obj);
};

// TODO --->
// add css
// create page and display
// render DOM

// displays all persons numbers
const showAllNumbers = (arr) => {
  return arr.forEach((person, id) =>
    console.log(
      `${id + 1}:  ${person.firstName} ${person.lastName} - ${person.phoneNumber
      }`
    )
  );
};

// searchs number
const searchNumber = (arr, query) => {
  const found = query
    ? arr.filter(
      (item) =>
        item.firstName.toLowerCase() == query ||
        item.lastName == query ||
        item.phoneNumber == query
    )
    : "Not found!";

  return found.map((item) => item.phoneNumber).toString();
};

p2.changeNumber = "1122233654444";

addNumber(phoneList, p1);
addNumber(phoneList, p2);
addNumber(phoneList, p3);
//console.log(searchNumber(phoneList, "bob", "doe"));
//console.log(phoneList)

showAllNumbers(phoneList);
