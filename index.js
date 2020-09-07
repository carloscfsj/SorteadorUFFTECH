//SORTEADOR NUMÉRICO ALGORTIMO


function sorteador(){
    var limiteInferior = window.document.getElementById('limiteInferior');
    var limiteSuperior = window.document.getElementById('limiteSuperior');
    var quantidade = window.document.getElementById('quantidade');
    var resultado = window.document.getElementById('resultado');

    console.log(limiteInferior, limiteSuperior, quantidade, resultado);

    var numquantidade = Number(quantidade.value);
    var numlimInferior = Number(limiteInferior.value);
    var numSuperior = Number(limiteSuperior.value);

    var optsemrepeticao = window.document.getElementById('sem-repeticao').checked;
    var optcomrepeticao = window.document.getElementById('com-repeticao').checked;

    resultado.innerHTML = '';

    if (numlimInferior == numSuperior || numSuperior < numlimInferior || numlimInferior< 0 || numSuperior<0
        || limiteSuperior.value.length==0 || limiteInferior.value.length == 0 || quantidade.value.length==0 ||
        numquantidade <= 0 || (numSuperior - numlimInferior + 1) < numquantidade||
        optcomrepeticao == false && optsemrepeticao==false ){
        window.alert('Preencha todos os campos e selecione uma das opções, com ou sem repetição!');
    }
    else{
        var sorteado = [];
        console.log(sorteado);
        var sorteadoOrdenado = [];
        for(var i = 1 ; i <= numquantidade ; i++ ){
            if( optsemrepeticao == true){
                var x = Math.floor(Math.random() * (numSuperior - numlimInferior + 1 ) + numlimInferior);
                while(sorteado.indexOf(x) >= 0 ){
                x=Math.floor(Math.random() * (numSuperior - numlimInferior + 1 ) + numlimInferior);
                }
                sorteado.push(x);
            }
            else if(optcomrepeticao==true){
                var x = Math.floor(Math.random() * (numSuperior - numlimInferior + 1 ) + numlimInferior);
                sorteado.push(x);
            }
        }

        sorteadoOrdenado = sorteado.sort(sortfunction);

        for(var i = 1 ; i <= numquantidade ;i++ ){
            if(i==1){
                resultado.innerHTML = `${sorteadoOrdenado[i-1]}`;
            }
            else{
                resultado.innerHTML += `-${sorteadoOrdenado[i-1]}`;
            }
        }    
        console.log(sorteadoOrdenado)
    } 
}

//EMBARALHADOR ALGORITMO

// função que utiliza a tecla enter para enviar dados, para o campo inputname, que contem os nomes, usando
// o id = btn, que invoca a função adicionarnome().

// var index = variavel vazia;
// var nomes = será o array que irá armazenar os nomes;
// var y = array que sera utilizada para pegar elementos do html;

var index = 0;
var nomes = [];
var y = [];
var showname = [];
var result = [];

// função utilizada para adicionar nomes sempre que o usuario apertar, adicionar nomes ou enter.
function adicionarnome() {
    // var x, armazena dados do campo de nomes,
    var x = document.getElementById("inputname").value;
    // a função if, previne o usuario enviar dados com campo em branco.
    if (x.length == 0)
    {
        return;
    // ativa a função adicionar nomes no array
    } else {    
        // var x armazena o valor do campo, ex: nome;
        var x = document.getElementById("inputname").value;
        var showname = x;
        // array nomes[index], armazena o correspondente nome no seu index correspondente.
        nomes[index] = x;
        // esse index sera utilizado como contador para ir armazenando diferentes nomes em 
        // diferentes index.
        index = index + 1;
        // var y, pega dados do html
        var y = document.getElementById("resultadoalterado");
        // altera dados do html, adicionando o nome seguindo de uma quebra de linhas
        //y.innerHTML = nomes.join("&#13;&#10;");
        //document.getElementById('resultadoalterado').innerHTML = nomes;
        var ul = document.getElementById("resultadoalterado");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(showname));
        ul.appendChild(li)
        document.getElementById('inputname').value='';
        return nomes;
    }
}

