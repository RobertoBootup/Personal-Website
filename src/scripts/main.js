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