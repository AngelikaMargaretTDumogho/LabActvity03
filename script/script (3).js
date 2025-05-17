// Display real-time clock
function updateTime() {
    let now = new Date();
    document.getElementById("currentTime").innerText = "Current Time: " + now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// Quiz Functionality
var questions = [
    {
        question: "What is racism?",
        options: ["A type of music", "Discrimination based on race", "A cooking style", "A fashion trend"],
        correct: 1
    },
    {
        question: "Which of the following is an example of systemic racism?",
        options: [
            "A person choosing a favorite color",
            "A government policy that discriminates against a group",
            "A child learning a new language",
            "A musician playing an instrument"
        ],
        correct: 1
    },
    {
        question: "What can individuals do to combat racism?",
        options: ["Ignore it", "Speak up against discrimination", "Participate in discrimination", "Avoid talking about it"],
        correct: 1
    },
    {
        question: "What does 'equality' mean?",
        options: [
            "Treating everyone the same regardless of differences",
            "Giving special treatment to one group",
            "Ignoring people's backgrounds",
            "Avoiding people who are different"
        ],
        correct: 0
    },
    {
        question: "Which of these is an example of racial bias?",
        options: ["Judging someone based on their race", "Making a new friend", "Trying a new food", "Listening to different music"],
        correct: 0
    }
];

var currentQuestion = 0;
var score = 0;
var selectedAnswer = null;

function loadQuestion() {
    var q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    var optionsHTML = "";

    q.options.forEach((option, index) => {
        optionsHTML += `<button class="option-btn" onclick="selectAnswer(${index})">${option}</button><br>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;
    document.getElementById("result").textContent = "";
    document.getElementById("next-btn").style.display = "none"; // Hide Next button initially
}

function selectAnswer(selected) {
    selectedAnswer = selected;
    var correctAnswer = questions[currentQuestion].correct;
    var buttons = document.getElementsByClassName("option-btn");

    // Disable all buttons after selection
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        if (i === correctAnswer) {
            buttons[i].classList.add("selected"); // Highlight correct answer
        }
        if (i === selected && i !== correctAnswer) {
            buttons[i].classList.add("incorrect"); // Highlight incorrect answer
        }
    }

    if (selected === correctAnswer) {
        score++;
    }

    document.getElementById("result").textContent = selected === correctAnswer ? "Correct!" : "Incorrect.";
    document.getElementById("next-btn").style.display = "block"; // Show Next button
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").textContent = "Quiz Complete!";
        document.getElementById("options").innerHTML = `Your score: ${score}/${questions.length}`;
        document.getElementById("next-btn").style.display = "none"; // Hide Next button
    }
}

loadQuestion();