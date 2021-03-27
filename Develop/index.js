// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

var generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [{
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
    type: 'list',
    message: 'What kind of license should your project have?',
    name: 'license',
    choices: ['MIT', 'Apache', 'BSD', 'GPLv3', 'Boost', 'EPL', 'None'],
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
  {
    type: 'input',
    message: 'What is your github username for users with questions on the usage of this repo?',
    name: 'github',
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
             err ? console.log(err): console.log("Generating README...");
         })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
           writeToFile('README.md', generateMarkdown(response))
        })
}

// Function call to initialize app
init();


