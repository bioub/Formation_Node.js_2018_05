const { Router } = require('express');
const contactCtrl = require('../controllers/contact');
const isAdmin = require('../middlewares/is-admin');
const bodyParser = require('body-parser');

const router = Router();

router.get('/',
  contactCtrl.list,
);

router.post('/',
  isAdmin,
  bodyParser.json(),
  contactCtrl.create,
);

router.get('/:id',
  contactCtrl.show,
);

router.put('/:id',
  bodyParser.json(),
  contactCtrl.update,
);

router.delete('/:id',
  contactCtrl.delete,
);

module.exports = router;
