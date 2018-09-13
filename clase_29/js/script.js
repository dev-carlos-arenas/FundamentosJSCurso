const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain : true };

const revisaPersonajes = (index, callback) => {
    let completeUrl = `${API_URL}${PEOPLE_URL.replace(':id', index)}`;

    $.get(completeUrl, opts, function (character) {
        console.log(`Hola me llamo ${character.name}`);

        if (callback){
            callback();
        }
    }
    );
};

// Call back hell, funciona para llamar en orden los request

revisaPersonajes(1, function () {
    revisaPersonajes(2, function(){
        revisaPersonajes(3, function(){
            revisaPersonajes(4, function(){
                revisaPersonajes(5, function(){
                    revisaPersonajes(6, function(){
                        revisaPersonajes(7);
                    });
                });
            });
        });
    });
});

