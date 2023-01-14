/*var ou let para declarar variáveis*/
// let idade = 5;
// let nome = 'joão';
// console.log(idade);
// console.log(nome);
// console.log('idade');
// let nomes,idades,alturas;

///////////////////////////////////////////////////////////////////////////






/*constantes são escritas como cons*/
// const alimentos = 'arroz,feijão,ovo';
/*não pode alterar mais*/

///////////////////////////////////////////////////////////////////////////








/**tipos de variáveis no javascript*/

// let nome = 'rafael'; //string
// let idade = 25; //number
// let aprovamento = true; //boolean
// let sobrenome = undefined; //Undefined  ( é um tipo de variável indefinida, ou seja,
//                            //que a variável existe, mas não possui nada dentro dela)
// let CorDeCarro = null; //null


///////////////////////////////////////////////////////////////////////////







/**tipagem dinâmica*/

// pode alterar o tipo de uma variável a qualquer momento

// let nome ='joão'
// console.log(nome);
// console.log(typeof(nome));
// nome = 5
// console.log(nome);
// console.log(typeof(nome));


///////////////////////////////////////////////////////////////////////////







/**Objetos */


// let nome = 'rafael';
// let idade = 25;
// let aprovamento = true;
// let sobrenome = undefined;

// let pessoa = {
//     nome:'rafael',
//     idade: 25,
//     aprovamento:true,
//     sobrenome: undefined
// };

// console.log(pessoa);

///////////////////////////////////////////////////////////////////////////









/** arrays */

// let familia = [26,50,17,45];
// console.log('tamanho: ' + familia.length);
// console.log('todos elementos são: ' + familia);
// console.log('primeiro elemento: '+ familia[0]);



///////////////////////////////////////////////////////////////////////////






/** functions */


// let corSite = 'azul';

// function resetaCor(){
// corSite = null;
// };


// function trocacor(cor,tonalidade){
//     corSite = cor +' '+ tonalidade;
// };


// console.log(corSite);
// resetaCor();

// console.log(corSite);

// trocacor('vermelho','claro');
// console.log(corSite);








///////////////////////////////////////////////////////////////////////////


/**Tipos de funções*/

/*
        1°realza uma tarefa não não devolve nada
        2° pega um valor e devolve alguma coisa
*/


///////////////////////////////////////////////////////////////////////////

/**Operadores */

/*
        Operadores aritiméticos (+,-,*,/,**)
        Operadores de Atribuição(+=,-=,=,===,==)
        Operadores lógicos(&,&&,|,||,!,)
        Operadores de comparação()
        Operadores Bitwise()
*/


///////////////////////////////////////////////////////////////////////////

/**Operadores de Atribuição->Operadores términais*/

//é básicamete um if, mas muito mais sucinto


// let tipo;

// function atribuir(pontos){
//     tipo = pontos > 100 ?'premium' : 'comum';
//     return tipo;
// };

// atribuir(50);
// console.log (tipo);

// atribuir(102);
// console.log (tipo);


///////////////////////////////////////////////////////////////////////////


/**comparações não booleanas */


//o que é considerado 'false' caso compare em uma operação booleanda:
// falsy
// undefined
// null
// 0
// false
// ''
// Nan - not a number



// nesse caso estou mostrando que caso vc compare dois valores não booleanos,
//que são considerados 'verdadeiros' ele irá pegar apenas o primeiro valor:

// let corPersonalizada = 'vermelhor';
// let corpadrao = 'azul';
// let corperfil = corPersonalizada || corpadrao;
// console.log(corperfil);


///////////////////////////////////////////////////////////////////////////

/**exercicios:*/


//trocar valores de duas variáveis:

//resultado:
// let a = 'vermelho';
// let b = 'azul';
// let c;
// console.log(a);
// console.log(b);
// c=a;
// a=b;
// b=c;
// console.log(a);
// console.log(b);



///////////////////////////////////////////////////////////////////////////

/** if... else */

// if (condicao){

// }
// else if (outracondicao){

// }
// else{

// }

///////////////////////////////////////////////////////////////////////////

/**switch */


// switch (permissao){
//     case 'comum':
//     console.log('usuario comum');
//     break;

//     case 'gerente':
//     console.log('usuario gerente');
//     break;

//     case 'diretor':
//     console.log('usuario diretor');
//     break;

