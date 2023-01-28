let date = new Date();

const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  let myItem = input.value;
  input.value = '';

  const li = document.createElement('li');
  const listText = document.createElement('span');
  const deleteButton = document.createElement('button');

  li.appendChild(listText);
  listText.textContent = myItem;
  li.appendChild(deleteButton);
  deleteButton.textContent = '❌';
  list.appendChild(li);

  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    input.focus();
  });
  
}
);