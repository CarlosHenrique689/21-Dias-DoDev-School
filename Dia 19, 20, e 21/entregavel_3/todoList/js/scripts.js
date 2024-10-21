// Clase

class ToDo{
  Texto
  Prioridade
  Feito = false
  constructor(texto, prioridade){
    this.Texto = texto
    this.Prioridade = prioridade
  }
};

// Array

let arrayTodos = [];
let toDo;
let texto;
let textoNovo;
let prioridade;
let toDoDuplicado;
let guardarIndice;

//funções projeto

function CriarToDo(texto, prioridade, array){
  if(prioridade.length === 1){prioridade = "0" + prioridade}

  toDo = new ToDo(texto, prioridade)
  toDoDuplicado = array.find(x => {return x.Texto === toDo.Texto})

  if(toDoDuplicado === undefined){
    array.push(toDo)
    return toDo
  }

  return toDo
};

function AtualizarToDo(texto, textoNovo, array){
  toDoDuplicado = array.find(x => {return x.Texto === texto})
  guardarIndice = array.findIndex(x => {return x.Texto === texto})

  if(toDoDuplicado !== undefined){
    toDoDuplicado.Texto = textoNovo
    array[guardarIndice] = toDoDuplicado
    return true
  }

  return false
};

function ConcluirToDo(array, texto){
  toDoDuplicado = array.find(x => {return x.Texto === texto})
  guardarIndice = array.findIndex(x => {return x.Texto === texto})

  if(toDoDuplicado !== undefined){
    if(toDoDuplicado.Feito === false){toDoDuplicado.Feito = true}
    if(toDoDuplicado.Feito === true){toDoDuplicado.Feito = false}
    array[guardarIndice] = toDoDuplicado
    return true
  }

  return false
};

function ExcluirToDo(array, texto){
  guardarIndice = array.findIndex(x => {return x.Texto === texto})

  if(guardarIndice !== -1){
    array.splice(guardarIndice, 1)
    return true
  }

  return false
};

function PesquisarToDo(array, texto){
  toDoDuplicado = array.find(x => {return x.Texto === texto})

  if(toDoDuplicado !== undefined){
    return true
  }

  return false
};

function OrdenarCrescente(array){
  array = array.sort((a,b) => a.Prioridade - b.Prioridade)

  return array
};

function OrdenarDecrescente(array){
  array.sort((a,b) => a.Prioridade - b.Prioridade)
  array.reverse()

  return array
};

// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoInput2 = document.querySelector("#todo-input-2");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");

let oldInputValue;

// Funções
const saveTodo = (text, rating, done = 0, save = 1) => {
  let objetoTodo = CriarToDo(text, rating, arrayTodos);

  const todo = document.createElement("div");
  todo.classList.add("todo");

  const todoTitle = document.createElement("h3");
  todoTitle.innerText = objetoTodo.Texto;
  todo.appendChild(todoTitle);

  const todoRating = document.createElement("h3");
  todoRating.innerText = objetoTodo.Prioridade;
  todo.appendChild(todoRating);

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("finish-todo");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  todo.appendChild(doneBtn);

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-todo");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  todo.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remove-todo");
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  todo.appendChild(deleteBtn);

  // Utilizando dados da localStorage
  if (done) {
    todo.classList.add("done");
  }

  todoList.appendChild(todo);

  todoInput.value = "";
  todoInput2.value = "";
};

const toggleForms = () => {
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
};

const updateTodo = (text) => {
  const todos = document.querySelectorAll(".todo");
  let targetTodo;
  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3");
    if (todoTitle.innerText === oldInputValue) {
      targetTodo = todoTitle;
    }
  });

  let atualizado = AtualizarToDo(targetTodo.innerText, text, arrayTodos);

  if (atualizado) {
    targetTodo.innerText = text;
    // Utilizando dados da localStorage
    updateTodoLocalStorage(oldInputValue, text);
  }
};

