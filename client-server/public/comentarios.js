//G1 - Variaveis
/**
 * <script src=""></script> -> script apontando para outra página
 * <script ></script> -> script incorporado
 */

//G2 - manipulando o DOM
/**
 *  tudo o que nos temos dentro de um documento nós chamamos de elementos.
 * o javascript pode criar elementos no documneto e manipulalos.
 * 
 * QUANDO VOCÊ ESTÁ USANDO O SEU NAVEGADOR É UMA WINDOW É UMA JANELA.
 * NOS PODEMOS COM WINDOW ACESSAR O HISTORICO FECHAR O NAVEGAR ABRIR UMA
 * NOVA JANELA EU CONSIGO DAR REFERESH NA TELA.
 * 
 * MAIS NA PARTE DO SITE NÓS CHAMAMOS DE DOCUMENTOS.
 * document um objeto javascript que por ele temos acesso a 
 * arvore do documento.
 * 
 * todo objeto tem propriedades e métodos.
 */
// G3 - Variaveis 
/**
 *  Variaveis são espaços na memoria  
 * que nelas são armazenados valores de forma temporaria.
 * 
 * var nome = document.querySelector("#exampleInputName");
//a variavel nome tem a referencia do input do nome do usuario
 
/**
 * nome.value = 'Cristiano';
// |    \=> estamos pegando o value e forçando ela ter um valor.
// |==> pegamos avriavel nome  

nome.style.color = 'blue'
// acessando a variavel nome e pegando o atributo style e mudo cor dele .

G4 - Variaveis e seletores

cuidados com variaveis ,
 1 - não use nome de comandos nativos do JS
 2 - não use numeros no começo
 3 - não use caracteres especias exceto o underline
 4 - usar o padrão cmaielCase
 
 document.querySelectorAll("#form-user-create [name"gender"]:checked")
   ||
   ===> aqui esta entrando dentro do formulario e procura 
   qualquer campo que tenha um atributo name com nome gender
   mais como queremos aquele que foi clickado então vou 
   pegar so que esta checked.


G5- for each

Sempre que formos digitar de mais você criar codigos que nós chmamos de abstrato,
quando voçê programar seus codigos tente não deixalos tão especificos , 
por que você precisar mudar alguma estrutura do seu site ou do seu projeto o 
ideal que seu codigo  ele têm que se adaptar o mais facil possivel em termos de manutenção.
é isso que nós chamos de abstração, é você não  programar de uma forma ingessada de mais 
é dessa forma  quer não devemos programar :

var name = document.querySelector("#exampleInputName");
/**   |       |        \=> estou selecionado um elemento da arvore.
 *    |      |==> acessa o documento html
 *    |
 *    ==> var Nome
 * 
      
 var gender = document.querySelectorAll("#form-user-create [name=gender]:checked")
 /*||
 ===> aqui esta entrando dentro do formulario e procura 
 qualquer campo que tenha um atributo name com nome gender
 mais como queremos aquele que foi clickado então vou 
 pegar so que esta checked.
 
 var birth = document.querySelector("#");
 /**  |       |        \=> estou selecionado um elemento da arvore.
  *    |      |==> acessa o documento html
  *    |
  *    ==> var aniversário
  * 
  
 
 var country = document.querySelector("#exampleInputCountry");
 /**   |       |        \=> estou selecionado um elemento da arvore.
  *    |      |==> acessa o documento html
  *    |
  *    ==> var PAÍS
  * 
   
 
 var  email = document.querySelector("#exampleInputEmail");
 /**   |       |        \=> estou selecionado um elemento da arvore.
  *    |      |==> acessa o documento html
  *    |
  *    ==> var email
  * 
  
 var password = document.querySelector("#exampleInputPassword");
 /**   |       |        \=> estou selecionado um elemento da arvore.
  *    |      |==> acessa o documento html
  *    |
  *    ==> var senha
  * 
  
 var photo = document.querySelector("#exampleInputFile");
 /**   |       |        \=> estou selecionado um elemento da arvore.
  *    |      |==> acessa o documento html
  *    |
  *    ==> var fotos
  * 
  
 
 var admin = document.querySelector("#exampleInputAdmin")


ela ta muito ingessada , não pode modificar os nomes , ta tudo ammarrado aquele layout
o ideal é que seu codigo seja autosuficiente , inteligente ao ponto de se adaptar.

então agente vai pegar esse processo que fizemos agora um pouco mais inteligente 
para isso nós vamos  selecionar aquele formulário  e vamos dizer assim você achou o formulario ,
achei entra dentro dele e pra cada campo que você encontrar faça uma rotina  de codigo 
então para cada campo é um comando que nós temos é um metodo chamado forech,
vou acessar o formulario e dizer assim , achou o formulario , achei , então esse formulario ponto forech
para cada  campo dentro dele para cada informação que você encontar dentro dele  se ele tiver cinco campos
ou se ele tiver cinquenta   o mesmo trecho de código vai ser o suficiente para percorrer essa informção ai
dentro .

 var fields =  document.querySelectorAll("#form-user-create [name]");
      |                        |             \-> aqui estou selecionando id do frmulario 
      |                        |                  mais eu quero encontar todos os meus campos , os que esse campos tém em comum o name ;
      |                        |                    traz para min todos os campos que tém name
      |                        |=>> aqui esta fazendo uma pesquisa 
      :                             de todos os campos .
      ==> 
         que significa campo .


     fields.forEach
             para cada campo que você encontra executa esse codigo aquie    
     (
         function(field,index)
         {
               console.log(field)
         }
     );   


     G6 -  If e Else 

     

var fields = document.querySelectorAll("#form-user-create [name]")

fields.forEach(
    function(field,index)
    {
        vamos fazer um if para cada campo que ele encontar 
        if( field.name == "gender")
        = -> é atribuição
        == -> comparção de valor 
        === -> comparção de valor e tipo de dado 
        primeiro eu preciso detectar é o gender 
        {
              
        }else
        {

        }
    }
);

 
G7 - Json 
 
Como podemos pegar essas informçãoes que vieram do formulario e mandar isso pra algum lugar 
é possivel por exemplo nós criamos um padrão de comunicação fazebdo com que um outro site 
utro aplicatico  até mesmo outra linguagem de programção  consiga consumir essa informção
agente cria um padrão de comunicação  outras linguagem e banco de dados eles podem entender 
e se eles entenderem eles podem consumir essa informação, o padrão mai9s conhecido é o javascript object notation


G8 - Eventos

O que é eventos no Js ?

Javascript ela é uma lingaugem reativa ela interage com as atividades do  usuario 
, e o usaurio pode interagir com a nossa aplicação seja ela um site ou um aplicativo 
web , ele pode interagir pelo formulario pelo teclado pelo mouse por tempo de navegação 
então o evento é exatamente uma ação que acontece na nossa aplicação que dispara a alguma 
reação, e essa reação pode ser uma função que reage a um evento como que  é que funciona
isso .
Nós customamos dizer que o javascript escuta muito bem , o js parece a vizinha que tem ai do
lado da sua casa .
basicamento o Js ele fica tento atudo que ta acontendo ná aplicação.
por exemplo você usou o mouse só passou em encima de alguma coisa. 
você poderia criar um evento .
o método 
addEventListener é o mesmo que prepara para ouvir melhor.


SPA - Single Page aplication Aplicção de pagina Unica.

G9 - Tarbalhando com funções 

O que é uma função ? 
 è um trecho de codigo que retorna alguma coisa normalmente uma  valor,
 normalmente na linguagens de programção Existem as funçãoe  e as subRotinas ,
 a diferença entre elas é que uma função semp´re retotna um valor e a subrotina
 é um tipo  de funçao que só executra um codigo e não tem retorno.
 no caso do javascript eu vou usar a palavra function para as dusa coisa .

 G10 - Programação Orientada a Objetos e Mvc

 Programção Orientada a Objeto ela trabalha com classes atributos metodos 
 e os demais recursos que a orientação a objetos  traz para nós o encapsulamento 
 e o controle ao acesso  a informação e o reuso a estrutura das classes e como tudo 
isso é pratico par nós . 

além de ajudar você a programar melhor trabalhar com seus códigos de forma umpouco mais abstrata
vamos dizer assim de uma forma que você possa reutilizar vários modulos. 
isso também ajuda para outros conseitos  como mvc 
ajuda na separação do visual do tartamentos das informações ao tratamento ao dado do seu negoçio.



UM OBJETO É UMA VARIAVEL QUE INSTANCIA  OU REPRESENTA UMA CLASSE.

G11 - Objetos Orientada a Objetos  - MVC  - Controller


var name = document.querySelector("#exampleInputName");
/**   |       |        \=> estou selecionado um elemento da arvore.
 *    |      |==> acessa o documento html
 *    |
 *    ==> var Nome
 * 
     
 var gender = document.querySelectorAll("#form-user-create [name=gender]:checked")
 /*||
 ===> aqui esta entrando dentro do formulario e procura 
 qualquer campo que tenha um atributo name com nome gender
 mais como queremos aquele que foi clickado então vou 
 pegar so que esta checked.
 
 var birth = document.querySelector("#birth");
 /**   |       |        \=> estou selecionado um elemento da arvore.
  *    |      |==> acessa o documento html
  *    |
  *    ==> var aniversário
  * 
  
 
 var country = document.querySelector("#exampleInputCountry");
 /**   |       |        \=> estou selecionado um elemento da arvore.
  *    |      |==> acessa o documento html
  *    |
  *    ==> var PAÍS
  * 
  
 
 var  email = document.querySelector("#exampleInputEmail");
 /**   |       |        \=> estou selecionado um elemento da arvore.
  *    |      |==> acessa o documento html
  *    |
  *    ==> var email
  * 
  
 var password = document.querySelector("#exampleInputPassword");
 /**   |       |        \=> estou selecionado um elemento da arvore.
  *    |      |==> acessa o documento html
  *    |
  *    ==> var senha
  * 
  
 var photo = document.querySelector("#exampleInputFile");
 /**   |       |        \=> estou selecionado um elemento da arvore.
  *    |      |==> acessa o documento html
  *    |
  *    ==> var fotos
  * var admin = document.querySelector("#exampleInputAdmin")
  * 
  *  ela ta muito ingessada , não pode modificar os nomes , ta tudo ammarrado aquele layout
  *  o ideal é que seu codigo seja autosuficiente , inteligente ao ponto de se adaptar.
  
 /***************************************************************************************************************

 
 
 
 var user = {}
 // o objeo user ele ta  no escopo global por isso ele te uma area de atuação maior
 
 
 var fields = document.querySelectorAll("#form-user-create [name]")
 // peguei todos os campos dentro do form com names , criei node list dessa pesquisa
 
 
 
 document.querySelectorAll("button").forEach(function(){
     this.addEventListener("click", function(){
 //  este.adicione uma escuta  para um evento , qual é o evento  click 
 // , quando clickarem a onde bom qaundo ckickarem no botão,
 // bom qual o botão , veja que no querySelectorAll agente pegou todos os botãoes 
 //  quando clickar em quanquer botão dispara esse evento.
         console.log("cickou")
     } )
 })
 
 
 function addLine(dataUser)
 {
     
       
      var tr = document.createElement("tr");
 
      tr.innerHTML =
      `
      <td>
                       <img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm">
                       </td>
                       <td>${dataUser.name}</td>
                       <td>${dataUser.email}</td>
                       <td>${dataUser.admin}</td>
                       <td>${dataUser.birth}</td>
                       <td>
                       <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                       <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
      </td>
      `
      document.getElementById("table-users").appendChild(tr)
 }
 
 document.getElementById("form-user-create").addEventListener("submit",function(event)
 {
     event.preventDefault()
            //para tudo que esse cara disparou .
            // ele vai para com comportamento padrão
           
 fields.forEach(
     // para cada campo que tiver faca     
         function(field,index)
         {
              if(field.name == "gender")
              // se o field que vier tiver o nome gender
              {
                  //faz o que ta aqui dentro
                 if (field.checked)
                 // se o field esta checkado
                 {
                   user[field.name] = field.value;
                   // aqui estamos acessando objeto user e colocando valores selecionados no formulario
                 }
                  
              }else
              //se não
              {
                  user[field.name] = field.value;
                  // aqui estamos acessando objeto user e colocando valores selecionados no formulario
              }
         }
     );
 
     var objectUser = new User(
         user.name,
         user.gender,
         user.birth,
         user.country,
         user.password,
         user.email,
         user.photo,
         user.admin
          );
 
 
          addLine(objectUser)
     
     
 }) 
 
 
 
 
 
 
 




















 
*/
