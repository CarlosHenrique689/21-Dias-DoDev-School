////////////////////////////////////////////////////////////////////////
////////////////// FAÇA O SEU CÓDIGO AQUI //////////////////////////////
////////////////////////////////////////////////////////////////////////

class Aluno{
  Nome
  Idade
  Nota
  constructor(nome, idade, nota){
    this.Nome = nome
    this.Idade = idade
    this.Nota = nota
  } 
};

// Array

let arrayAlunos = [];
let indiceAlunos = 0;
let aluno = undefined;;
let nome = undefined;
let idade = undefined;
let nota = undefined;
let médiaGeral = 0

//funções projeto

function CadastrarAluno(nome, idade, nota){
  aluno = new Aluno(nome, idade, nota)
  let nomeDuplicado = 1
  arrayAlunos.forEach(x => {if(x.Nome === aluno.Nome){nomeDuplicado = Number(prompt('Ouve um nome repetido, se você deseja continuar com o nome repetido, insira "1"'))}})
  if(nomeDuplicado === 1){
    arrayAlunos[indiceAlunos] = aluno
    indiceAlunos++}

  if(nomeDuplicado != 1){aluno = undefined}

  return aluno
};

function OrdenarPorNota(arrayAlunos){
  arrayAlunos.sort(function(a, b){if(Number(a.Nota) < Number(b.Nota)){return -1}else{return 1}})

  return arrayAlunos
};

function OrdenarPorIdade(){
  arrayAlunos.sort(function(a, b){if(Number(a.Idade) < Number(b.Idade)){return 1}else{return -1}})

  return arrayAlunos
};

function OrdenarPorNome(arrayAlunos){
  arrayAlunos.sort(function(a, b){if(a.Nome < b.Nome){return -1}else{return 1}})

  return arrayAlunos
};

function CalcularMedia(arrayAlunos){
  let quantidadeDeNotas = arrayAlunos.length
  let acumuloDeNotas = 0
  arrayAlunos.forEach(x => {acumuloDeNotas += Number(x.Nota)})
  médiaGeral = acumuloDeNotas / quantidadeDeNotas

  return médiaGeral 
};

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

function ExcluirAluno(array, nome) {
  let index
  let removido = false
  array.forEach(aluno => {
    if (aluno.Nome == nome) {
      index = array.indexOf(aluno)
      removido = true
    }
  })
  array.splice(index, 1)
  return removido
}

function PesquisarAluno(array, nome) {
  let pesquisa = false
  array.forEach(aluno => {
    if (aluno.Nome.includes(nome)) {
      pesquisa = true
    }
  })

  return pesquisa
}

// Função para limpar a lista de alunos do DOM
function limparListaDeAlunos() {
  while (alunoList.firstChild) {
    alunoList.removeChild(alunoList.firstChild);
  }
}

// Seleção de elementos
const alunoForm = document.querySelector("#aluno-form");
const alunoInput = document.querySelector("#aluno-input");
const alunoInput2 = document.querySelector("#aluno-input-2");
const alunoInput3 = document.querySelector("#aluno-input-3");
const alunoList = document.querySelector("#aluno-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");

let oldInputValue;

// Funções
const saveAluno = (nome, idade, nota, done = 0, save = 1) => {
  // Somente cadastrar o aluno se save for 1
  if (save === 1) {
    let objetoAluno = CadastrarAluno(nome, idade, nota);

    if (!objetoAluno) return; // Se o cadastro não ocorrer, interrompe a função
  }

  // Renderizar o aluno no DOM
  const aluno = document.createElement("div");
  aluno.classList.add("aluno");

  const alunoNome = document.createElement("h3");
  alunoNome.innerText = nome;
  aluno.appendChild(alunoNome);

  const alunoIdade = document.createElement("h3");
  alunoIdade.innerText = idade;
  aluno.appendChild(alunoIdade);

  const alunoNota = document.createElement("h3");
  alunoNota.innerText = nota;
  aluno.appendChild(alunoNota);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remove-aluno");
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  aluno.appendChild(deleteBtn);

  alunoList.appendChild(aluno);

  const media = document.querySelector("#media");
  media.textContent = CalcularMedia(arrayAlunos).toFixed(2)

  alunoInput.value = "";
  alunoInput2.value = "";
  alunoInput3.value = "";
};

const toggleForms = () => {
  editForm.classList.toggle("hide");
  alunoForm.classList.toggle("hide");
  alunoList.classList.toggle("hide");
};

const getBuscarAluno = (busca) => {
  const alunos = document.querySelectorAll(".aluno");

  let pesquisa = PesquisarAluno(arrayAlunos, busca)

  if (pesquisa) {
    alunos.forEach((aluno) => {
      const alunoNome = aluno.querySelector("h3").innerText.toLowerCase();

      aluno.style.display = "flex";

      if (!alunoNome.includes(busca)) {
        aluno.style.display = "none";
      }
    });
  };
}

const filterAlunos = (filterValue) => {
  // Limpa a lista de alunos no DOM antes de re-renderizar
  limparListaDeAlunos();

  switch (filterValue) {
    case "nota":
      arrayAlunos = OrdenarPorNota(arrayAlunos);
      break;

    case "idade":
      arrayAlunos = OrdenarPorIdade(arrayAlunos);
      break;

    case "nome":
      arrayAlunos = OrdenarPorNome(arrayAlunos);
      break;

    default:
      break;
  }

  // Re-renderizar os alunos no DOM sem adicionar novos alunos ao array
  arrayAlunos.forEach((aluno) => saveAluno(aluno.Nome, aluno.Idade, aluno.Nota, done = 0, save = 0));
};

// Eventos
alunoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = alunoInput.value;
  const inputValue2 = alunoInput2.value;
  const inputValue3 = alunoInput3.value;

  if (inputValue && inputValue2 && inputValue3) {
    saveAluno(inputValue, inputValue2, inputValue3);
  }
});

document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest("div");
  let alunoTitle;

  if (parentEl && parentEl.querySelector("h3")) {
    alunoTitle = parentEl.querySelector("h3").innerText || "";
  }

  if (targetEl.classList.contains("remove-aluno")) {
    alunoTitle = parentEl.querySelector("h3").innerText;
    let removido = ExcluirAluno(arrayAlunos, alunoTitle);
    if (removido) {
      parentEl.remove();
    }
  }
});

searchInput.addEventListener("keyup", (e) => {
  const busca = e.target.value;

  getBuscarAluno(busca);
});

eraseBtn.addEventListener("click", (e) => {
  e.preventDefault();

  searchInput.value = "";

  searchInput.dispatchEvent(new Event("keyup"));
});

filterBtn.addEventListener("change", (e) => {
  const filterValue = e.target.value;

  filterAlunos(filterValue);
});


// Local Storage

// const loadAlunos = () => {

//   arrayAlunos.forEach((aluno) => {
//     saveAluno(aluno.Nome, aluno.Idade, aluno.Nota, 0);
//   });
// };

// loadAlunos();