const getSearchedTodos = (search) => {
  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    const todoTitle = todo.querySelector("h3").innerText.toLowerCase();
    // Ignora letras maiúsculas
    if (todoTitle.includes(search.toLowerCase())) {
      todo.style.display = "flex";
    } else {
      todo.style.display = "none";
    }
  });
};

const filterTodos = (filterValue) => {
  todoList.innerHTML = ''; // Limpa a tela antes de adicionar os novos todos

  // Ordena o array de acordo com o valor do filtro
  switch (filterValue) {
    case "cresc":
      arrayTodos = OrdenarCrescente(arrayTodos);
      break;

    case "decresc":
      arrayTodos = OrdenarDecrescente(arrayTodos);
      break;

    default:
      break;
  }

  // Adiciona os todos de volta na tela após a ordenação
  arrayTodos.forEach((todo) => saveTodo(todo.Texto, todo.Prioridade, todo.Feito ? 1 : 0, save = 0));
};

// Eventos
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;
  const inputValue2 = todoInput2.value;

  // Verificação de duplicatas antes de salvar
  if (inputValue && inputValue2 && !arrayTodos.some(x => x.Texto.toLowerCase() === inputValue.toLowerCase())) {
    saveTodo(inputValue, inputValue2);
  } else {
    alert("A tarefa já existe!");
  }
});

document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest("div");
  let todoTitle;

  if (parentEl && parentEl.querySelector("h3")) {
    todoTitle = parentEl.querySelector("h3").innerText || "";
  }

  if (targetEl.classList.contains("finish-todo")) {
    todoTitle = parentEl.querySelector("h3").innerText;
    let concluido = ConcluirToDo(arrayTodos, todoTitle);
    if (concluido) {
      parentEl.classList.toggle("done");
      updateTodoStatusLocalStorage(todoTitle);
    }
  }

  if (targetEl.classList.contains("remove-todo")) {
    todoTitle = parentEl.querySelector("h3").innerText;
    let removido = ExcluirToDo(arrayTodos, todoTitle);
    if (removido) {
      parentEl.remove();
      // Utilizando dados da localStorage
      removeTodoLocalStorage(todoTitle);
    }
  }

  if (targetEl.classList.contains("edit-todo")) {
    toggleForms();
    editInput.value = todoTitle;
    oldInputValue = todoTitle;
  }
});

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleForms();
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const editInputValue = editInput.value;

  if (editInputValue) {
    updateTodo(editInputValue);
  }

  toggleForms();
});

searchInput.addEventListener("keyup", (e) => {
  const search = e.target.value;
  getSearchedTodos(search);
});

eraseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchInput.value = "";
  searchInput.dispatchEvent(new Event("keyup"));
});

filterBtn.addEventListener("change", (e) => {
  const filterValue = e.target.value;
  filterTodos(filterValue);
});

// Local Storage
const getTodosLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  return todos;
};

const loadTodos = () => {
  const todos = getTodosLocalStorage();
  todos.forEach((todo) => {
    saveTodo(todo.text, todo.rating, todo.done, 0);
  });
};

const saveTodoLocalStorage = (todo) => {
  const todos = getTodosLocalStorage();
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const updateTodoLocalStorage = (oldText, newText) => {
  const todos = getTodosLocalStorage();
  const updatedTodos = todos.map((todo) => {
    if (todo.text === oldText) {
      todo.text = newText;
    }
    return todo;
  });
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
};

const removeTodoLocalStorage = (todoTitle) => {
  const todos = getTodosLocalStorage();
  const updatedTodos = todos.filter(todo => todo.text !== todoTitle);
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
};

const updateTodoStatusLocalStorage = (todoTitle) => {
  const todos = getTodosLocalStorage();
  const updatedTodos = todos.map((todo) => {
    if (todo.text === todoTitle) {
      todo.done = !todo.done; // Alterna o estado
    }
    return todo;
  });
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
};

// Carrega os dados do localStorage
loadTodos();
