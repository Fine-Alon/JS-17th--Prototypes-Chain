document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const app = document.getElementById('app');
  const input = document.getElementById('input');
  input.addEventListener('input', () => {
    input.classList.remove('border-danger');
  });

  const createPrototypeChainList = (name) => {
    if (!(name in window)) {
      input.classList.add('border-danger');
      return;
    }

    const ol = document.createElement('ol');
    ol.classList.add('m-3', 'p-3', 'd-flex', 'flex-wrap');

    let currentPrototype = window[name].prototype;
    console.log('currentPrototype: ', currentPrototype);
    console.log(Object.getPrototypeOf(currentPrototype));

    while (currentPrototype) {
      console.log(currentPrototype.constructor.name);

      const mainLi = document.createElement('li');
      mainLi.classList.add('p-3', 'fs-3', 'fw-bolder', 'w-50');
      mainLi.textContent = currentPrototype.constructor ? currentPrototype.constructor.name : 'no name';

      const enumerableProperties = Object.getOwnPropertyNames(currentPrototype);
      const propertyList = document.createElement('ul');

      enumerableProperties.map(prop => {
        const liProp = document.createElement('li');
        liProp.classList.add('fs-6', 'pl-3', 'fst-italic');
        liProp.textContent = `Property: ${prop},    Type: ${typeof currentPrototype}`;
        propertyList.append(liProp);
        mainLi.append(propertyList);
      });

      ol.append(mainLi);
      currentPrototype = Object.getPrototypeOf(currentPrototype);
    }
    return ol;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    app.lastChild.remove();

    // console.log(Object.getPrototypeOf(e.target[0].value));
    app.append(createPrototypeChainList(e.target[0].value.trim()));
    input.value = '';
  });
});
