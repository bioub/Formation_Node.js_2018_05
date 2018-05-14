const events = require('events');

const EventEmitter = events.EventEmitter

const ee = new EventEmitter();
ee.on('user.created', (user) => {
  console.log(user.name + ' created');
});

function createUser(user) {
  // TODO mongodb
  ee.emit('user.created', user);
}

createUser({ name: 'Romain' });
