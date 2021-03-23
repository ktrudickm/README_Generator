// TODO: Include packages needed for this application


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your projects name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Write a short description of your project.',
      name: 'descrip',
    },
    {
      type: 'checkbox',
      message: 'What kind of license should your project have?',
      name: 'license',
      choices: ['mit', 'apache-2.0', 'bsd', 'gpl'],
    },
    {
        type: 'checkbox',
        message: 'What kind of technologies does your project use?',
        choices: ['HTML', 'CSS', 'JS', 'Bootstrap'],
        name: 'tech',
      },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'depend',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribution',
    },
  ])
  .then(response => {
      const output = `
# ${response.name}

Project Description &mdash; ${response.descrip}

## Required Licenses

${response.license}

## Required Technologies

${response.tech}

## Commands

### Commands to run to install dependencies:

${response.depend}

### Tests

Commands to run to run appropriate tests:

${response.tests}

## Repo Usage

${response.usage}

## Contributions

${response.contribution}

`;

      fs.writeFile('README_gen.md', output, (err) => {
        err ? console.log(err): console.log("Generating README...");
    })
})