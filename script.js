/*
1basics 2 functions 3. loops 4 DOM
*/

// Part 1: Variables, Data Types, Operators, Conditionals

const greetBtn = document.getElementById('greetBtn');
const part1Result = document.getElementById('part1Result');

greetBtn.addEventListener('click', () => {
  // Read values (strings and numbers)
  const firstName = document.getElementById('firstName').value.trim(); // string
  const lastName = document.getElementById('lastName').value.trim();   // string
  const ageInput = document.getElementById('age').value;               // string from input
  const age = Number(ageInput);                                        // convert to number

  console.log('Part1 input:', { firstName, lastName, age });

  // Basic validation and operators
  if (!firstName || !lastName || Number.isNaN(age)) {
    part1Result.textContent = 'Please provide a valid name and age.';
    return;
  }

    // Conditional logic
  let lifeStage;
  if (age < 13) {
    lifeStage = 'a child';
  } else if (age < 20) {
    lifeStage = 'a teenager';
  } else if (age < 65) {
    lifeStage = 'an adult';
  } else {
    lifeStage = 'a senior';
  }

  // Output using DOM and console
  const greeting = `Hello, ${firstName} ${lastName}! At ${age} years old you are ${lifeStage}.`;
  part1Result.textContent = greeting;
  console.log('Greeting:', greeting);
});


// Part 2: Functions

const calcBtn = document.getElementById('calcBtn');
const totalResult = document.getElementById('totalResult');

// Function to calculate total price with tax
function calculateTotal(unitPrice, quantity, taxRate = 0.16) {
  // demonstrate arithmetic operators and returning an object
  const subtotal = unitPrice * quantity;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;
  return { subtotal, tax, total };
}

// Simple formatter function - formats number as currency
function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}


// Event handler to use the functions
calcBtn.addEventListener('click', () => {
  const price = parseFloat(document.getElementById('price').value) || 0;
  const qty = parseInt(document.getElementById('quantity').value, 10) || 0;

  // Use the calculateTotal function
  const { subtotal, tax, total } = calculateTotal(price, qty, 0.16);

  // Use the formatter function
  totalResult.innerHTML = `
    Subtotal: ${formatCurrency(subtotal)} <br>
    Tax (16%): ${formatCurrency(tax)} <br>
    <strong>Total: ${formatCurrency(total)}</strong>
  `;

  console.log('Calculated total', { price, qty, subtotal, tax, total });
});


// Part 3: Loops for , while, foreach 

// for loop and forEach to generate a list

const genListBtn = document.getElementById('genListBtn');
const techList = document.getElementById('techList');

genListBtn.addEventListener('click', () => {
  // Example array
  const techs = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React'];

  // Clear previous list
  techList.innerHTML = '';

  // for loop
  for (let i = 0; i < techs.length; i++) {
    const li = document.createElement('li');
    li.textContent = `for-loop item ${i + 1}: ${techs[i]}`;
    techList.appendChild(li);
  }

  // Using forEach to append additional items
  techs.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `forEach item ${index + 1}: ${item}`;
    techList.appendChild(li);
  });

  console.log('Tech list generated with for and forEach:', techs);
});

/* while loop for a simple countdown */
const countdownBtn = document.getElementById('countdownBtn');
const countdownResult = document.getElementById('countdownResult');

countdownBtn.addEventListener('click', () => {
  let n = 5; // starting point for countdown
  let output = '';
  while (n > 0) {
    output += `T-minus ${n}… `;
    n -= 1; // decrement
  }
  output += 'Lift off!';
  countdownResult.textContent = output;
  console.log('Countdown finished:', output);
});

// Part 4: DOM Manipulation

/* Interaction A — Add todo item */
const todoForm = document.getElementById('todoForm');
const todoList = document.getElementById('todoList');

todoForm.addEventListener('submit', (evt) => {
  evt.preventDefault(); // prevent page reload

  const input = document.getElementById('todoText');
  const text = input.value.trim();
  if (!text) return;

  // Create new list item
  const li = document.createElement('li');
  li.textContent = text;

  // Add a remove button to demonstrate event handling on dynamic elements
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.type = 'button';
  removeBtn.style.marginLeft = '0.6rem';
  removeBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(removeBtn);
  todoList.appendChild(li);

  // Clear input and focus for convenience
  input.value = '';
  input.focus();

  console.log('Added todo:', text);
});

/* Interaction B — Toggle theme (toggle a class on <body>) */
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
toggleThemeBtn.addEventListener('click', () => {
  // toggling 'dark' shows class manipulation
  document.body.classList.toggle('dark');
  console.log('Theme toggled. Dark mode:', document.body.classList.contains('dark'));
});

/* Interaction C — Dynamic card generation using a for-loop */
const cardsContainer = document.getElementById('cardsContainer');

// Example data for cards
const cardData = [
  { title: 'Speed', body: 'Fast load times and snappy UI.' },
  { title: 'Accessibility', body: 'Readable fonts and keyboard friendly.' },
  { title: 'Maintainability', body: 'Clear structure and modular code.' }
];

function createCardElement(item) {
  // Create elements and assemble them
  const wrapper = document.createElement('div');
  wrapper.className = 'card-small';

  const title = document.createElement('strong');
  title.textContent = item.title;

  const p = document.createElement('p');
  p.textContent = item.body;

  wrapper.appendChild(title);
  wrapper.appendChild(p);

  return wrapper;
}

// Use a for loop to create cards on page load
for (let i = 0; i < cardData.length; i += 1) {
  const el = createCardElement(cardData[i]);
  cardsContainer.appendChild(el);
}

// Extra DOM interaction: listen for clicks on cardsContainer
cardsContainer.addEventListener('click', (e) => {
  // If a card was clicked, toggle a highlight
  let target = e.target;
  // climb up to a card-small
  while (target && target !== cardsContainer) {
    if (target.classList && target.classList.contains('card-small')) {
      target.style.borderLeft = target.style.borderLeft ? '' : '4px solid #0b6efd';
      break;
    }
    target = target.parentNode;
  }
});









/*
end of the scripts.js
managed to satisfy all parts as in readme doc
- Part 1: Variables, Data Types, Operators, Conditionals
- Part 2: Functions
- Part 3: Loops
- Part 4: DOM Manipulation

*/