//     default:
//     console.log('Usuario não reconhecido!');
// }

///////////////////////////////////////////////////////////////////////////

/**laço de repetição */

//for

// for(let i = 0; i < 5;i++) {
//     console.log('arroz com ovo cinco vezes ' + i);
// }


///////////////////////////////////////////////////////////////////////////


//while

// let i = 100
// while (i >= 1) {
//     if (i % 2 == 0){
//         console.log(i);
//     }
//     i--;
// }

///////////////////////////////////////////////////////////////////////////


//Do ... while
//o Do ... while executa pelo menos uma vez.

// let i = 0;
// do{
//     console.log('digitando!', i);
//     i++;
// } while(i < 10)



///////////////////////////////////////////////////////////////////////////

//For in


//forma errada:

// const pessoa = {
//     nome: 'Jhonatan',
//     idade: 25,
//     sexo: 'masculino'
// };

// for(let chave in pessoa) {
//     console.log(chave,pessoa.nome);
// }


//forma certa:

// const cores = ['vermelho','azul','verde','amarelo'];

// for(let indice in cores) {
//     console.log(indice,cores[indice]);
// }

///////////////////////////////////////////////////////////////////////////


//for of

// const cores = ['vermelho','azul','verde','amarelo'];

// for (let cor of cores){
//     console.log(cor);
// }


///////////////////////////////////////////////////////////////////////////

//exercicio:

//Escreva uma função que usa 2 números e retorna o maior entre eles.

//resultado:

// function compara2(valor1,valor2){
//     if (valor1 > valor2){
//     return valor1;}
//     else {
//     return valor2;}
// }
// let i = compara2(54,102);
// console.log(i);


///////////////////////////////////////////////////////////////////////////
//exercicio:

// faça um projeto que faça as seguintes catalogações:

//Divisivel por 3 -> Fizz
//Divisivel por 5 -> Buzz
//Divisivel por 3 e 5 -> FizzBuzz
//não divisivel por 3 e 5 -> entrada 
//não é um número -> 'não é um número'

//resultado:


// function FizzBuzz(condicao){



//     if (condicao % 3 == 0 && condicao % 5 != 0){
//         return 'Fizz';
//     }

//     else if(condicao % 3 != 0 && condicao % 5 == 0){
//         return 'Buzz';
//     }
    
//     else if(condicao % 3 == 0 && condicao % 5 == 0){
//         return 'FizzBuzz';
//     }
    
//     else if(condicao % 3 != 0 && condicao % 5 != 0){
//         return condicao;
//     }
    
//     else if(typeof condicao  != 'number'){
//         return 'não é um número!'; 
//     }

// }

// let saida = FizzBuzz(57);
// console.log(saida);


///////////////////////////////////////////////////////////////////////////
//exercicio:

// faça um projeto que faça as seguintes catalogações:

//velocidade máxima de até 70km
//a cada 5km a mais que o limite de velocidade ganha 1 ponto
//math.floor
//caso mais que 12 pontos a carteira é suspença


//resultado:

// function verificaVelocidade(velocidade){
//     if(velocidade<=70){
//         return 'sem multa'
//     }
//     else{
//         let pontos =Math.floor((velocidade-70)/5)
//         if (pontos >= 12){
//             return 'carteira de motorista revogada'
//         }
//         else if(pontos <12){
//             return 'você ganhou ' + pontos + ' pontos na carteira de motor';

//         }
//         }  
//     }

// console.log(verificaVelocidade(180))



///////////////////////////////////////////////////////////////////////////

//exercicio:

// faça um projeto que faça as seguintes catalogações:

//o programa deve saber diferenciar impares de pares.


//resultado:


// function parImpar(num){
//     if (num % 2 == 0){
//         return num + ' é par'
//     }
//     else if (num % 2 != 0){
//         return num + ' é impar'
//     }
// }

// console.log(parImpar(2))




///////////////////////////////////////////////////////////////////////////

//exercicio:

// faça um projeto que faça as seguintes catalogações:

//Exiba as propriedades de um objeto.


//resultado:

// function exibirpropriedades(obj){
//         for(prop in obj){
//                 if(typeof prop === 'string'){
//                         console.log(prop,obj[prop]);
//         }


// }
// }

// const filme = {
//         titulo: 'vingadores',
//         ano:2018,
//         diretor:'Robin',
//         personagens:'Thor,Homem de ferro,capitão américa,Hulk'
// }


