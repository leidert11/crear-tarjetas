let container=document.querySelector('#container') 

let cont= 0

let agregar=document.querySelector('#agregar').addEventListener('click',()=>{
    cont=cont+1
    container.innerHTML+=
     ` <div id="card"><p>tarjeta N°:${cont}</p> <br>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Quasi fuga doloribus quia excepturi! Tenetur, eos placeat! Voluptate officiis eaque aperiam adipisci
      deleniti, a, explicabo deserunt, <br> <br> <button onclick="remover(this)"
      id="borrar">Borrar</button></div>`
     })

     function remover(e) {
         e.parentNode.parentNode.removeChild(e.parentNode)
     }
    

