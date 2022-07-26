

function time(value) {
    var progressBar = document.getElementById('progressbar')
    progressBar.style.width = `${value}%`;
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
        value -= 5;
        await delay(1);
        if(suspender_botones){
            break
        }
    };
}
const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n ')
    .map(v => v.split(delimiter));

function createArray(data,solicitud){
    let array = [];
    
    for (artista of data){
        if(solicitud==0){
            array.push(artista[solicitud].toUpperCase())
        }
        else{
        array.push(artista[solicitud])
        }
    }
    return array
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function sessionToGuess(artists,lyrics){
    sessionNumber = getRandomInt(18);
    lyricSession = lyrics[sessionNumber];
    document.getElementById("lyrics").innerHTML = lyricSession;
    answer(artists,sessionNumber);
    answerCorrect = getRandomInt(4)+1;
    document.getElementById(`answer${answerCorrect}`).innerHTML = artists[sessionNumber];

}
function answer(artists,sessionCorrect){
    DOR=true;
    i=1;
    answers= [];
    while (DOR){
        sessionNumberCicle = getRandomInt(18);
        if((sessionNumberCicle!=sessionCorrect)&&(!(answers.includes(sessionNumberCicle)))){
            document.getElementById(`answer${i}`).innerHTML = artists[sessionNumberCicle];
            answers.push(sessionNumberCicle);
            i++;
        }
        if (i==5){
            DOR=false;
        }
    }
}
function startGame(){

    sessionToGuess(artists,lyrics);
    startTimer();
    document.getElementById(`score`).innerHTML = `SCORE : ${score}`;
    
}
suspender_botones=false;
function validationAnswer(numberAnswer){
    if (suspender_botones) {
        return;
      }
      suspender_botones = true;
    if (numberAnswer==answerCorrect){
        console.log("Respuesta Correcta")
        var ans = document.getElementById(`cont-answer${numberAnswer}`);
        ans.classList.add("correct-answer")
        score++;
    }
    else{
        console.log("Respuesta Incorrecta")
        var ans = document.getElementById(`cont-answer${numberAnswer}`);
        ans.classList.add("wrong-answer")
        var ansCorrect = document.getElementById(`cont-answer${answerCorrect}`);
        ansCorrect.classList.add("correct-answer")
    }
    setTimeout(() => {
        
        reiniciar();
        suspender_botones = false;
      }, 2500);
    }
function reiniciar(){
    console.log("Hola vieja")  

    for(i=1;i<=4;i++){
        var ans = document.getElementById(`cont-answer${i}`);
        ans.classList.remove("wrong-answer")
        ans.classList.remove("correct-answer")
    }
    startGame();
}
CSV="QUEVEDO;Llegue al club con el combo, rapido, la vi lejos Se pintaba los  labios y la copa como espejo Se acercó poco a poco y yo queriendo que me baile ;51.5 \n VILLANO ANTILLANO;Un-un-una vampiresa, soy una sanguinaria Carmilla la de Styria, soy inmune a tus plegaria Yo soy la principal y tú la secundaria Yo soy la principal de esta secundaria;61.8 \n PAULO LONDRA;Siempre bendecido, aunque hablen mal de los mío'Y el periodista está inventando lío'Eso no me importa, yo sigo en lo mío La gente sabe cómo soy, por eso están conmigo;89.2 \n RESIDENTE;Hoy me cojo a la industria de la fama Hasta romperle los resorte' a la cama Cuando mi palabreo se derrama me los cojo sin pijamaVertical y horizontal, como en un crucigrama;114.5 \n TIAGO PZK;Va-va-vamo' a pegarno', como mis cancione' Porque si ese flow es droga, mami, yo soy Al Capone Muchas dicen que no siguen esas moda' que ella impone Pero to' lo que le queda bien, las nena' se lo pone;1244 \n MORAD;Solo digo cosas clara', nadie habla a la cara De la calle soy la para, de los tiempo' de la Mara Antes dudo que cantara, pero ahora cantaré (Ala) Tren-treinta kilos, nunca pararé;51.9 \n ANUEL AA;Porque así e' el caserío, así es mi caserío (caserío)La baby tiene un hijo Eso no e' na', yo se lo crío (se lo crío)Me dijo que e' lesbiana Pue' entonce' hacemo' un trío (hacemo' un trío);492 \n PTAZETA;Ey, y entonces se me sube encima ese piquete Pón-pónmela hasta arriba que va a mil como Bettel El pom-pom, hasta abajo vamo' a reventar el cassette Ey, si no hay perreo no se mete Quiere-quiere-quiere duro, la llevo pa' lo oscuro;77 \n MHD;Dans la capi' comme Messi (ouh, ah), Messi, Messi (Messi) Ne pas bouger de la té-ci, té-ci, té-ci (té-ci) 2, 3 millions ça fait plaisir, plaisir (woah), plaisir (plaisir, eh);23 \n Chucky73;Y yo tengo una wacha que es fina, que quiere coro en piscina La tengo mala por culpa de la medicina Tremendo culo, parecen dos gelatina' Y yo se lo toco como si fueran dos cantina';401 \n Nicky Jam;Ellos lo saben Que cuando me pongo pa' esto aquí no caben Y sin montar presión, los bajo de la nave Es muy fácil montar un número uno Cómo yo, ninguno;1353 \n Eladio Carrión;El dinero no duerme, so yo me desvelo De tonto, no tengo ni un solo pelo (no) Me quieren coger de pendejo, me alejo Yo les digo bye y nos vemo';1221 \n Snow Tha Product;Tengo whatever cuando quiero, lo que se antoje Quiero dinero pa' que los haters se enojen Soy de San José como Los Tigres del Norte Traigo tanta feria que la bolsa se me rompe;1804 \n L-Gante;Una reposera y una sombrilla Todo' los gato' bien en capilla Acá no compramo' con los rastrillo' Y de noche en el coche las soga' brillan;2738 \n YSY A;Dicen que hay que hacerla, que van a traerla, que no son barata-tas Y yo a vos ni te cobro, te lo hago de onda, te lo hago por nada-da Más caro es no poder tenerte acá en cuatro pata'-ta' Y hacerte puré de papa'-pa', no;688 \n NATHY PELUSO;Soy un desayuno continental (mmm) Tienen que escucharme con delantal Nene, tu novia se puso pegajosa Venime de frente, arreglamo' las cosa' Hago un delivery descomunal Ladro que ladro, no tengo bozal;322 \n ASAN;Sé que te rompí el corazón (yo) y ya es muy tarde Si estuvieras en mi cabeza lo entenderías to' Soy un gil, ya lo sé, de verdad te lastimé Pero esa es la verdad de porqué te dejé;333 \n KHEA;Yo me equivoqué, tú también te equivocaste A esta altura, tendría que poder olvidarte Tendría que poder tacharte para siempre Borrarte de mi mente, pero eres permanente;1017 \n";
sessionsArray = CSVToArray(CSV,";",false);
artists = createArray(sessionsArray,0);
lyrics = createArray(sessionsArray,1);
score=0;
startGame();









