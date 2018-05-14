const { Router } = require('express');
const contactCtrl = require('../controllers/contact');

const router = Router();

router.get('/',
  contactCtrl.list,
);

router.post('/',
  contactCtrl.create,
);

module.exports = router;
