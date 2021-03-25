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


// const fs = require('fs');
// const inquirer = require('inquirer');


//   .then(response => {
//       const output = `
// # ${response.name}

// ## Project Description

// ${response.descrip}


// ## Table of Contents

//   1. Licenses
//   2. Required Technologies
//   3. Installation
//   4. Tests
//   5. Usage
//   6. Contributions
//   7. Questions


// ## Licenses

//   * ${response.license}  
//   ${licenseIcon(response.license)}


// ## Required Technologies

//   * ${response.tech}


// ## Installation

// Commands to Run to Install Dependencies:

// >${response.depend}


// ## Tests

// Commands to run to run appropriate tests:

// >${response.tests}


// ## Usage

// ${response.usage}


// ## Contributions

// ${response.contribution}


// ## Questions

// For questions regarding the usage of this repo, github account name is:

// ${response.github}

// `;

// //       fs.writeFile('README_gen.md', output, (err) => {
// //         err ? console.log(err): console.log("Generating README...");
// //     })
// // })

// function licenseIcon (license) {
//   console.log(license);
  // if (license !== "none"){
  //   return `![License](https://img.shields.io/badge/license-${license}-yellow.svg)`;
//   }  
// }

// // How do I put the liscence images at top of readme and pick out the boxes checked for licenses

// // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// // [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// // [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
// // [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
// // [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
// // [![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
