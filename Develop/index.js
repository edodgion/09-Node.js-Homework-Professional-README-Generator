// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')

// TODO: Create an array of questions for user input
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your Project Title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
      },
      {
          type: 'input',
          name: 'credit',
          message: 'List your collaborators, third-party assets, list the creators.',
        },
      {
        type: 'list',
        name: 'license',
        message: 'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project.',
        choices: [
            'MIT',
            'Apache 2.0',
            'GNU',
            'Rust',
            'WordPress'
        ]
      },
      {
        type: 'input',
        name: 'username',
        message: 'Please enter your github username for deployed github link',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
      }
       
    ]);
  };

const generateReadMe = (answers) => 
`# Title: ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credit}

## Licenese
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
This Application is ${answers.license}

## Questions
https://github.com/${answers.username}

## Email
${answers.email}

## Table of Content
### [Title](#title) ###

### [Description](#description) ###
### [Installation](#installation) ###
### [License](#license) ###
### [Credits](#credits) ###
### [Username](#questions) ###
### [Email](#email) ###
`;

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('GernerateREADME.md', generateReadMe(answers)))
      .then(() => console.log('Successfully wrote to util'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
