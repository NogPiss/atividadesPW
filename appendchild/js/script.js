   function somar(){
       var nm1=parseInt(prompt("digite o primeiro numero da soma: "));
       var nm2=parseInt(prompt("digite o segundo numero da soma: "));
       var soma= nm1 + nm2;
        
       alert (soma);
    }

    function subtrair(){
        var nm1=parseInt(prompt("digite o primeiro numero da subtração: "));
        var nm2=parseInt(prompt("digite o segundo numero da subtração: "));
        var subtracao= nm1 - nm2;
         
        alert (subtracao);
     }

     function dividir(){
        var nm1=parseInt(prompt("digite o primeiro numero da divisão: "));
        var nm2=parseInt(prompt("digite o segundo numero da divisão: "));
        var divisao= nm1 / nm2;

        if(nm2 == 0){
         alert("Não é possível dividir por zero");
        }
        else{
         alert (divisao);
        }
         
        
     }

     function multiplicar(){
        var nm1=parseInt(prompt("digite o primeiro numero da multiplicação: "));
        var nm2=parseInt(prompt("digite o segundo numero da multiplicação: "));
        var multiplicacao= nm1 * nm2;
         
        alert (multiplicacao);
     }

     function elevado(){
        var nm1=parseInt(prompt("digite o primeiro numero: "));
        var nm2=parseInt(prompt("digite o expoente: "));
        var elevado= nm1 ** nm2;
         
        alert (elevado);
     }

     function raiz(){
        var nm1=parseInt(prompt("digite o numero da raiz: "));
        var raiz= (Math.sqrt(nm1));
         
        alert (raiz);
     }

     function login(){
      let email_usu="carlos@perfumes";
      let senha_usu="578552266011";

      let email=document.getElementById("email").value;
      let senha=document.getElementById("senha").value;
      
      if(email_usu == email && senha_usu == senha){
         alert("Perfeito");
      }
      else{
         alert("senha ou email errado");
      }
     }

     function adicionar(){
      const produto = {
          nome: document.getElementById("nome").value,
          marca: document.getElementById("marca").value,
          preco: document.getElementById("preco").value
      }
  
      const prod_item = document.createElement("li")
      const prod_nome = document.createElement("h3")
      const prod_marca = document.createElement("h4")
      const prod_preco = document.createElement("p")
      
      prod_nome.innerHTML=produto.nome
      prod_marca.innerHTML=produto.marca
      prod_preco.innerHTML=produto.preco
      
      prod_item.appendChild(prod_nome)
      prod_item.appendChild(prod_marca)
      prod_item.appendChild(prod_preco)
  
      document.getElementById("lista_prod").appendChild(prod_item)
  }
     

