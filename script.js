// Get references to the HTML elements
const counterValueElement = document.getElementById('counter-value');
const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');
const increaseBtn = document.getElementById('increase-btn');

// Initialize the counter value
let count = 0;

// Function to update the display
function updateCounterDisplay() {
    counterValueElement.textContent = count;
    // Optional: Add color change based on value
    if (count > 0) {
        counterValueElement.style.color = '#4CAF50'; // Green
    } else if (count < 0) {
        counterValueElement.style.color = '#f44336'; // Red
    } else {
        counterValueElement.style.color = '#2196F3'; // Blue (original)
    }
}

// Add event listeners to the buttons
decreaseBtn.addEventListener('click', () => {
    count--;
    updateCounterDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounterDisplay();
});

increaseBtn.addEventListener('click', () => {
    count++;
    updateCounterDisplay();
});

// Initial display of the counter
updateCounterDisplay();
