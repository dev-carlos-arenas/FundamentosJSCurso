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

async function obtenerPersonajes(){
    var ids = [1,2,3,4,5,6,7];
    var promesas = ids.map(id => revisaPersonajes(id));
   try{
       var personajes = await Promise.all(promesas);
       console.log(personajes);
   } catch (err){
        onErr(id);
   }

obtenerPersonajes();
}