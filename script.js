const rocketA = document.getElementById('playerA');


function rollDice() {
    // Generates a random integer between -3 and 3
    // Math.random() * 7 gives 0 to 6.99...
    // Subtracting 3 shifts the range to -3 to 3.99...
    // Math.floor rounds it down to: -3, -2, -1, 0, 1, 2, 3
    let roll = Math.floor(Math.random() * 7) - 3;
    
    console.log("Rolled:", roll);
    return roll;
}

function playTurn(rocketId) {
    let roll = rollDice();
    let currentPos = positions[rocketId];
    let nextPos = currentPos + roll;

    // Logic: Bounce if > 50, Floor at 0 if < 0
    if (nextPos === 50) {
        alert(`${rocketId} Wins!`);
        positions[rocketId] = 0;
    } else if (nextPos > 50) {
        positions[rocketId] = 0; // Bounce back
    } else if (nextPos < 0) {
        positions[rocketId] = 0; // Don't go into negative positions
    } else {
        positions[rocketId] = nextPos;
    }
    
    console.log(`${rocketId} is now at ${positions[rocketId]}`);
}