

function time(value) {
    var progressBar = document.getElementById('progressbar')
    progressBar.style.width = `${value}%`;
    console.log(value)
}
function delay(n) {
    return new Promise(function (resolve) {
        setTimeout(resolve, n * 1000);
    });
}
async function startTimer() {
    value = 100
    while (value >= 0) {
        time(value);
        value -= 10;
        await delay(1);
    };
}
function startLyrics(){

}
function readSessions(){
    leerArchivo();
    document.querySelector('#sessions')
      .addEventListener('change', leerArchivo, false)
}
function leerArchivo(texto, separador=';',omitirEncabezado=false) {
    if(typeof texto !== 'string'){
        throw TypeError('El argumento debe ser una cadena de caracteres')
    }
    texto.slice(omitirEncabezado ? texto.indexOf('\n')+1 : 0)
    .split('\n')
    .map(l => l.split(separador));
  }
try {
    console.log(leerCsv('id;nombre\n1001;Oliva\n1002;Julio'));
} catch (e) {
    console.log(`Error: ${e.message}`)
}
readSessions();
startLyrics();
startTimer();

