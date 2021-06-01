

class HttpRequest
{
      
    static get(url,params = {}){
        return HttpRequest.request('GET',url,params);
    };

    static delete(url,params = {}){
        return HttpRequest.request('DELETE',url,params);
    };

    static post(url,params = {}){
        return HttpRequest.request('POST',url,params);
    };

    static put(url,params = {}){
        return HttpRequest.request('PUT',url,params);
    };

    

    static request (method,url,params = {})
    {


     return new Promise ((resolve,reject)=>
     {
         
    

    let ajax = new XMLHttpRequest();

    ajax.open(method.toUpperCase(),url);
    // aqui temos que falar pro ajax onde ele vai chamr e qual metod ele vai usar

    ajax.onerror = event =>
    {
        reject(e)
    }


    ajax.onload = event => {
 /// evento de resposta
        let obj = { };

    try
    // caso o json seja invalido
    {
         obj =JSON.parse(ajax.responseText);
         // objeto com a informação retornada do servidor
    }catch(e)
    {
        reject(e);
        console.log(e);
    }
     
    resolve(obj);

    };

  ajax.send();
  // camndo a solicitação ajax


     });  
    }
}