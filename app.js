// const quizContainer = document.getElementById("quiz");
// const submitButton = document.getElementById("submit");

// const myQuestions = [
//     {
//         question: "What is the capital of France?",
//         answers: {
//             a: "London",
//             b: "Paris",
//             c: "Berlin",
//             d: "Madrid",
//         },
//         correctAnswer: "b",
//     },
//     {
//         question: "What is the highest mountain in the world?",
//         answers: {
//             a: "Kilimanjaro",
//             b: "Everest",
//             c: "Denali",
//             d: "Mont Blanc",
//         },
//         correctAnswer: "b",
//     },
//     {
//         question: "Who invented the telephone?",
//         answers: {
//             a: "Thomas Edison",
//             b: "Alexander Graham Bell",
//             c: "Nikola Tesla",
//             d: "Guglielmo Marconi",
//         },
//         correctAnswer: "b",
//     },
// ];

// function buildQuiz() {
//     const output = [];

//     myQuestions.forEach((currentQuestion, questionNumber) => {
//         const answers = [];

//         for (letter in currentQuestion.answers) {
//             answers.push(
//                 `<label>
//           <input type="radio" name="question${questionNumber}" value="${letter}">
//           ${letter}: ${currentQuestion.answers[letter]}
//         </label>`
//             );
//         }

//         output.push(
//             `<div class="question">${currentQuestion.question}</div>
//       <div class="answers">${answers.join("")}</div>`
//         );
//     });

//     quizContainer.innerHTML = output.join("");
// }

// function showResults() {
//     const answerContainers = quizContainer.querySelectorAll(".answers");

//     let numCorrect = 0;

//     myQuestions.forEach((currentQuestion, questionNumber) => {
//         const answerContainer = answerContainers[questionNumber];
//         const selector = `input[name=question${questionNumber}]:checked`;
//         const userAnswer = (answerContainer.querySelector(selector) || {})
//             .value;

//         if (userAnswer === currentQuestion.correctAnswer) {
//             numCorrect++;
//             answerContainers[questionNumber].classList.add("correct");
//         } else {
//             answerContainers[questionNumber].classList.add("incorrect");
//         }
//     });

//     alert(`You got ${numCorrect} out of ${myQuestions.length} correct!`);
// }

// buildQuiz();

// submitButton.addEventListener("click", showResults);

// function abcd(a, b) {
//     a.addEventListener("mouseover", function handleMouseOver() {
//         b.style.display = "block";
//     });

//     a.addEventListener("mouseout", function handleMouseOut() {
//         b.style.display = "none";
//     });
// }

// function abc() {
//     const el = document.getElementById("img1");
//     const el2 = document.getElementById("img2");

//     const hiddenDiv1 = document.getElementById("hidden-div1");
//     const hiddenDiv2 = document.getElementById("hidden-div2");

//     abcd(el, hiddenDiv1);
//     abcd(el2, hiddenDiv2);
// }

// abc();

function addEventListenersToElements(a, b) {
    a.addEventListener("mouseover", function handleMouseOver() {
        b.style.display = "block";
        a.style.opacity = "0.5";
    });

    a.addEventListener("mouseout", function handleMouseOut() {
        b.style.display = "none";
        a.style.opacity = "1";
    });
}

function hoverOnTheElements() {
    const el = document.getElementById("image-list");
    const children = el.children;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const hiddenDiv = document.getElementById(`hidden-div${i + 1}`);
        addEventListenersToElements(child, hiddenDiv);
    }
}

hoverOnTheElements();
