'use strict';

/*
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
*/

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'firstName is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model('Contact', schema);
