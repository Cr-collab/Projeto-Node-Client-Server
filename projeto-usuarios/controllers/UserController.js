
class UserController
{
    constructor(formIdCreate,formIdUpdate, tableId)
    {
            this.formEl =  document.getElementById(formIdCreate);
            this.formUpdateEl =  document.getElementById(formIdUpdate);
            this.tableEl =  document.getElementById(tableId);
            this.OnSubmit();
            this.onEdit();
            this.selectAll();
            
    }


    onEdit()
    {
        document.querySelector("#box-user-update .btn-cancel").addEventListener("click",e => 
        {
          this.showPanelCreate();
                
        });

        this.formUpdateEl.addEventListener("submit", event =>
        {
            event.preventDefault();

            let btn =this.formUpdateEl.querySelector("[type=submit]");    

            btn.disabled = true;

            let values = this.getValues(this.formUpdateEl);


            



            let index = this.formUpdateEl.dataset.trIndex
            // aqui esta o  valor do indice 



            let tr =  this.tableEl.rows[index];
            // aqui esta o indice da linha que querp acessar

            let userOld = JSON.parse(tr.dataset.user);

            let result = Object.assign({}, userOld , values);

           

     this.getPhoto(this.formUpdateEl).then(
        (content)=>
        {
            
            if(!values.photo)
            {result._photo = userOld._photo;}
            else{
                result._photo = content;
            }

            let user = new User();

            user.loadFromJSON(result)

            user.save();

            let trNew = this.getTr(user, tr)
          
        
            
            this.updateCount();
            
            this.formUpdateEl.reset();
            this.showPanelCreate();
            btn.disabled = false;
        },
        (e) =>
        {
            console.error(e)
        }
    );


        })
    }
   

    OnSubmit()
    {
       
          
        this.formEl.addEventListener("submit", event =>
        {
            event.preventDefault();
                //para tudo que esse cara disparou .  
                 // ele vai para com comportamento padrão

             let btn =this.formEl.querySelector("[type=submit]");    

             btn.disabled = true;
             let values = this.getValues(this.formEl);

        

             if(!values) {
                 return false 
                
             }
     
             
             this.getPhoto(this.formEl).then(
                 (content)=>
                 {
                     values.photo = content;
                     values.save();
                     this.addLine(values);
                     this.formEl.reset();
                     btn.disabled = false;
                 },
                 (e) =>
                 {
                     console.error(e)
                 }
             );
             
;
             
          
            
        });
    } 
    
 getPhoto(formEl)
 {

    return new Promise((resolve , reject ) =>
    {
        let fileReader = new FileReader();

        let elements = [...formEl.elements].filter(item =>
           {
               if (item.name === 'photo')
               {
                   return item;
               }
           })
   

   
           let file =  elements[0].files[0];
   
        fileReader.onload = () =>
        {
               resolve(fileReader.result);
        };


        fileReader.onerror = (e)=>
        {
               reject(e);
        };
   
        if(file)
        {
            fileReader.readAsDataURL(file);
        } else
        {
            resolve('dist/img/avatar.png');
        }
    });
     
 } 
 
 


