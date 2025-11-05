
    // 1. Get references to the necessary HTML elements
    const displayValue = document.getElementById('display-value');
    const increaseBtn = document.getElementById('increase-btn');
    const decreaseBtn = document.getElementById('decrease-btn');
    const resetBtn = document.getElementById('reset-btn');
    const statusText = document.getElementById('current-status');

    // 2. Initialize the counter variable
    let count = 0;

    // 3. Function to update the UI (display and status text)
    function updateUI() {
        displayValue.textContent = count;
        statusText.textContent = count;
        
        // Optional: Change background/text color based on value
        if (count > 0) {
            displayValue.style.color = 'var(--primary-color)'; // Blue
        } else if (count < 0) {
            displayValue.style.color = 'var(--danger-color)'; // Red
        } else {
            displayValue.style.color = 'var(--text-color)'; // Default dark
        }
    }

    // 4. Add Event Listeners to the buttons
    
    // Increase Button Logic
    increaseBtn.addEventListener('click', () => {
        count++;
        updateUI();
    });

    // Decrease Button Logic
    decreaseBtn.addEventListener('click', () => {
        count--;
        updateUI();
    });

    // Reset Button Logic
    resetBtn.addEventListener('click', () => {
        count = 0;
        updateUI();
    });

    // 5. Initialize the UI when the page loads
    updateUI();