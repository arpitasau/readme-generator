//Required installation
const fs = require("fs");
const inquirer = require("inquirer");
const chalk = require("chalk");
const generateMarkdown = require("./utils/generateMarkdown.js");



//This function is to validate that user added something when prompted
const validateInput = function(input){
    if(input === ''){
        return "Please add text to this field"
    }
    return true
};
// array of questions for user
const questions = [
    {
        type: 'input',
        message: chalk.white.bgRed.bold('What is your Github username?'),
        name: 'githubUsername',
        validate: validateInput
    },
    {
        type: 'input',
        message: chalk.blue.bgYellow.bold('What is your email address?'),
        name: 'emailAddress',
        validate: validateInput
    },
    {
        type: 'input',
        message: chalk.white.bgCyan.bold('What is your Github repo name?'),
        name: 'githubRepo',
        validate: validateInput
    },
    {
        type: 'input',
        message: chalk.white.bgMagenta.bold('What is your Project Title?'),
        name: 'projectTitle',
        validate: validateInput
    },
    {
        type: 'input',
        message: chalk.white.bgGreen.bold('Please describe your project'),
        name: 'description',
        validate: validateInput
    },
    {
        type: 'confirm',
        message: chalk.blue.bgYellow.bold('Would you like a table of contents?'),
        name: 'table',
    },


    {
        type: 'input',
        message: chalk.whiteBright.bgBlue.bold('What command does the user need to run to install dependencies?'),
        name: 'install',
        default: 'npm i',
        validate: validateInput
        
    },
    
    {
        type: 'input',
        message: chalk.white.bgMagentaBright.bold('How does one use your product?'),
        name: 'usage',
        validate: validateInput
    },
    {
        type: 'list',
        message: chalk.white.bgRed.bold('What type of licensing do you need?'),
        name: 'license',
        default: 'Use arrow key to navigate',
        choices: ['MIT', 'GPL 3.0', 'APACHE 2.0', 'BSD 3', 'No license']
    },
    {
        type: 'confirm',
        message: chalk.white.bgGreen.bold('Would you like to inform someone how to contribute?'),
        name: 'contributeTrueOrFalse'
    },
    {
        type: 'confirm',
        message: chalk.gray.bgWhite.bold('Would you like to include a Tests section?'),
        name: 'testsTrueorFalse'
    }, {
        when: function (response) {
          return response.testsTrueorFalse;
        },
        type: 'input',
        message: chalk.white.bgRed.bold('What command does the user need to test your program?'),
        name: 'testsContent',
        default: 'npm test',
        validate: validateInput
    },
];




// function to write README file
function writeToFile(fileName, data) {
    let generated = generateMarkdown(data);
    fs.writeFile(fileName, generated, function() {
        console.log(`${fileName} has been generated!`)
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (answers) {
        //writeToFile(`${answers.githubRepo}-README.md`, answers);
        writeToFile(`README.md`, answers);
    })

}

// function call to initialize program
init();
