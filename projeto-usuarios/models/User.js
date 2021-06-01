class User 
{
    /**
     * Esse é um padrão diferente do que agente tem usado 
     * para o nome de  métodos assim por diante ,
     * Toda classe começa por letra maiscula  isso é uma conveção 
     * um detalhe importante é que voce notou a classe  abriu 
     * e fechou aspas  e aqui vai entrar muito fortemete aquela 
     * parte de escopo area de atuação.
     * 
     * Repare também que por enquanto a classe não tém nada 
     * então uma classe que só tem o nome dela não serve para nada .
     * o que importa na verdade não é bem a classe e sim que está dentro dela .
     * pensa na classe  como fosse uma pasta zipada se não tiver nada la dentro não faz 
     * sentindo ela esta zipada.
     * 
     * a primeirra coisa que você vai fazer é cria o método constructor quando voçê instanciar uma classe
     * a primeira coisa que vai chamar esse metodo onde passamos os parametros para trabalhar dentro da 
     * nossa classe.
     * 
     * Métodoss são açoes que seram executada. 
     * 
     * agora vamos gardar cada um desses campos que nós vamos receber do nosso contructor 
     * dentro do meu Objeto 
     * 
     * o método contructor é um metodo chamado automaticamente quando invocamos a classe.
     * 
     * o mais legal da orientação a objeto é que você consegue controlar o acesso á informação 
     * e como ela acontece .
     * 
     * 
     * 
     * 
     */

    constructor(name,gender, birth,country,email,password,photo,admin)
    {
             this._name                =                            name;
        //   este.atributo   esta sendo atribuido a       variavel name recebido com parametro do contructor.
             this._id ;
             this._gender = gender; 
             this._birth = birth;
             this._country = country;
             this._email = email;
             this._password = password;
             this._photo = photo;
             this._admin = admin;
             this._register = new Date();
    }

    get id()
    {
        return this._id;
    }

    get register ()
    {
        return this._register
    }

    get name()
    {
        return this._name
    }
    get gender()
    {
        return this._gender
    }

    get birth()
    {
        return this._birth
    }

    get country()
    {
        return this._country
    }

    get email()
    {
        return this._email
    }

    get password ()
    {
        return this._passaword
    }

    get photo()
    {
        return this._photo
    }

    get admin()
    {
        return this._admin
    }

    set photo(value)
    {
        this._photo = value
    }


    loadFromJSON(json)
    {
          for (let name in json)
          {
              switch(name) 
              {
                  case "_register":
                    this[name] = new Date(json[name])
                  break;
                  default:
                    this[name] =json[name]

              }
             
          }
    }

            
        static getUsersStorage()
        {
            let users = [];
            if(localStorage.getItem("users"))
            {
            users = JSON.parse(localStorage.getItem("users")) 
            }
            return users
        }


     getNewId()
     {
         let UsersId = parseInt(localStorage.getItem("UsersId"));
           
       if(!UsersId.id)  UsersId = 0;
       UsersId++;

       localStorage.setItem("UserId" , UsersId)
       return UsersId

     }

    save()// esse metodo ele vai saber como é que salva o nosso usuario no storage 
    {
                
           
            
            let users = User.getUsersStorage();

            if(this._id > 0 )
            {
               users.map(u=>{
                     if(u._id == this.id)
                     {
                        Object.assign(u, this)
                     }

                   return u;
               })

            }else
            {
                 this._id = this.getNewId()

                 users.push(this);

                 
            }


            localStorage.setItem("users",JSON.stringify(users))

           


    }

    remove()
    {
        let users = User.getUsersStorage();


        users.forEach((userData, index) => {
            
             if(this._id == userData._id)
             {
                  users.splice(index, 1)
             }

        });

        localStorage.setItem("users",JSON.stringify(users))
    }


}
