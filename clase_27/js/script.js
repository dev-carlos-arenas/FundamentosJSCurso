const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain : true };

const revisaPersonajes = (index) => {
    let completeUrl = `${API_URL}${PEOPLE_URL.replace(':id', index)}`;

    $.get(completeUrl, opts,
        function (data, textStatus) {
            if(textStatus === 'success'){
                console.log(`Hola me llamo ${data.name}`);
            }
        }
    );

    // El $.get también se puede escribir así
    // const onResponse = (character, status) => {
        // if(status === 'success'){
            // console.log(`Hola me llamo ${character.name}`);
        // }
    // };
    // $.get(completeUrl, opts, onResponse);
};


