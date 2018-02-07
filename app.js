function getShit() {
  fetch("http://barkwire-api.herokuapp.com/dogs")
    .then(res => res.json())
    .then(sortDog)
};

getShit();

function sortDog(res) {
  res.dogs.map(buildElements);
};

function buildElements(dog) {
  const cage = document.querySelector('#dog-cage');
  cage.innerHTML +=
  `<li>
    <h2>${dog.name}</h2>
    <img src="${dog.imageUrl}"</img>
    <small>${dog.description}</small>
  </li>`;
};
