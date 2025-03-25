// Get the button element
const button = document.getElementById('changeColorButton');

// Add an event listener for button click
button.addEventListener('click', function() {
    // Change the background color of the body
    document.body.style.backgroundColor = getRandomColor();
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
