const pets = [
  {
    name: 'kylo', species: 'dog', human: 'kari', mammal: true
  },
  {
    name: 'gecky', species: 'lizard', human: 'dan', mammal: false
  },
  {
    name: 'hedwig', species: 'owl', human: 'harry', mammal: false
  },
  {
    name: 'crookshanks', species: 'cat', human: 'hermione', mammal: true
  },
  {
    name: 'scabbers', species: 'rat', human: 'ron', mammal: true
  },
];

console.log("Running our javascript file");

const buildHeaders = () => {
  let row = '<tr>';
  Object.keys(pets[0]).forEach((key) => {
    row += '<th>' + key + '</th>';
  });
  row += '</tr>';
  $('#pet-table thead').html(row);
};

const buildBody = () => {
  console.log('About to build table body');
  pets.forEach((pet) => {
    let row = '<tr>';
    for (const key in pet) {
      row += '<td>' + pet[key] + '</td>';
    }
    row += '</tr>';
    console.log(row);
    $('#pet-table tbody').append(row);
  });
};

$(document).ready(() => {
  buildHeaders();
  buildBody();
});
