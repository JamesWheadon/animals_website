// SETUP
const catButton = document.getElementById('cats-button');
const dogButton = document.getElementById('dogs-button');
const unicornButton = document.getElementById('unicorns-button');

const catList = document.getElementById('cats-list');
const dogList = document.getElementById('dogs-list');
const unicornList = document.getElementById('unicorns-list');

catButton.addEventListener('click', getAllCats);
dogButton.addEventListener('click', getAllDogs);
unicornButton.addEventListener('click', getAllUnicorns);

// GET CATS
function getAllCats() {
  console.log('Test');
  fetch('http://localhost:3000/cats')
    .then((r) => r.json())
    .then(appendCats)
    .catch(console.warn);
}

function appendCats(data) {
  catList.innerHTML = '';
  console.log(data);
  data.animals.forEach(appendCat);
}

function appendCat(cat) {
  const newLi = document.createElement('LI');
  newLi.textContent = `NAME: ${cat.name} || Age: ${cat.age}`;
  catList.append(newLi);
}

// GET DOGS
function getAllDogs() {
  fetch('http://localhost:3000/dogs')
    .then((r) => r.json())
    .then(appendDogs)
    .catch(console.warn);
}

function appendDogs(data) {
  console.log(data);
  dogList.innerHTML = '';
  data.animals.forEach(appendDog);
}

function appendDog(dog) {
  const newLi = document.createElement('LI');
  newLi.textContent = `NAME: ${dog.name} || Age: ${dog.age}`;
  dogList.append(newLi);
}

// GET UNICORNS
function getAllUnicorns() {
  fetch('http://localhost:3000/unicorns')
    .then((r) => r.json())
    .then(appendUnicorns)
    .catch(console.warn);
}

function appendUnicorns(data) {
  console.log(data);
  unicornList.innerHTML = '';
  data.animals.forEach(appendUnicorn);
}

function appendUnicorn(unicorn) {
  const newLi = document.createElement('LI');
  newLi.textContent = `NAME: ${unicorn.name} || Age: ${unicorn.age}`;
  unicornList.append(newLi);
}
