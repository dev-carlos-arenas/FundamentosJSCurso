const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain : true };

var numeroPersonaje = 1;

const revisaPersonajes = (index) => {
    return new Promise((resolve, reject) => {
        const completeUrl = `${API_URL}${PEOPLE_URL.replace(':id', index)}`;

        $.get(completeUrl, opts,
            function (data) {
                resolve(data);
            }
        )
        .fail(() => reject());
    });
};

function onErr(){
    console.log('Ocurrio un error al obtener los datos');
}

var ids = [1,2,3,4,5,6,7];

// var promesas = ids.map(function(id){
    // return revisarPersonajes(id);
// });

var promesas = ids.map(id => revisaPersonajes(id));

Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onErr);


// revisaPersonajes(1)
//     .then(personaje => {
//         console.log(`El personaje 1 es ${personaje.name}`);
//             return revisaPersonajes(2);
//     })
//     .then(personaje => {
//         console.log(`El personaje 2 es ${personaje.name}`);
//             // return revisaPersonajes(2);
//     })
//     .catch(onErr);



