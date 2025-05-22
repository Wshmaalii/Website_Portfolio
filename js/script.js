import { skills, qualifications, projects } from './data.js';

document.addEventListener('DOMContentLoaded', function () {
    injectQualifications('school');
    injectSkills();
    injectProjects();

    document.getElementById('SchoolFilter').addEventListener('click', () => {
        filterQualifications('school');
    });
    document.getElementById('WorkFilter').addEventListener('click', () => {
        filterQualifications('work');
    });
});

// ✅ FIXED: Only count qualifications matching the filter for correct alternating layout
function injectQualifications(type) {
    const timelineContainer = document.querySelector('.timeline');
    timelineContainer.innerHTML = '';

    let count = 0;
    qualifications.forEach((qualification) => {
        if (qualification.type === type) {
            const timelineItem = document.createElement('div');
            timelineItem.classList.add('timeline-item', count % 2 === 0 ? 'left' : 'right');
            timelineItem.innerHTML = `
                <div class="timeline-date">${qualification.date}</div>
                <div class="timeline-content">
                    <h3>${qualification.title}</h3>
                    <p>${qualification.institution}</p>
                    <p>${qualification.description}</p>
                </div>
            `;
            timelineContainer.appendChild(timelineItem);
            count++;
        }
    });
}

function filterQualifications(type) {
    injectQualifications(type);

    document.querySelectorAll('.filterbutton').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(type === 'school' ? 'SchoolFilter' : 'WorkFilter').classList.add('active');
}

function injectSkills() {
    const skillsContainer = document.querySelector('.skills-grid');
    const skillsOutput = document.getElementById('skills-output');

    function resetSkillsList() {
        skillsOutput.innerHTML = '<p>Select a category to view skills</p>';
    }

    resetSkillsList();

    skills.forEach((skillCategory) => {
        const dropdown = document.createElement('div');
        dropdown.classList.add('dropdown');

        dropdown.innerHTML = `
            <div class="dropdown-header">
                <div class="dropdown-title">
                    <h3>${skillCategory.category}</h3>
                    <p>${skillCategory.experience}</p>
                </div>
                <button class="dropdown-arrow">▶</button>
            </div>
        `;

        dropdown.addEventListener('click', () => {
            skillsOutput.innerHTML = '';
            skillCategory.skillsList.forEach(skill => {
                const skillItem = document.createElement('div');
                skillItem.classList.add('skill-row');
                skillItem.innerHTML = `
                    <span>${skill.name}</span>
                    <span class="skill-percentage">${skill.percentage}%</span>
                `;

                const skillBar = document.createElement('div');
                skillBar.classList.add('skill-bar');

                const skillFill = document.createElement('div');
                skillFill.classList.add('skill-fill');
                skillFill.style.width = `${skill.percentage}%`;

                skillBar.appendChild(skillFill);
                skillsOutput.appendChild(skillItem);
                skillsOutput.appendChild(skillBar);
            });
        });

        skillsContainer.appendChild(dropdown);
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.dropdown')) {
            resetSkillsList();
        }
    });
}

function injectProjects() {
    const projectGrid = document.querySelector('.project-grid');

    projects.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card', project.category);
        projectCard.innerHTML = `
            <div class="project-title">
                <div>${project.title}</div>
                <div class="card-text">
                    <div class="card-info-container">
                        <div class="left-div">${project.tech}</div>
                    </div>
                </div>
            </div>
            <div class="project-description">
                ${project.description}
            </div>
            <div class="link-list">
                <a href="${project.link}">${project.link ? 'View Project' : 'No Link Available'}</a>
            </div>
        `;
        projectGrid.appendChild(projectCard);
    });

    document.getElementById('AllFilter').addEventListener('click', () => {
        filterProjects('ALL');
    });

    document.getElementById('CFilter')?.addEventListener('click', () => {
        filterProjects('C');
    });

    document.getElementById('JavascriptFilter').addEventListener('click', () => {
        filterProjects('Javascript');
    });

    document.getElementById('PythonFilter').addEventListener('click', () => {
        filterProjects('Python');
    });

    function filterProjects(category) {
        document.querySelectorAll('.project-card').forEach(project => {
            if (category === 'ALL' || project.classList.contains(category)) {
                project.style.display = 'inline-block';
            } else {
                project.style.display = 'none';
            }
        });
    }
}

document.getElementById('night-mode-toggle').addEventListener('click', function () {
    const darkModeLink = document.getElementById('dark-mode-stylesheet');

    if (!darkModeLink) {
        const link = document.createElement('link');
        link.id = 'dark-mode-stylesheet';
        link.rel = 'stylesheet';
        link.href = 'css/darkmode.css';
        document.head.appendChild(link);
    } else {
        darkModeLink.remove();
    }
});
