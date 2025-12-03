const questions = [
  {
    instruction:
      "Make sure to read the questions properly and choose the correct options",
  },
  {
    question: "What hook is used for managing state in functional components?",
    options: ["useEffect", "useState", "useMemo", "useCallback"],
    answer: "useState",
  },
  {
    question: "What prop is required when rendering lists in React?",
    options: ["className", "id", "ref", "key"],
    answer: "key",
  },
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const submitBtn = document.getElementById("submitBtn");
const scoreText = document.getElementById("scoreText");

loadQuestion();
function loadQuestion() {
  const q = questions[currentQuestion];
  if (q.instruction) {
    questionText.textContent = q.instruction;
    questionText.classList.add("InstructionText");
    optionsContainer.innerHTML = "";
    submitBtn.textContent = "Start Quiz";
    selectedAnswer = "";
  } else {
    questionText.textContent = q.question;
    questionText.classList.remove("InstructionText");
    optionsContainer.innerHTML = "";
    submitBtn.textContent = "Submit";

    q.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.classList.add("OptionBtn");
      btn.textContent = opt;

      btn.onclick = function () {
        selectedAnswer = opt;
        clearSelected();
        btn.classList.add("Selected");
      };
      optionsContainer.appendChild(btn);
    });
  }
}
function clearSelected() {
  document
    .querySelectorAll(".OptionBtn")
    .forEach((btn) => btn.classList.remove("Selected"));
}
submitBtn.onclick = function () {
  const q = questions[currentQuestion];

  if (q.instruction) {
    currentQuestion++;
    loadQuestion();
    return;
  }

  if (selectedAnswer === "") return;
  if (selectedAnswer === q.answer) score++;
  if (currentQuestion + 1 < questions.length) {
    currentQuestion++;
    selecttedAnswer = "";
    loadQuestion();
  } else {
    showScore();
  }
};
function showScore() {
  questionText.style.display = "none";
  optionsContainer.style.display = "none";
  submitBtn.style.display = "none";
  scoreText.style.display = "block";
  scoreText.textContent =
    "Your Score: " + score + " out of " + (questions.length - 1);
}

//I think I'm done this is Justine Jericho Escalona to finalize his assesment Time check started 5:00 - 5:10 cannot remember (Thank you<3)