// exibirpropriedades(filme);

///////////////////////////////////////////////////////////////////////////

//exercicio:

// faça um projeto que faça as seguintes catalogações:

//some todos os numeros multiplos de 3 e todos os numeros multiplos de 
//5 de um determinado intervalode valores


//resultado:


// function somar (limite){
//         let cont,aux;
//         cont =0;        
//         for (aux = limite;aux >= 0;aux--){
//                 if (aux%3 === 0){
//                         cont += aux;
//                 }
                
//                 if (aux%5 === 0){
//                         cont += aux;
//                 }

//                 if (aux%5 === 0 && aux%3 === 0 ){
//                         cont -= aux;
//                 }

//         }
//         console.log(cont);

// }

// console.log(somar(10))


///////////////////////////////////////////////////////////////////////////

//exercicio:
/**
faça um algoritmo que peque 3 números e tire a media aritmedica deles e depois 
identifique um intevalo de números para ele e determine uma letra para esse
intervalo, exemplo:

0-59 : F
60-69: D
70-79: C
80-89: D
90-100: A
 */



// function mediaDoAluno(num1,num2,num3) {
//         let media = (num1 + num2 + num3)/3;

//         if (media >= 0 && media <= 59){
//                 console.log('F')
//         }

//         if ((media >= 60 && media <= 69) || media >= 80 && media <= 89 ){
//                 console.log('D')
//         }
        
//         if (media >= 70 && media <= 79){
//                 console.log('C')
//         }

//         if (media >= 90 && media <= 100){
//                 console.log('A')
//         }

// }

///////////////////////////////////////////////////////////////////////////

//exercicio:
/*
criar um algoritmo que leia um numero e imprima o a valor do numero em 
asteristico e em linhas com asperisticos.
*/


// function contast(ast) {
//         let padrao = '';
//         for (let i = 0; i < ast; i++) {
//                 padrao += '*' 
//                 console.log(padrao)
//         }

// }
// contast(2)

///////////////////////////////////////////////////////////////////////////

//exercicio:
/*
Criar uma função para mostrar os números primos*/



// function exibirNumerosPrimos(num){
//         let cont = 0;

//         for(j = 0;j <= num;j++){

//                 for(i = 0 ;i <= j ;i++){
//                         if(j%i === 0){
//                                 cont += 1;
//                         }
//                 }
//                 if (cont<=2){
//                         console.log(j);
//                 }cont = 0;

//         }

// }
// exibirNumerosPrimos(11 );






///////////////////////////////////////////////////////////////////////////




/** objetos  com JS*/

///////////////////////////////////////////////////////////////////////////

/**Factory Functions */


// function criar_celular(marcaCelular,tamanhoTela,capacidadeBateria){
//         return{
//                 marcaCelular,
//                 tamanhoTela,
//                 capacidadeBateria,
//                 ligar(){
//                         console.log('fazendo_ligação')
//                 }
//         }
// }

// let celulares = criar_celular('Samsung',17.4,'4000mA/h')
// console.log(celulares) 

///////////////////////////////////////////////////////////////////////////


/**constructor Functions*/

// function celular(marcaCelular,tamanhoTela,capacidadeBateria){
//         this.marcaCelular=marcaCelular,
//         this.tamanhoTela=tamanhoTela,
//         this.capacidadeBateria=capacidadeBateria,
//         this.ligar = function(){
//                 console.log('fazendo_ligação');
//         }

// }


// let celulares = new celular('Samsung',17.4,'4000mA/h')
// console.log(celulares);

///////////////////////////////////////////////////////////////////////////


/**Dinamiticidade de objetos */


// const mouse = {
//         cor:'red',
//         marca:'dazz'
// }

// mouse.velocidade =  5000;
// mouse.trocaDPI = function() {
//          return console.log('mudando DPI');
// }

// delete mouse.velocidade;
// delete mouse.trocaDPI;
// console.log(mouse);

///////////////////////////////////////////////////////////////////////////


/**clonar objetos */

// function celular(marcaCelular,tamanhoTela,capacidadeBateria){
//         this.marcaCelular=marcaCelular,
//         this.tamanhoTela=tamanhoTela,
//         this.capacidadeBateria=capacidadeBateria,
//         this.ligar = function(){
//                 console.log('fazendo_ligação');
//         }

