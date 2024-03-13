document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const app = document.getElementById('app');

  const createOl = (name) => {
    const ol = document.createElement('ol');
    const li = document.createElement('li');

    ol.classList.add('m-3', 'p-3');
    li.classList.add('p-3');
    li.textContent = Object.getPrototypeOf(window[name])
    console.log(Object.getPrototypeOf(window[name]));

    ol.append(li);
    return ol;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    app.lastChild.remove();

    // console.log(Object.getPrototypeOf(e.target[0].value));
    app.append(createOl(e.target[0].value));
  });
});
