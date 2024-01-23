let miArray = [];
    
      function actualizarResultado() {
        document.getElementById('resultado').innerHTML = '[' + miArray.join(', ') + ']';
      }
    
      function agregarElemento() {
        const nuevoElemento = document.getElementById('nuevoElemento').value;
        miArray.push(nuevoElemento);
        actualizarResultado();
      }
    
      function eliminarElemento() {
        const elementoEliminar = document.getElementById('elementoEliminar').value;
        const index = miArray.indexOf(elementoEliminar);
        if (index !== -1) {
          miArray.splice(index, 1);
          actualizarResultado();
        } else {
          alert('Elemento no encontrado');
        }
      }
    
      function ordenarCreciente() {
        miArray.sort(function(a, b) {
          return a - b;
        });
        actualizarResultado();
      }
    
      function ordenarDecreciente() {
        miArray.sort(function(a, b) {
          return b - a;
        });
        actualizarResultado();
      }
    
      function buscarElemento() {
        const elementoBuscar = document.getElementById('elementoBuscar').value;
        const index = miArray.indexOf(elementoBuscar);
        if (index !== -1) {
          document.getElementById('resultado').innerHTML = 'Elemento encontrado en la posición ';
        } else {
          document.getElementById('resultado').innerHTML = 'Elemento no encontrado';
        }
      }