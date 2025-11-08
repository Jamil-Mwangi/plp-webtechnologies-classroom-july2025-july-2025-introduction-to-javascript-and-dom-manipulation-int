// Part 1: Variables and Conditionals

// Select elements for Part 1
const numInput = document.getElementById('numInput');
const checkNumberBtn = document.getElementById('checkNumberBtn');
const basicResult = document.getElementById('basicResult');

checkNumberBtn.addEventListener('click', () => {
  // Get number value from input
  const number = Number(numInput.value);

  // Check if input is a valid number
  if (isNaN(number)) {
    basicResult.textContent = 'Please enter a valid number.';
    return;
  }

  // Determine even or odd using if/else
  if (number % 2 === 0) {
    basicResult.textContent = `The number ${number} is Even.`;
  } else {
    basicResult.textContent = `The number ${number} is Odd.`;
  }

  // Log result to console
  console.log(`Checked number: ${number}`);
});

// Part 2: Custom Functions

// Function to format text (capitalize first letter)
function formatText(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Function to toggle visibility of an element by id
function toggleVisibility(id) {
  const elem = document.getElementById(id);
  if (!elem) return;
  if (elem.style.display === 'none') {
    elem.style.display = 'block';
  } else {
    elem.style.display = 'none';
  }
}

// Part 2 Elements & Events
const textInput = document.getElementById('textInput');
const formatTextBtn = document.getElementById('formatTextBtn');
const formattedText = document.getElementById('formattedText');
const toggleContentBtn = document.getElementById('toggleContentBtn');

formatTextBtn.addEventListener('click', () => {
  const inputText = textInput.value.trim();
  const result = formatText(inputText);
  formattedText.textContent = result;
});

toggleContentBtn.addEventListener('click', () => {
  toggleVisibility('toggleContent');
});

// Part 3: Loops Examples

const listNumbersBtn = document.getElementById('listNumbersBtn');
const numberList = document.getElementById('numberList');
const countdownBtn = document.getElementById('countdownBtn');
const countdownDisplay = document.getElementById('countdownDisplay');

listNumbersBtn.addEventListener('click', () => {
  // Clear previous list items
  numberList.innerHTML = '';

  // Use for loop to list numbers 1-5
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement('li');
    li.textContent = i;
    numberList.appendChild(li);
  }
});

countdownBtn.addEventListener('click', () => {
  let count = 5;
  countdownDisplay.textContent = '';

  // Use while loop for countdown
  const interval = setInterval(() => {
    if (count < 1) {
      countdownDisplay.textContent += 'Blast off!';
      clearInterval(interval);
    } else {
      countdownDisplay.textContent += count + ' ';
      count--;
    }
  }, 500);
});

// Part 4: DOM Interactions

const changeTitleBtn = document.getElementById('changeTitleBtn');
const addItemBtn = document.getElementById('addItemBtn');
const dynamicList = document.getElementById('dynamicList');

changeTitleBtn.addEventListener('click', () => {
  // Change the page title text
  document.querySelector('h1').textContent = 'JavaScript Mastery Achieved!';
});

addItemBtn.addEventListener('click', () => {
  // Create new list item and add to dynamic list
  const li = document.createElement('li');
  li.textContent = `Item ${dynamicList.children.length + 1}`;
  dynamicList.appendChild(li);
});