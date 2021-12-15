function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  const div = document.querySelector('#text');

  button.addEventListener('click', ()=> {
    if (div.hasAttribute('hidden')) {
      div.removeAttribute('hidden');
    } else {div.setAttribute('hidden', true);}
  });
}