// }


// let celulares = new celular('Samsung',17.4,'4000mA/h')



//                 //efetivamente clonando o objeto
// const novoObjeto = Object.assign({bateria:5000},celulares);
// console.log(novoObjeto);
//                 //ou
// const objeto2 = {...celulares}
// console.log(objeto2);


///////////////////////////////////////////////////////////////////////////


/**math */

//chama um número aleaório
//console.log (Math.random())

// //retorna o maior numero 
// Math.max = (3,6,9,10)

// //retorna o menor numero
// Math.min = (3,6,9,10)


///////////////////////////////////////////////////////////////////////////



/**String */

// //tipo primitivo
// let mensagem = 'minha querida mensagem';
// //tipo objeto
// let outramensagem = new String ('bom dia');

// ////funções

// // verifica se existe a palavra
// mensagem.includes('primeira')

// //verifica se começa com essa palavra
// mensagem.startsWith('minha')

// //verifica se termina com essa palavra
// mensagem.startsWith('minha')

// //verifica o tamanho da mensagem
// mensagem.length

// //mostra a possição do index
// mensagem.indexOf('primeira')

// //troca alguns caracteres por outros caracteres
// mensagem.replace('minha', 'sua')

// //tira os excedentes de espaços
// mensagem.trim()

// //divide as palavras em arrays
// mensagem.split(' ');




///////////////////////////////////////////////////////////////////////////


/**template literal*/

// let nome = 'José'

// const mensagem = 
// `
// Olá ${nome}

// Parabéns!!!

// gostaria de dizer que você é nosso 1.000.000 cliente 
// por conta disso ficamos felizes em informa-lo que você poderá 
// concorrer a uma casa/moto ou carro hoje a noite, basta enviar 10 reais a
// ao conta: 00001-00023-0157 e aguardar que mandaremos o premio à sua casa quando 
// você vencer o sorteio 

// atenciosamente Ana Paula Souza
// `;

// console.log(mensagem)



///////////////////////////////////////////////////////////////////////////

//Date

// const data1 = new Date();
// const date2 = new Date('march 06 2019 09:30'); 
// const date3 = new Date(2019,02,06,9,30);



//altera o ano
//date3.setFullYear(2030)


///////////////////////////////////////////////////////////////////////////

//exercicio

//Criar um objeto endereço que contem:
//rua
//cidade
//cep
//exibirendereço()



// let Endereco={
//         rua:'Ulizzas Guimarães',
//         Cidade:'Francisco Morato',
//         CEP: 05998000
// }

// let Endereco2={
//         rua:'Jardim Rosas',
//         Cidade:'Franco da Rocha',
//         CEP: 07998403
// }

// let Endereco3= Endereco;

// function exibirendereco(end){
//         for(chave in end)
//         console.log(chave, end[chave]);
// }

// function saoIguais(end1, end2){
//         return end1.Cidade === end2.Cidade      &&
//                 end1.CEP === end2.CEP           &&
//                 end1.rua === end2.rua;
// }

// function temEnderecDeMemoriaIgual(end1, end2){
//         return end1 ===  end2;
// }


// console.log(temEnderecDeMemoriaIgual(Endereco,Endereco3))
// console.log(temEnderecDeMemoriaIgual(Endereco,Endereco2))

// console.log(saoIguais(Endereco,Endereco3))
// console.log(saoIguais(Endereco,Endereco2))


///////////////////////////////////////////////////////////////////////////

/**Exercicio
 * 
 * fazer um email que contenha: titulo, mensagem,autor,numero de visualizações,comentário
 * do autor, e uma variável que demonstre que está ativo ou não .
 * 
 */

// positivo = true;

// if (positivo === true){        
//         ativo = 'Essa promoção ainda está ativa, corra garanta sua oportunidade também!';
// }else{
//         ativo = 'infelizmente essa oferta não está mais valida, mas não fique triste teremos muitas outras oportunidade para você!';        
// }


// let titulo ='LIQUIDAÇÃO DE NATAL';
// let mensagemDoAutor = 'sempre pensando em você';
// let visualizações =  123456789;
// let mensagem = `Venha conferir a liquidação das lojas cem, temos de tudo para você,
//         casa,cama e roupa venha conferir nossas ofertas.

