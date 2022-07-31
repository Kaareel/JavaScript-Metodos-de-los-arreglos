let listadotarea = [
    { id: 1, descripcion: 'Hacer mercado', estado: false },
    {
      id: 2,
      descripcion: 'Estudiar para la prueba de programacion',
      estado: false
    },
    { id: 3, descripcion: 'Sacar a pasear a Bolt', estado: false }
  ];
  
  const listadetareas = document.querySelector('#tabladetareas');
  const tareainput = document.querySelector('#nuevatarea');
  const btnagregar = document.querySelector('#agregartarea');
  const totalElement = document.querySelector('#total');
  const finalizadas = document.querySelector('#completadas');
  const ID = document.querySelector('#ID');
  const tarea = [];
  let counter = 4;
  let html = '';
  
  function renderList() {
    let elements = '';
    for (let tarea of listadotarea) {
      elements += `<li><span>${tarea.id}</span><span class="max-text">${tarea.descripcion}</span> <input id="checkbox" onchange={check(${tarea.id})} type="checkbox" checked="false"></input><button id="eliminar" onclick={borrar(${tarea.id})}> x </button></li>`;
    }
  
    listadetareas.innerHTML = elements;
    totalElement.innerHTML = listadotarea.length;
  
    let tareasrealizadas = listadotarea.filter((tarea) => tarea.estado == true);
  
    finalizadas.innerHTML = tareasrealizadas.length;
  }
  
  window.onload = function () {
    renderList();
  };
  
  btnagregar.addEventListener('click', () => {
    const nuevaTarea = {
      id: counter++,
      descripcion: tareainput.value,
      estado: false
    };
    listadotarea.push(nuevaTarea);
    tareainput.value = '';
    renderList();
  });
  
  function borrar(id) {
    const index = listadotarea.findIndex((tarea) => tarea.id == id);
    listadotarea.splice(index, 1);
    renderList();
  }
  function check(id) {
    const index = listadotarea.findIndex((ele) => ele.id == id);
    const tarea = listadotarea.find((ele) => ele.id == id);
    listadotarea.splice(index, 1, {
      id: id,
      descripcion: tarea.descripcion,
      estado: !tarea.estado
    });
    renderList();
  }
  