const username = "luisalvacelis";
const fullName = "Luis Angel Hugo Alva Celis";
const age = 24;
const isStudent = true;

const address = {
  street: "123 Main Street",
  city: "Techville",
  state: "Codingland",
  zipCode: 54321,
};

const hobbies = ["Coding", "Reading", "Gaming"];

const personalizedBio = `Hi, I'm ${fullName}.
I'm ${age} years old.
I live in ${address.city}.
I love ${hobbies.join(", ")}.
Follow me for coding adventures!`;

console.log(personalizedBio);
