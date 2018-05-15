const chai = require('chai');
const sinon = require('sinon');
const isAdmin = require('../../middlewares/is-admin');
const expect = chai.expect;

describe('middleware isAdmin', () => {
  it('should call next when i am admin', () => {
    const req = {
      headers: {
        authorization: '123',
      }
    };
    const res = {
      json() {}
    };
    const next = sinon.spy();
    isAdmin(req, res, next);
    expect(next.calledOnce).to.be.true; // TODO npm i sinon-chai
  });
});
