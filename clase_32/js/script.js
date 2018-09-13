const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain : true };

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

revisaPersonajes(1)
    .then(function(personaje){
        console.log(`El personaje 1 es ${personaje.name}`);
    })
    .catch(onErr);



