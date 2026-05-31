document.getElementById('randomColorBtn').addEventListener('click', function() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;

    // Reset background in case gradient was used before
    document.body.style.background = randomColor;

    document.getElementById('colorCode').innerText = `Color: ${randomColor}`;
});

document.getElementById('gradientColorBtn').addEventListener('click', function() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();

    // Correct gradient syntax
    document.body.style.background = `linear-gradient(${color1}, ${color2})`;

    document.getElementById('colorCode').innerText =
        `Gradient: ${color1} → ${color2}`;
});

// Function to generate a random hex color
function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`;
}
