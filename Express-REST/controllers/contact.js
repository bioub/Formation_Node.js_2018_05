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

exports.show = async (req, res, next) => {
  try {
    const id = req.params.id;

    const contact = await Contact.findById(id);

    if (!contact) {
      return next();
    }

    res.json(contact);
  }
  catch(err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const id = req.params.id;

    const contact = await Contact.findByIdAndUpdate(id, req.body);

    if (!contact) {
      return next();
    }

    res.json(contact);
  }
  catch(err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const id = req.params.id;

    const contact = await Contact.findByIdAndRemove(id);

    if (!contact) {
      return next();
    }

    res.json(contact);
  }
  catch(err) {
    next(err);
  }
};
