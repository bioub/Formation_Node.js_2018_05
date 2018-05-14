'use strict';

const contacts = [{
  firstName: 'Steve',
  lastName: 'Jobs',
  id: 123,
},{
  firstName: 'Bill',
  lastName: 'Gates',
  id: 234,
}];

const nextId = () => contacts[contacts.length-1].id + 1;

exports.find = () => Promise.resolve(contacts);
exports.create = (contact) => {
  const copy = {...contact};
  copy.id = nextId();
  contacts.push(copy);
  return Promise.resolve(copy);
};
