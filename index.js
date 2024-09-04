document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('applicant-form');
    const applicationsList = document.getElementById('applications');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('applicant-name').value;
        const email = document.getElementById('applicant-email').value;
        const position = document.getElementById('job-position').value;
        const resume = document.getElementById('resume').value;

        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${name}, Email: ${email}, Position: ${position}, Resume: ${resume}`;
        applicationsList.appendChild(listItem);

        form.reset();
    });
});
