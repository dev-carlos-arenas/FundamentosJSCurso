const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain : true };

const onResponse = (character, status) => {
    console.log(`Hola me llamo ${character.name}`);
};

const revisaPersonajes = (index) => {
    let completeUrl = `${API_URL}${PEOPLE_URL.replace(':id', index)}`;

    $.get(completeUrl, opts, onResponse);
};

// No van a llegar en el órden que los pedimos

revisaPersonajes(1);
revisaPersonajes(2);
revisaPersonajes(3);