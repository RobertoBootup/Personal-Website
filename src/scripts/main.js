// Existing code for projects
document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            name: 'GitHub Projects',
            url: 'https://github.com/your-github-username',
        },
        {
            name: 'Kaggle Projects',
            url: 'https://www.kaggle.com/your-kaggle-username',
        },
    ];

    const projectsContainer = document.getElementById('projects');

    if (projectsContainer) {
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `<a href="${project.url}" target="_blank">${project.name}</a>`;
            projectsContainer.appendChild(projectElement);
        });
    }

    // New code for the hamburger menu
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) { // Only run this logic if the form exists
        const submitButton = document.getElementById('submit-button');
        const inputs = form.querySelectorAll('input, textarea'); // Select all input and textarea fields

        // Function to check if all fields are filled
        const checkFormValidity = () => {
            let allFilled = true;
            inputs.forEach(input => {
                if (!input.value.trim()) { // Check if the field is empty
                    allFilled = false;
                }
            });

            // Enable or disable the button based on form validity
            submitButton.disabled = !allFilled;
        };

        // Add event listeners to all input fields
        inputs.forEach(input => {
            input.addEventListener('input', checkFormValidity); // Trigger check on every input change
        });

        // Change button color to blue when clicked
        form.addEventListener('submit', (e) => {
            submitButton.style.backgroundColor = '#007BFF'; // Blue
            submitButton.textContent = 'Sending...'; // Optional: Change button text
        });
    }
});