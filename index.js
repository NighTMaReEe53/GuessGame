// Selector
const tyepingInp = document.querySelector(".typing"),
  theBtn = document.querySelector(".theBtn"),
  inputContainer = document.querySelector(".inputs"),
  theHeading = document.querySelector(".details h2"),
  theTries = document.querySelector(".details p span"),
  animation = document.querySelector(".up");
// Get Words

const wordsContainer = [
  {
    word: "react",
    disc: "JavaScript library",
  },
  {
    word: "vue",
    disc: "JavaScript Framework",
  },
  {
    word: "angular",
    disc: "JavaScript MVW Framework",
  },
  {
    word: "nodejs",
    disc: "JavaScript runtime environment",
  },
  {
    word: "php",
    disc: "general-purpose scripting language",
  },
  {
    word: "ruby",
    disc: "open source programming language",
  },
  {
    word: "python",
    disc: "Programming Language",
  },
  {
    word: "tailwind",
    disc: "A utility-first CSS framework",
  },
  {
    word: "bootstrap",
    disc: "world's most famous free CSS framework",
  },
];

// Set Option

let theArray = [],
  theWordEdition,
  maxGuess = 12;

// Window Onload
window.addEventListener("keydown", () => tyepingInp.focus());

tyepingInp.addEventListener("input", startGame);

function startGame(e) {
  let theValue = e.target.value;
  // Check
  if (!theWordEdition.match(/[a-z]/i)) return;
  if (theWordEdition.includes(theValue)) {
    // Looping
    for (let i = 0; i < theWordEdition.length; i++) {
      if (
        theWordEdition[i] === theValue &&
        !inputContainer.querySelectorAll("input")[i].value
      ) {
        inputContainer.querySelectorAll("input")[i].value = theValue;
        theArray.push(theValue);
      }
    }
  } else {
    maxGuess--;
  }
  theTries.innerHTML = maxGuess;
  tyepingInp.value = "";
  if (theArray.length === theWordEdition.length) {
    animation.classList.remove("hidden");
    theArray = [];
    document.getElementById("sucess").play();
  }
  setTimeout(() => {
    if (maxGuess <= 0) {
      alert("You Are Lose Try Again !!");
      for (let i = 0; i < theWordEdition.length; i++) {
        inputContainer.querySelectorAll("input")[i].value = theWordEdition[i];
      }
    }
  });
}

function getData() {
  // Reset
  reset();
  // Get RandomNumber
  let theRandomNumber =
    wordsContainer[Math.floor(Math.random() * wordsContainer.length)];

  let theDescFor = theRandomNumber.disc;
  theWordEdition = theRandomNumber.word;

  // Edit InnerHTML For Desc

  theHeading.innerHTML = theDescFor;

  theTries.innerHTML = maxGuess;

  // Create Input
  let input = "";

  // looping
  for (let i = 0; i < theWordEdition.length; i++) {
    input += "<input type='text' disabled>";
  }
  inputContainer.innerHTML = input;
}

theBtn.addEventListener("click", getData);

function reset() {
  maxGuess = 12;
  animation.classList.add("hidden");
  theArray = [];
  document.getElementById("sucess").pause();
}

// Trigger Function
getData();
