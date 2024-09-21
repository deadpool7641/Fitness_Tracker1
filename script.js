function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    document.getElementById(tabName).style.display = 'block';
}

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registration successful! You can now log in.');
    showTab('login');
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login successful! You can now use the fitness tracker.');
    showTab('tracker');
});

document.getElementById('fitnessForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const activity = document.getElementById('activity').value;
    const goal = document.getElementById('goal').value;
    const workoutType = document.getElementById('workoutType').value;

    let plan = `Hi ${name}, based on your details:\n\n`;

    if (goal === 'weight-loss') {
        plan += `To achieve your weight loss goal, consider a caloric deficit. Your activity level (${activity}) suggests that you should aim for:\n`;
        plan += '- 30-60 minutes of cardio, 5 times a week.\n';
    } else if (goal === 'muscle-gain') {
        plan += `To gain muscle, focus on a high-protein diet. Given your activity level (${activity}), aim for:\n`;
        plan += '- Strength training at least 4 times a week.\n';
    } else {
        plan += `To maintain your weight, balance your caloric intake with exercise. With your activity level (${activity}), try:\n`;
        plan += '- A mix of cardio and strength training.\n';
    }

    switch (workoutType) {
        case 'cardio':
            plan += 'Consider running, cycling, or swimming as your primary workouts.';
            break;
        case 'strength':
            plan += 'Focus on weightlifting or resistance training.';
            break;
        case 'flexibility':
            plan += 'Incorporate yoga or Pilates into your routine.';
            break;
        case 'mixed':
            plan += 'A combination of cardio and strength training would be ideal.';
            break;
    }

    document.getElementById('plan').innerText = plan;
});

function toggleTheme() {
    const currentBackground = document.body.style.backgroundColor;
    document.body.style.backgroundColor = currentBackground === 'white' ? '#333' : 'white';
    document.body.style.color = currentBackground === 'white' ? 'white' : 'black';
}
