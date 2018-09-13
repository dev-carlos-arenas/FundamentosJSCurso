const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain : true };

const revisaPersonajes = (index, callback) => {
    let completeUrl = `${API_URL}${PEOPLE_URL.replace(':id', index)}`;

    // la opcion fail puede llamar a una funcion anonima para tomar accion en caso de que falle el callback
    // se puede separar la funcionalidad de jquery en los puntos y se puede crear un arrow function para siplificar el código
    $
        .get(completeUrl, opts, callback)
        .fail(() => console.log(`sucedió un error. No se pudo obtener el personaje ${index}.`));

    // métoodo original

    // $.get(completeUrl, opts, callback).fail(function(){
    //     console.log(`sucedió un error. No se pudo obtener el personaje ${index}.`);
    // });
};

// Call back hell, funciona para llamar en orden los request

revisaPersonajes(1, function (character) {
    console.log(`Hola me llamo ${character.name}`);

    revisaPersonajes(2, function (character) {
        console.log(`Hola me llamo ${character.name}`);

        revisaPersonajes(3, function (character) {
            console.log(`Hola me llamo ${character.name}`);

            revisaPersonajes(4, function (character) {
                console.log(`Hola me llamo ${character.name}`);

                revisaPersonajes(5, function (character) {
                    console.log(`Hola me llamo ${character.name}`);

                    revisaPersonajes(6, function (character) {
                        console.log(`Hola me llamo ${character.name}`);

                        revisaPersonajes(7, function (character) {
                            console.log(`Hola me llamo ${character.name}`);
                        });
                    });
                });
            });
        });
    });
});

