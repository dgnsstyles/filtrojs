// Obtener los elementos del input
let filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    // Obtener el valor del input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    
    // Get Names ul

    let ul = document.getElementById('names');

    // Obtener Items

    let li = ul.querySelectorAll('li.collection-item');

    // loop a traves de collection-item 

    for(let i = 0; i < li.length; i++){
       let a = li[i].getElementsByTagName('a')[0];
       
       // if matched

       if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
          li[i].style.display = ''; 
       } else {
           li[i].style.display = 'none';
       }
    }
}