'use strict';

document.addEventListener('click', () => {

  import("./horloge").then(module => {
    const divElt = document.querySelector('.horloge');
    const clock = new module.Horloge(divElt);
    clock.start();
  })

})

