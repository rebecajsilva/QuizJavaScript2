
// Declarando as variaveis 
const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")



let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}


// Exibir a proxima pergunta
function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
   
    return finishGame()
  } 
  document.getElementById('feedback').textContent = '';
  document.getElementById('iniciar').textContent = '';


  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
      
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
  

  
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {

    
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
     totalCorrect++
     document.getElementById('feedback').textContent = 'Resposta Correta!'
    
  } else {
    document.body.classList.add("incorrect") 
    document.getElementById('feedback').textContent = 'Resposta Incorreta!'
  }
  

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
      

    } else {
      button.classList.add("incorrect")
      

    }
  })

  
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}
const questions = [
    {
      question: "1-Qual foi a primeira Capital do Brasil?",
      answers: [
        { text: "SAO PAULO", correct: false },
        { text: "CURITIBA", correct: false },
        { text: "SALVADOR", correct: true },
        { text: "RIO DE JANEIRO", correct: false }
      ]
    },
    {
      question: "2-Qual o maior planeta do sistema solar?",
      answers: [
        { text: "JUPITER", correct: true },
        { text: "TERRA", correct: false },
        { text: "SATURNO", correct: false },
        { text: "MARTE", correct: false }
      ]
    },
    {
      question: "3-Qual artista é conhecido como Rei do Pop?",
      answers: [
        { text: "MICHAL JACKSON", correct: true },
        { text: "ROBERTO CARLOS", correct: false },
        { text: "JOHN LENNON", correct: false },
        { text: "FABIO JUNIOR ", correct: false }
      ]
    },
    {
      question: "4-O que as abelhas fabricam?",
      answers: [
        { text: "ALGODAO", correct: false },
        { text: "MEL", correct: true },
        { text: "SEDA", correct: false },
        { text: "AZEITE", correct: false }
      ]
    },
    {
      question: "5-Qual é o maior rio do Brasil??",
      answers: [
        { text: "RIO PARAIBA DO SUL", correct: false },
        { text: "RIO TIETE", correct: false },
        { text: "RIO AMAZONAS", correct: true },
        { text: "RIO SAO FRANCISCO", correct: false }
      ]
    },
    {
      question: "6-Primogênito é o nome dado a qual filho de um casal?",
      answers: [
        { text: "SEGUNDO FILHO", correct: false },
        { text: "TERCEIRO FILHO", correct: false },
        { text: "QUINTO FILHO", correct: false },
        { text: "PRIMEIRO FILHO", correct: true }
      ]
    },
    {
      question: "7-De qual banda de rock que o cantor Freddie Mercury foi vocalista?",
      answers: [
        { text: "QUEEN", correct: true },
        { text: "AC/DC", correct: false },
        { text: "THE BEATLES", correct: false },
        { text: "BON JOVI", correct: false },
      ]
    },
    {
      question: "8-O tomate é um(a)…",
      answers: [
        { text: "VERDURA", correct: false },
        { text: "FRUTA", correct: true },
        { text: "VEGETAL", correct: false },
        { text: "LEGUME", correct: false },
      ]
    },
    {
      question: "9-Qual é o nome do criador do Facebook?",
      answers: [
        { text: "MARK ZUKERBERG", correct: true },
        { text: "STEVE JOBS", correct: false },
        { text: "JEFF BEZOS", correct: false },
        { text: "ELON MUSK", correct: false },
      ]
    },
    {
      question: "10-Qual animal é conhecido como o rei da selva?",
      answers: [
        { text: "LEAO", correct: true },
        { text: "MACACO", correct: false },
        { text: "ZEBRA", correct: false },
        { text: "GIRAFA", correct: false },
      ]
    },
  ]
