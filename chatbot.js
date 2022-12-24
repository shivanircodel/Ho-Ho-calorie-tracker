var score = 300;
var change = 1;

function addCredit() {
  score = score + change;
  score2 = score;
  document.getElementById("score").innerHTML = "Credit Score: " + score;
  document.getElementById("score2").innerHTML = "Credit Score: " + score;
  check();
}

function card1() {
  if (score >= 570) {
    score = score - 50;
    score2 = score;
    change = change + 1;
    document.getElementById("score").innerHTML = "Credit Score: " + score;
    document.getElementById("score2").innerHTML = "Credit Score: " + score;
  }
}

function card2() {
  if (score >= 700) {
    score = score - 100;
    score2 = score;
    document.getElementById("score").innerHTML = "Credit Score: " + score;
    document.getElementById("score2").innerHTML = "Credit Score: " + score;
    sec();
  }
}

function sec() {
            setInterval(function(){ 
                score += 10;
                score2 = score;
                check();
                document.getElementById("score").innerHTML = "Credit Score: " + score;
                document.getElementById("score2").innerHTML = "Credit Score: " + score;
            }, 12000);
        }

function card3() {
  if (score >= 700) {
    score = score - 150;
    score2 = score;
    change = change + 5;
    document.getElementById("score").innerHTML = "Credit Score: " + score;
    document.getElementById("score2").innerHTML = "Credit Score: " + score;
  }
}

function boost1() {
    score = score + Math.floor(Math.random() * 10) + 1;
    score2 = score;
    document.getElementById("score").innerHTML = "Credit Score: " + score;
    document.getElementById("score2").innerHTML = "Credit Score: " + score;
    check();
  }

  function boost2() {
    score = score + Math.ceil(Math.random() * 30) * (Math.round(Math.random()) ? 1 : -1)
    score2 = score;
    document.getElementById("score").innerHTML = "Credit Score: " + score;
    document.getElementById("score2").innerHTML = "Credit Score: " + score;
    check();
  }

function boost3() {
   change = change + Math.ceil(Math.random() * 1) * (Math.round(Math.random()) ? 1 : -1);
  }

function check(){
  if (score>= 850){
    score=850;
    score2=850;
    document.getElementById("score").innerHTML = "Credit Score: " + score;
    document.getElementById("score2").innerHTML = "Credit Score: " + score;
  }
}

//chatbot code (Reeva)

const inputField = document.getElementById("input");
inputField.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    let input = inputField.value;
    inputField.value = "";
    output(input);
  }
});

function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text
    .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  // input options
const utterances = [
 
  ["how are you", "how is life", "how are things"],
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["what", "why", "how", "where", "when"],
  ["no", "not sure", "maybe", "no thanks"],
  [""],
  ["haha", "ha", "lol", "hehe", "funny", "joke"],
  ["what is credit?"],
  ["what card should I use?"]
];

// Possible responses corresponding to triggers

const answers = [
   [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am nameless", "I don't have a name"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Pasta", "Burger"],
  ["Great question"],
  ["That's ok", "What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!", "Good one!"],
  ["When creating a new years resolution, think about something this past year that you want to improve this year"],
  ["There are a lot of resolutions to choose from just make sure it is something that either challenges you or you know you can fulfill"],


];

// Random for any other user input

const alternatives = [
  "When creating a new years resolution, think about something this past year that you want to improve this year",
];

  if (compare(utterances, answers, text)) {
    // Search for exact match in triggers
    product = compare(utterances, answers, text);
  } 
  else {
    product = alternatives[Math.floor(Math.random() * alternatives.length)];
  }

  addChatEntry(input, product);
}

function compare(utterancesArray, answersArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < utterancesArray.length; x++) {
    for (let y = 0; y < utterancesArray[x].length; y++) {
      if (utterancesArray[x][y] === string) {
        let replies = answersArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}

function addChatEntry(input, product) {
  const messagesContainer = document.getElementById("messages");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  messagesContainer.appendChild(botDiv);

  messagesContainer.scrollTop =
    messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    botText.innerText = `${product}`;
  }, 2000);
}
