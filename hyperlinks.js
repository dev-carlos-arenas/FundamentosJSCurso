const nombreClase = [
    'Variables', 'Strings', 'Numbers', 'Funciones', 'Alcance Funciones',
    'Objetos', 'Desestructurar Objetos'
];
    document.write('<table><tr><td><ul>');
for(i = 0; i <= 32; i++){
    document.write(`<li><a href="/FundamentosJSCurso/clase_${i+1}/clase.html">Clase ${i+1} - ${nombreClase[i]}</a></li>`);
    if(parseInt((i+1)%10) === 0){
        document.write(`</ul></td><td><ul>`);
    }
}
document.write('</table>');