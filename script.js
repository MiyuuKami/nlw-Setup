/*const celular = {
  cor: "preto",
  ligar: function() {
    const mensagem = "Ligando"
    alert(mensagem)
  }
}

celular.ligar() - parenteses por LIGAR ser uma funcao



DOM document object model - elementos html se transformam em objeto JS*/

/*document.body.style.backgroundColor = "white"*/

/*document.querySelector("input").click() - documento, pesquise pelo input e clique nele */

/*para acessar o documento html pelo js, tem o objeto DOCUMENT */

const form = document.querySelector("#form-habits") /*colocar numa variavel o formulario */
const nlwSetup = new NLWSetup(form) /*novo objeto e colocando na variavel, formulario que estamos lendo */
const button = document.querySelector("header button") //colocar a tag button dentro de uma variavel button

button.addEventListener("click", add) //adiciona LISTEN de event e precisa de 2 argumentos, () primeiro o evento que vai listen, depois a funcao que ocorre depois do evento
form.addEventListener("change", save) //ao resgistrar mudanca, vai salvar

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5) //para pegar a data de hoje
  const dayExists = nlwSetup.dayExists(today) //verdadeiro se o dia existir, e falso se o dia nao existir

  if (dayExists) {
    alert("dia ja registrado")
    return
  }

  nlwSetup.addDay(today)
}

function save() //salva o conteudo e transforma em texto
{
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data)) //nome de uma chave, depois valor
}

//const data /*deixa as caixas ja como checked */= {
//  run: ['01-01', '01-02', '01-06'],
//  takePills: ['01-03'],
//  journal: ['01-02']
//}


const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}//pegou o que foi salvo em texto e colocou na variavel
nlwSetup.setData(data) /*o objeto que e a biblioteca, puxa a funcao setData e coloca o objeto dentro */
nlwSetup.load() /*carrega os dados internos (const data) e renderiza o layout */
