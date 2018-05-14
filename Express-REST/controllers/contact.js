const Contact = require('../models/contact');

/*
exports.list = (req, res, next) => {
  Contact.find().then((contacts) => {
    res.json(contacts);
  });
};
*/

exports.list = async (req, res, next) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

exports.create = async (req, res, next) => {
  const contact = await Contact.create(req.body); // req.body nécessite body-parser
  res.statusCode = 201;
  res.json(contact);
};