//         Só aqui tem TV de 24 polegadas com óculos 3D por 799,90; tapete de carro uno Fiat
//         mile por apenas 13,90, cama de casal por apenas 159,99. venha agora conferir 
//         esses presos impérdiveis.
// ` 







// let email = `
//         ${titulo}

//         ${mensagem}        
//         mas venha rápido pois muitas pessoas já estão chegando, veja quantas pessoas 
//         já chegaram, ${visualizações}

        
//         Casas Cem,${mensagemDoAutor}
        
//         ${ativo}
// `


// console.log(email)



///////////////////////////////////////////////////////////////////////////


//trabalhando com array
let numeros = [1,2,3,4,5,6,7,8,9,10];

//adicionando elementos a um array
        
        // //inicio
        // numeros.unshift(0)
        // console.log(numeros)
        // //meio 
        // numeros.splice(1,0,'a')
        // console.log(numeros)
        // //final
        // numeros.push(5)
        // console.log(numeros)
        
//procurar elementos no array
        // //procura um elemento no array
        // console.log(numeros.indexOf(2))
        // console.log(numeros)

        // //procura a **última** ocorrencia de um elemento
        // console.log(numeros.lastIndexOf(2))
        // console.log(numeros)

        // //procura se existe e retorna um booleano
        // numeros.includes(2)
        // console.log(numeros.includes(2))

                //procurar em um array dentro de uma referencia
                
                //ele procura e retorna o primeiro elemento que satisfaz a contição 
                //exigida, nesse caso a referencia nome no objeto marcas ser igual a 
                //'Apple'
                //P.S. já da para ver que esse código é abusado, só aceita aceita a marca Apple. kkkkk

                // let marcas = [
                //         {id:1, nome:'Samsung'},
                //         {id:2, nome:'Apple'},
                // ];

                // const marca = marcas.find(function(elemento){
                //         return elemento.nome == 'Apple'
                // })

                // console.log(marca);


        //remover um elemento do array

        //final
        // let ultimo= numeros.pop();
        // console.log(ultimo);
        // console.log(numeros);
        // //começo
        // let primeiro = numeros.shift();
        // console.log(primeiro);
        // console.log(numeros);


        // //meio
        // let meio = numeros.splice(3,1);
        // console.log(meio);
        // console.log(numeros);


        //Esvaziando o Arrays

        //solução 1 
        //atribuir nada ao array, exemplo: numeros = [].
        








        //solução2
        //zerar todos os array e todas as referências a ele.
        // console.log(numeros);
        // let arroz = numeros;
        // console.log(arroz); 
        
        // numeros.length = 0;

        // console.log(numeros);
        // console.log(arroz);
        





        //solução3      
        //também zera todos os array e todas as referências a ele.

        // numeros.splice(0,numeros.length);
        // console.log(numeros);
        // console.log(arroz);
        




//arrow functions

        // let marcas = [
        //         {id:1, nome:'Samsung'},
        //         {id:2, nome:'Apple'},
        // ];

        // const marca = marcas.find((elemento) => elemento.nome === 'Apple');

        // console.log(marca);





//concatenação de arrays 

// let primeiro = [11,22,23];
// let segundo = [46,53,64];

// //combinação de arrays
// let combinacao_entre_primeiro_segundo = primeiro.concat(segundo);
// console.log(combinacao_entre_primeiro_segundo);

// //divisão de arrays

// cortado = combinacao_entre_primeiro_segundo.slice(0,4)
// console.log(cortado);



        //operador spread

        // let primeiro = [11,22,23];
        // let segundo = [46,53,64];

        // let combinacao = [...primeiro, 'a', ...segundo,'#'];
        // console.log(combinacao);

        // //clonar array
        // let clonado = [...combinacao]
        // console.log(clonado);



//arrays e forEach

//ele percorre o array todo, podendo trazer o elementos e o indice dos arrays
//numeros.forEach((numeros,indice) => console.log(numeros,indice));


//combinação de arrays

//combinar o array
// let  combinacao = numeros.join('.');
// console.log(combinacao);

// //criar array através de palavras
// let frase = 'olha a pamonha, pamonha caseira, pamonha das feiras de Francisco Moratoe e caieiras';

// let resultado = frase.split( ' ');
// console.log(resultado);


// let resulta = frase.split( ',');
// console.log(resulta);



//input - entra de dados com prompt 

//cor_favorita = prompt('olá, qual é a sua cor favorita?')




























































































