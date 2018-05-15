const chai = require('chai');
const sinon = require('sinon');
const contactCtrl = require('../../controllers/contact');
const Contact = require('../../models/contact');
const expect = chai.expect;

describe('controller contact', () => {

  describe('method list', () => {

    beforeEach(() => {
      // Si test les requetes
      // TODO réimporter ici une base propre
    });

    it('should call next when i am admin', async () => {
      const res = {
        json(value) {
          expect(value).to.equals(data);
        },
      };

      const data = [{firstName: 'A'}];

      const mockContact = sinon.mock(Contact);
      mockContact.expects('find').resolves(data);

      await contactCtrl.list({}, res);
    });

  });
});
