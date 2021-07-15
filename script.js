const data = [
  {
    question: 'Какой город был центром русской колонизации Сибири?',
    a: 'Томск',
    b: 'Тобольск',
    c: 'Иркутск',
    d: 'Тюмень',
    correct: 'b',
  },
  {
    question: 'В каком созвездии самая яркая звезда называется Вега?',
    a: 'Гончие Псы',
    b: 'Лира',
    c: 'Большая Медведица',
    d: 'Орёл',
    correct: 'b',
  },
  {
    question: 'Какое отчество было у Пьера Безухова?',
    a: 'Константинович',
    b: 'Кириллович',
    c: 'Александрович',
    d: 'Владимирович',
    correct: 'b',
  },
  {
    question: 'Чего так боится бленнофоб?',
    a: 'Пыли',
    b: 'Слизи',
    c: 'Длинных волос',
    d: 'Голубого цвета',
    correct: 'b',
  },
  {
    question: 'Кто победил на конкурсе "Мисс Мира" в 1994 году?',
    a: 'Инна Зобова',
    b: 'Айшвария Рай',
    c: 'Алёна Казимировская',
    d: 'Талиана Варгас',
    correct: 'b',
  },
  {
    question: '	Как называется один из притоков Невы?',
    a: 'Стежка',
    b: 'Пряжка',
    c: 'Кружка',
    d: 'Ложка',
    correct: 'b',
  },
  {
    question: 'Модификацией какого химического элемента является графит?',
    a: 'Кремний',
    b: 'Углерод',
    c: 'Железо',
    d: 'Свинец',
    correct: 'b',
  },
  {
    question: 'Как в досоветской России называлась стоянка извозчиков?',
    a: 'Рынок',
    b: 'Биржа',
    c: 'Ставка',
    d: 'Торги',
    correct: 'b',
  },
];
const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const questionItem = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const answersItems = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();

  const currentQuizData = data[currentQuiz];
  questionItem.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
function getSelected() {
  let answer = undefined;
  answersItems.forEach((answersItem) => {
    if (answersItem.checked) {
      answer = answersItem.id;
    }
  });
  return answer;
}
function deselectAnswer() {
  answersItems.forEach((answersItem) => {
    answersItem.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === data[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < data.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>Викторина окончена. Вы ответили ${score} / ${data.length} </h2><button onclick="location.reload()" id="submit">Начать заново</button>`;
    }
  }
});
