interface Person {
  first: string;
  last: string;
  address: {
    city: string;
    country: string;
  };
}

const person: Person = {
  first: 'Pawel',
  last: 'Sawicki',
  address: {
    city: 'Berlin',
    country: 'Germany',
  },
};

function marry(person: Person, city: string, last: string): Person {
  return {
    ...person,
    last,
    address: {
      ...person.address,
      city,
    },
  };
}

const marriedPerson = marry(person, 'Duisburg', 'Musterfrau');

function hasPersonChanged(currPerson: Person, prevPerson: Person): boolean {
  // If n is the number of leafes and nodes, the O complexity is O(n)
  // Is this possible in O(1)?
  if (
    currPerson !== prevPerson
    // currPerson.first !== prevPerson.first ||
    // currPerson.last !== prevPerson.last ||
    // currPerson.address !== prevPerson.address ||
    // currPerson.address.city !== prevPerson.address.city ||
    // currPerson.address.country !== prevPerson.address.country
  ) {
    return true;
  }

  return false;
}
