// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path')
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the title for the project?"
    },
    {
        type: "input",
        name: "description",
        message: "What's the description for the project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation steps for the project"
    },
    {
        type: "list",
        name: "license",
        message: "What's the license for the project",
        choices: ["Apache_2.0", "Mozilla", "MIT", "None"]
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "usage",
        message: "What will this be used for?",
    },
    {
        type: "input",
        name: "contribute",
        message: "How to contribute to this application?",
    },
    {
        type: "input",
        name: "testing",
        message: "How is this application tested?",
    }
];

inquirer
    .prompt(questions)
    .then((answers) => {
        // Use user feedback for... whatever!!
        console.log("Here are your chosen answers.", answers)
        writeToFile("test.md", generateMarkdown({...answers}))
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// TODO: Create a function to initialize app
/*function init();

// Function call to initialize app
init();*/