 selectAll()
 {
    let users = User.getUsersStorage();

    users.forEach(dataUser =>
        {
            let user = new User();

            user.loadFromJSON(dataUser);
            this.addLine(user)
        })

 }


    
addLine(dataUser)
{
    
     let tr = this.getTr(dataUser) 
 
     this.tableEl.appendChild(tr);

     this.updateCount();

     
     
}

getTr(dataUser , tr = null)
{

    if(tr == null) tr = document.createElement('tr');

    tr.dataset.user = JSON.stringify(dataUser)

    tr.innerHTML =
     `
  
     <td>
                      <img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm">
                      </td>
                      <td>${dataUser.name}</td>
                      <td>${dataUser.email}</td>
                      <td>${(dataUser.admin) ? "Sim" : "Não"}</td>
                      <td>${Utils.dateFormat(dataUser.register)}</td>
                      <td>
                      <button type="button" class="btn btn-primary btn-edit btn-xs btn-flat">Editar</button>
                      <button type="button" class="btn btn-danger btn-delete btn-xs btn-flat">Excluir</button>
     </td>

     `;

     this.addEventsTr(tr);

     return tr


}


addEventsTr(tr)
{
    tr.querySelector(".btn-delete").addEventListener("click" , e =>
    {
           if(confirm("Realmente deseja exlcluir esse usuario"))
           {
               let user = new User();

               user.loadFromJSON(JSON.parse(tr.dataset.user))
               user.remove();
               tr.remove();

               this.updateCount();
           }
    });
    
    tr.querySelector(".btn-edit").addEventListener("click" , e =>
    {
       let json = JSON.parse(tr.dataset.user);
       // que tem os dados do usuario



      


       this.formUpdateEl.dataset.trIndex = tr.sectionRowIndex;
       /// aqui esta o indice da minha linha 


          for (let name in json)
          {
                
               let field = this.formUpdateEl.querySelector("[name=" + name.replace("_" , "") + "]");
                           
            // a variavel field recebe a pesquisa que esta ocorrendo dentro do formulario , essa pesquisa esta perguntando tem elementos com name 
            //, se tiver pega a proprieda name do json tirando uderline e ver se tem essa propriedade ai.

                 //encontrou esse campo           

               if(field)
               //verifica se esse campo existe 
                // se ele existir ai sim atribuimos valor nele 
               {


                  
                   switch(field.type)
                   {
                        case  'file':
                           continue;
                        break;   
                       
                       case 'radio':
                           field = this.formUpdateEl.querySelector("[name=" + name.replace("_" , "") + "][value=" + json[name] + "]");
                           field.checked = true;
                        break;
                        case 'checkbox':
                           field.checked = json[name]
                        break;

                        default:
                            field.value = json[name]
                             // esse field ja  tem o nosso elemento .value para definir o valor dele  
                              //o valor que ele vai receber  objeto json na propriedade name 
                     



                   }

                 
               
               }

               
          }

          this.formUpdateEl.querySelector(".photo").src = json._photo;

       this.showPanelUpadte();
    })
}


showPanelCreate()
{
    document.querySelector('.box-edit').style = "display:none"  
    document.querySelector('.box-register').style = "display:block"
}


showPanelUpadte()
{
    document.querySelector('.box-register').style = "display:none"
    document.querySelector('.box-edit').style = "display:block"
}


updateCount()
{
     let numberUsers = 0;
     let numberAdmin = 0;
   [...this.tableEl.children].forEach(tr =>{

    numberUsers++;


    let user = JSON.parse(tr.dataset.user);
    


    if(user._admin){ numberAdmin++}

    /*
    [...tr.children].forEach(td => {
       
        if(td.innerHTML === 'Sim')
        {
            numberAdmin++;
        }
       
    })
    */

   })
   

  document.querySelector('#number-users').innerHTML = numberUsers
  document.querySelector('#number-users-admin').innerHTML = numberAdmin

}



getValues(formEl)
{
   
      

       let user = {};
       let isValid = true;

   
                
        [...formEl.elements].forEach(
            // para cada campo que tiver faca   
                function(field,index)
                {

                       if( ['name' , 'email', 'password'].indexOf(field.name) > -1 && field.value == '')
                       {
                             field.parentElement.classList.add('has-error');
                             isValid = false;
            
                       }

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
                        
                    }else if (field.name == 'admin')
                    {
                            user[field.name] = field.checked;
                    } else
                    //se não
                    {
                        user[field.name] = field.value;
                        // aqui estamos acessando objeto user e colocando valores selecionados no formulario
                    }

                }
            );

        

            if(!isValid)
            {
               return false;
            }

    

             return new User(
                user.name,
                user.gender,
                user.birth,
                user.country,
                user.email,
                user.password,
                user.photo,
                user.admin
                );

        
}
}