function sortear(array) {
    // pega o indice do array que armazena os nomes.

    var index = array.length, // pega o indice do array;
    temporaryValue, // variavel vazia;
    randomIndex; // variavel vazia.

    // enquanto tiver elementos para sortear...
    while (0 !== index) {

    // pega um elemento restante...
    randomIndex = Math.floor(Math.random() * index);
    index -= 1;
    // currentIndex = currentIndex - 1.

    // e faz a troca com o elemento temporario.
    temporaryValue = array[index];
    array[index] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
    //console.log(array);
    var result = array;
    return array;
}

// função sortclick, quando ativada, invoca a função sortear e que embaralha os nomes,
// e exibe no html o resultado dos nomes sorteados.
function sortclick() {
    var error = "Favor inserir no mínimo 2 nomes.";
    var arrayDeNomesSorteados = sortear(nomes);

    if(arrayDeNomesSorteados.length == 0){
        var z = document.getElementById("ModalResposta");
        z.innerHTML = error;
    }else{
        var z = document.getElementById("ModalResposta");
        z.innerHTML = arrayDeNomesSorteados.join(" - ");
    }
}

// função clearname, limpa o conteudo do array = nomes, e retorna o index para 0.
function clearname() {
    nomes = [];
    index = 0;
} 


//SORTEADOR DE NOMES ALGORTIMO



//AMIGO OCULTO ALGORITMO

var v=0;

function adicionarAmigoOculto(){
    v++;
    var participantes=window.document.getElementById('participantes');
    var inputnome= window.document.createElement('input');
    var inputemail=window.document.createElement('input');
    
    inputnome.setAttribute('placeholder',`${v}° nome` );
    inputemail.setAttribute('placeholder',`${v}° email` );

    inputnome.setAttribute('id',`${v}nome` );
    inputemail.setAttribute('id',`${v}email` );
    
    inputnome.setAttribute('name','nome');
    inputemail.setAttribute('name','email');

    inputnome.setAttribute('type','text');
    inputemail.setAttribute('type','email');
    
    participantes.innerHTML+=`<h2> ${v}° participante </h2>`;
    participantes.appendChild(inputnome);
    participantes.appendChild(inputemail);
}

function removerAmigoOculto(){
    var participantes=window.document.getElementById('participantes');
    v--;
    participantes.lastChild.remove();
    participantes.lastChild.remove();
    participantes.lastChild.remove() ;
    resultados.innerHTML='';
}

function sortearAmigoOculto(){
    var numparticipantes = v;
    var resultados = window.document.getElementById('resultados');
    resultados.innerHTML = '';
    resultados.innerHTML += `<h4>Resultado</h4>`;
    
    var nomes = [];
    var emails = [];
    var numeroSorteado = [];
    
    var check = 2;
    var q = 0;
    
    for(var i = 1 ; i <= numparticipantes ; i++){     
        nomes[i-1]=window.document.getElementById(`${i}nome`).value;
        emails[i-1]=window.document.getElementById(`${i}email`).value;
    }

    //aqui será feito o sorteio 
    while(check>1){
        q = 0;
        numeroSorteado = [];
        for(var i=1 ; i <= numparticipantes ; i++){

            var x = Math.floor(Math.random()*numparticipantes + 1);

                while(numeroSorteado.indexOf(x)!=-1 ){

                    x = Math.floor(Math.random()*numparticipantes +1);
                    
                }
                numeroSorteado.push(x);
            
                if(numeroSorteado[i-1] != i){
                    q++;
                }
                if(q == numparticipantes){
                    check=0;
                }
        } 
    }
    //-------------------------------------
    //Aqui vai os resultados
    for(var i = 0 ; i < numparticipantes ; i++){
        resultados.innerHTML += `<p>${i+1}°participante (${nomes[i]}) ==> sorteado(${nomes[numeroSorteado[i]-1]}) </p>`;
    }
    //----------------------------------
    
    // Aqui vai o envio dos emails:
    //${nomes[numeroSorteado[i]-1]}
    //${emails[i]}
    for(var i = 0 ; i < numparticipantes ; i++){
        Email.send({        
            Host : "smtp.elasticemail.com",
            Username : "suporteufftechsorteador@gmail.com", // mudar aqui
            Password : "0B89CD982CE8F85020B1D70D1A5E4F35D8B3", // mudar aqui
            To : `${emails[i]}`,
            From : "suporteufftechsorteador@gmail.com", // mudar aqui
            Subject : `${nomes[i]} você recebeu um email do amigo-oculto`,
            Body : `Seu amigo oculto é: ${nomes[numeroSorteado[i]-1]}`
        }).then(
        message => alert(message)
        );
    }
}
